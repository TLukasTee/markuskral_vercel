import nodemailer from 'nodemailer';

export async function POST(req, res) {
  console.log("API Route Called"); // Print this at the very top

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const formData = JSON.parse(req.body);

  // Configure email sender (use your email service provider's details)
  const transporter = nodemailer.createTransport({
    host: 'your-email-provider.com',
    port: 465,
    secure: true,
    auth: {
      user: 'your-email@domain.com',
      pass: 'your-email-password'
    }
  });

  // Send the email
  try {
    const mailOptions = {
      from: 'your-email@domain.com',
      to: 'info@lukashyd.at',
      subject: 'Contact Form Submission',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}` // Customize
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent!' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
}