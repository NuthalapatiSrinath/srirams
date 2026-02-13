import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransporter({
  host: "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT || 587),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "devakarthik8899@gmail.com",
    pass: process.env.EMAIL_PASS || "emse yvcn clnh xqqv",
  },
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Email configuration error:", error);
  } else {
    console.log("✅ Email server is ready to send messages");
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message",
      });
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || "devakarthik8899@gmail.com",
      to: process.env.EMAIL_USER || "devakarthik8899@gmail.com",
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">
              🎓 New Contact Form Submission
            </h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #1e40af; margin-bottom: 15px;">Contact Details:</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; background-color: #eff6ff; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 10px; background-color: #f9fafb;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #eff6ff; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; background-color: #f9fafb;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #eff6ff; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px; background-color: #f9fafb;">${phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #eff6ff; font-weight: bold;">Subject:</td>
                  <td style="padding: 10px; background-color: #f9fafb;">${subject || "No subject"}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #1e40af; margin-bottom: 15px;">Message:</h3>
              <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; border-radius: 5px;">
                ${message}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              <p>This email was sent from Sriram's IAS Contact Form</p>
              <p>Received at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || "devakarthik8899@gmail.com",
      to: email,
      subject: "Thank you for contacting Sriram's IAS",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0;">Sriram's IAS</h1>
              <p style="color: #6b7280; margin: 5px 0;">Excellence in Civil Services</p>
            </div>
            
            <h2 style="color: #1e40af;">Dear ${name},</h2>
            
            <p style="color: #374151; line-height: 1.6;">
              Thank you for reaching out to us! We have received your message and our team will get back to you within 24-48 hours.
            </p>
            
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Your Message:</h3>
              <p style="color: #4b5563; margin: 0;">${message}</p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              In the meantime, feel free to explore our website for more information about our courses and programs.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:8686818384" style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 5px;">
                📞 Call Us: 8686818384
              </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              <p><strong>Sriram's IAS</strong></p>
              <p>15A/40, WEA, Karol Bagh, New Delhi - 110005</p>
              <p>Email: enquiry@sriramsias.com | Phone: 8686818384</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
      error: error.message,
    });
  }
});

// Callback request endpoint
app.post("/api/request-callback", async (req, res) => {
  try {
    const { name, phone, email, course } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please provide name and phone number",
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || "devakarthik8899@gmail.com",
      to: process.env.EMAIL_USER || "devakarthik8899@gmail.com",
      subject: `🔔 New Callback Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #dc2626; border-bottom: 3px solid #dc2626; padding-bottom: 10px;">
              🔔 Urgent: New Callback Request
            </h2>
            
            <div style="margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; background-color: #fef2f2; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 10px; background-color: #fef2f2;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f9fafb; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px; background-color: #f9fafb;"><strong>${phone}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #fef2f2; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; background-color: #fef2f2;">${email || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f9fafb; font-weight: bold;">Course:</td>
                  <td style="padding: 10px; background-color: #f9fafb;">${course || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #fef2f2; font-weight: bold;">Time:</td>
                  <td style="padding: 10px; background-color: #fef2f2;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #fef2f2; padding: 15px; border-left: 4px solid #dc2626; border-radius: 5px; margin-top: 20px;">
              <p style="margin: 0; color: #dc2626; font-weight: bold;">⚡ Priority: Please call back as soon as possible!</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Callback request received! We'll contact you soon.",
    });
  } catch (error) {
    console.error("Callback request error:", error);
    res.status(500).json({
      success: false,
      message:
        "Failed to process callback request. Please try calling us directly.",
      error: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(
    `📧 Email configured with: ${process.env.EMAIL_USER || "devakarthik8899@gmail.com"}`,
  );
});

export default app;
