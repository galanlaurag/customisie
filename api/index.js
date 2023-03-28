const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require('path');
const buildPath = path.join(__dirname, '..', 'build');
const transporter = require('./routes/formConfig');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL)
.then(() =>
    console.log("DBConnection Successful!"))
.catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use(express.static(buildPath));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

//form send
app.post('/api/send', (req, res) => {

    // if (!req.body.captcha) {
    //     return res.json({success: false, msg: 'Please select captcha'});
    //
    //     // Secret key
    //     const secretKey = process.env.CAPTCHA_SECRET_KEY;
    //
    //     // Verify URL
    //     const query = stringify({
    //         secret: secretKey,
    //         response: req.body.captcha,
    //         remoteip: req.connection.remoteAddress
    //     });
    //     const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;
    //
    //     // Make a request to verifyURL
    //     const body = fetch(verifyURL).then(res => res.json());
    //
    //     // If not successful
    //     if (body.success !== undefined && !body.success) {
    //         console.log("not success")
    //         return res.json({success: false, msg: 'Failed captcha verification'});
    //     } else {
    //         console.log("success")
    //
    //         // If successful
    //         return res.json({success: true, msg: 'Captcha passed'});
    //     }
    //
    // }


    try {
        const mailOptions = {
            from: req.body.email,
            to: process.env.EMAIL,
            subject: "Formularz kontaktowy - nowa wiadomość",
            html: `
              <h3>Szczegóły wiadomości:</h3>
              <ul>
                <li>Imię: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Wiadomość: ${req.body.message}</li>
              </ul>
              `
        };

        transporter.sendMail(mailOptions, function (err) {
            if (err) {
                console.log(err);
                console.log(res.data);
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong. Try again later'
                });
            } else {
                res.send({
                    success: true,
                    message: 'Thanks for contacting us. We will get back to you shortly'
                });
            }
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
        });
    }
});

//port 5000 is private, 80 public
// app.listen(process.env.PORT || 5000, () => {
app.listen(80, () => {
    console.log("Backend server is running!");
})