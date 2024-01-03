import express from "express"
import bodyParser from "body-parser";
import path from "path";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))


var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "thakursnehaa007@gmail.com",
        pass: "duan qgwq ndky saya"
    }
}
)

app.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "public", "index.html");
    console.log(indexPath)
    res.sendFile(indexPath);
})
app.post("/", (req, res) => {
    const { name, email, message } = req.body;
    var dataToSend = `Name: ${name}\nEmail: ${email}\nMessage:${message}`;
    const mailOptions = {
        from: "thakursnehaa007@gmail.com",
        to: "thakursnehaa007@gmail.com",
        subject: "New message from Portfolio Contact Form",
        text: dataToSend
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send("Error occurred. Please try again later.")
        } else {
            console.log("Email sent: " + info.response)
            res.redirect("/")
        }
    })
})
app.listen(process.env.PORT || 3000, message => {
    console.log("Server is running at port 3000");
})
