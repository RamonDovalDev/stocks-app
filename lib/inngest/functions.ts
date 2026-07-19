import { step } from "inngest";
import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";
import { role } from "better-auth/client";
import { success } from "better-auth";
import { sendWelcomeEmail } from "../nodemailer";

export const sendSignUpEmail = inngest.createFunction(
  {
    id: "sign-up-email",
    triggers: { event: "app/user.created" },
  },
  async ({ event, step }) => {
    const userProfile = `
    - Country: ${event.data.country}
    - Investment goals: ${event.data.investmentGoals}
    - Risk tolerance: ${event.data.riskTolerance}
    - Preferrend Industry: ${event.data.preferredIndustry}
  `;

    const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
      "{{userProfile}}",
      userProfile,
    );

    const response = await step.ai.infer("generate-welcome-intro", {
      model: step.ai.models.gemini({ model: "gemini-2.0-flash-lite" }),
      body: {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      },
    });

    await step.run("send-welcome-email", async () => {
      const part = response.candidates?.[0]?.content?.parts?.[0];
      const introText =
        (part && "text" in part ? part.text : null) ||
        "Thank for joining Signalist. Your market-stocks tracker starts now!";

      const {
        data: { email, name },
      } = event;

      return await sendWelcomeEmail({ email, name, intro: introText });
    });

    return {
      success: true,
      message: "Welcome email successfully sent!",
    };
  },
);
