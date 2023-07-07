const nodemailer = require('nodemailer')
const path = require('path');


//sender information
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "customerExp11@outlook.it",
        pass: "appleinc1"
    }
});

 function sendmail(first_name , userEmail , planet){

    const options = {
        from: "customerExp11@outlook.it",
        to: userEmail,
        subject: `Travel to ${planet}`,
        html: `<img src='cid:inspaceLogo' alt='logo image' width='25'><h1>inSpace agency</h1> <h2>Thank you ${first_name}, the reservation for ${userEmail} has been received, we will contact you for further information about your travel to ${planet}</h2> <p>click<a href='http://localhost:3000/Home'> here </a>to go to homepage</p>`,
    };
    
    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
            return
        }
    console.log("email sent : " + info.response);
} )
}

module.exports = sendmail
