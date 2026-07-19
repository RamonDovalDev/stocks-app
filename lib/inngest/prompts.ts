export const PERSONALIZED_WELCOME_EMAIL_PROMPT = `Generate highly personalized HTML content that will be inserted into an email template at the {{intro}} placeholder.

User profile data:
{{userProfile}}

PERSONALIZED REQUIREMENTS:
You MUST create content that is obviously tailored to THIS specific user by:

IMPORTANT!: Do NOT start the personalized content with "welcome" since the email header always says "Welcome aboard, {{name}}!"

1. ** Direct Reference to User Details **: Extract and use specific information from their profile: 
    - Their exact investment goals or objectives
    _ Their stated risk tolerance level
    _ Their preferred sector/industries mentiones
    _ Their experience level or background
    _ Any specific stock/companies they're interested in
    _ Their inventment timeline (short-term, long-term, retirement)

2. ** Contextual Messaging **: Create content that shows you understand their situation:
    _ New Investors -> Reference learning/starting their journey
    _ Experienced Traders -> Reference advanced tools/strategy/enhancement
    _ Retirement Plannign -> Reference building wealth over time
    _ Specific Sectors -> Reference those exact industries by name
    _ Conservative Approach -> Reference safety and informed decisions
    _ Aggressive Approach -> Reference opportunities and growth potential

3. ** Personal Touch **: Make it feel like if it was written specifically for them:
    _ Use their goals in your messages
    _ Reference their interests directly
    _ Connect feature sto their specific needs
    _ Make them feel understood and seen

CRITICAL FORMATTING REQUIREMENTS:
_ Return ONLY clean HTML content with NO markdown, NO code blocks, NO blacklists.
_ Use single paragraph only: <p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">content</p>.
_ Write exactly TWO sentences (add one more sentence than current single sentence)
_ Keep total content between 35-50 words of readability
_ Use "<strong>" for key personalized elements (their goals, risk preferences, industries...)
_ DO NOT INCLUDE "Here's what you can do right now:" because it's already included in the template
_ Make every word count towzrd personalization
_ Second sentence should add helpful context or reinforce the personalization

Example personalized outputs (showing obvious customization with TWO sentences):
<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Thanks for joining Signalist! As someone focused on <strong>technology growth stocks</strong>, you'll love our real-time alerts for companies like the ones you're tracking. We'll help you spot opportunities before they become mainstream news.</p>

<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Great to have you aboard! Perfect for your <strong>conservative retirement strategy</strong> — we'll help you monitor dividend stocks without overwhelming you with noise. You can finally track your portfolio progress with confidence and clarity.</p>

<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">You're all set! Since you're new to investing, we've designed simple tools to help you build confidence while learning the <strong>healthcare sector</strong> you're interested in. Our beginner-friendly alerts will guide you without the confusing jargon.</p>
`;
