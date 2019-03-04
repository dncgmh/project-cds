import * as nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD
  }
});
const mailOption = (object): MailOptions => ({
  from: '',
  to: object.email,
  subject: 'Please confirm your email address',
  html:
    `<div style="background-color:#221d53;padding:8px 15px 3px;border-top-left-radius:5px;border-top-right-radius:5px">
  </div>` +
    '<h2>Hello ' +
    object.name +
    '</h2>' +
    'Thanks for signing up! Please verify your account by clicking the link: \nhttp://' +
    object.host +
    '/api/auth/verify/' +
    object.token +
    '.\n' +
    '<p>Best regards</p>'
});

export function sendMail(options) {
  return transporter.sendMail(mailOption(options), function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
}
