import { transporter, mailOptions } from "@/config/nodemailer";

import '@/template/email.css'


const subject = "Your ticket is ready!!";

const contact_field = {
  fullname: "Traveler's Full Name",
  email: "Traveler's Email",
  date: "Travel Date",
  destination: "Destination Planet",
};

const generateEmailData = (data) => {
  const strinData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${contact_field[key]}: \n ${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `<h1>${contact_field[key]}</h1><p class="large">${val}</p>`),
    ""
  );
  return {
    text: strinData,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="email.css">
    </head>
    <body>
        <div class="container">
            <div class="row">
                ${htmlData}
                </br>
                <h2 class="info">Start packing and getting ready for your trip, we will contact you again shortly with more information :D</h2>
            </div>
        </div>
    </body>
    </html>`,
  };
};

const Contact = async (req, res) => {
  const data = req.body;
  if (req.method === "POST") {
    if (!data.fullname || !data.date || !data.destination || !data.email) {
      return res.status(400).json({ message: "no data" });
    }
    
    try {
      await transporter.sendMail({
        ...mailOptions,
        to: data.email,
        ...generateEmailData(data),
        subject: subject,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  res.status(400).json({ message: "Bad Request" });
};

export default Contact;
