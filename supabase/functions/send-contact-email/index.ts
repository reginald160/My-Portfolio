import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to Reginald
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["ozougwu2016@gmail.com"],
        subject: `New Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d4a021;">New Portfolio Contact Message</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: #fff; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
              <h3 style="margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const error = await notificationRes.text();
      throw new Error(`Failed to send notification email: ${error}`);
    }

    // Send confirmation email to the sender
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Reginald Ozougwu <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for reaching out!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d4a021;">Thank You, ${name}!</h2>
            <p>I've received your message and will get back to you as soon as possible.</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Your Message:</h3>
              <p><strong>Subject:</strong> ${subject}</p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p>Best regards,<br><strong>Reginald Ozougwu</strong><br>Senior .NET Developer</p>
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">
              London, United Kingdom | ozougwu2016@gmail.com
            </p>
          </div>
        `,
      }),
    });

    console.log("Emails sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
