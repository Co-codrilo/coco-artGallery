const nodemailer = require("nodemailer")

const sendEmail = async options => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0dcd803c055390",
      pass: "0c58bd927d874b"
    }
  });
  const mensaje = {
    from: "Cocodrilo Art-Gallery <noreply@cocodriloart.com>",
    to: options.email,
    subject: options.subject,
    text: options.mensaje
  }

  await transport.sendMail(mensaje)
}

module.exports = sendEmail;