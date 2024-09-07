const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/user").then(() => {
    console.log("mongodb connected")
}).catch((err) => {
    console.log(err)
})



const Userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


const User = mongoose.model("user", Userschema)


app.get("/login", async (req, resp) => {
    const userda = req.query;
    try {
        let data = await User.insertMany(userda)
        resp.send("data stored")
    } catch (err) {
        resp.send(`err ${err}`)
    }
})

app.post("/signin", async (req, resp) => {
    const { name } = req.body;

    try {
        const userdata = await User.find({ name: name })
        resp.send(userdata)
    } catch (err) {
        resp.send(`err ${err}`)
        resp.status(300)
    }
})


const port = 8080;
app.listen(port, () => {
    console.log("server running")
})