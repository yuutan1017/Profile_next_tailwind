import { createTransport } from "nodemailer";

const transporter = createTransport({
    host: "n.you0611@gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
    }
});