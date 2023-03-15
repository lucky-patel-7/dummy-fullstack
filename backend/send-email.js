import nodemailer from 'nodemailer';
import fs from 'fs';

import testResults from './test-results.json';

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'alice.davis@ethereal.email',
        pass: 'rJGQ97RewzT658rPEF'
    }
});

const formattedResults = `
${testResults.numFailedTests} failed tests
${testResults.numPassedTests} passed tests
${testResults.numPendingTests} pending tests`;

const mailOptions = {
  from: `"STTL test" <karan.shah@silvertouch.com>`,
  to: "lucky.patel@silvertouch.com",
  subject:"Test SUB",
  text: formattedResults
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
