const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");

admin.initializeApp();
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "jfsabinov@gmail.com",
    pass: process.env.PSWD,
  },
});

exports.sendEmail = functions
  .runWith({ enforceAppCheck: true })
  .https.onCall((data, context) => {
    console.log(data);
    if (context.app === undefined) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called from an App Check verified app."
      );
    }
    else
    {
        return mailSenderMail(data);
    }

  });

async function mailSenderMail(data_obj) {

  let data = {
    email: data_obj.email,
    name: data_obj.name,
    message: data_obj.message,
  };
  const mailOptions = {
    from: `jfsabinov@gmail.com`,
    to: `jfsabinov@gmail.com`,
    subject: "Nová správa",
    html: `Nová správa od ${data.name}, odpovedz späť na e-mail:${data.email}. Správa: " ${data.message}"`,
  };

  return transporter
    .sendMail(mailOptions)
    .then((r) => {
      return r;
    })
    .catch((e) => {
      throw new functions.https.HttpsError(
        "aborted",
        "Reservation unsuccessfull, try again"
      );
    });
}
