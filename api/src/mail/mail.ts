import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Outlook365', 
  auth: {
    user: 'price-claire@outlook.com', 
    pass: process.env.OUTLOOK_PASSWORD
  }
});

export const sendMail = async (mailOptions, callback) => {
  try {
    const details = await transporter.sendMail(mailOptions);
    callback(details);
  } catch (error) {
    console.log(error);
  }
};

