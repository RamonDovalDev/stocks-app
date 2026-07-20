"use server";

import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";

export const signUpWithEmail = async ({
  fullName,
  email,
  password,
  country,
  investmentGoals,
  riskTolerance,
  preferredIndustry,
}: SignUpFormData) => {
  try {
    const response = await auth.api.signUpEmail({
      body: { name: fullName, email, password },
    });

    if (response) {
      await inngest.send({
        name: "app/user.created",
        data: {
          name: fullName,
          email,
          country,
          investmentGoals,
          riskTolerance,
          preferredIndustry,
        },
      });
    }

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.log("Sign up failed", error);
    return {
      success: false,
      error: "Sign up failed",
    };
  }
};

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
  try {
    const response = await auth.api.signInEmail({ body: { email, password } });

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error("Sign in failed", error);
    return {
      success: false,
      error: "Sign in failed",
    };
  }
};
