import nodemailer from 'nodemailer';
// import fs from 'fs';
import fs from 'jsonfile';
// import testResults form  jsonfile.readFileSync('./test-results.json');

const testResults = fs.readFileSync('./test-results.json');


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'alice.davis@ethereal.email',
        pass: 'rJGQ97RewzT658rPEF'
    }
});
console.log("testResults",testResults)
const formattedResults = `
${testResults.numFailedTestSuites} failed tests
${testResults.numPassedTestSuites} passed tests
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
