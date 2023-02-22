const express = require('express')
const { route } = require('express/lib/application')
const async = require("hbs/lib/async")
const Contact = require("../models/Contact")
const Detail = require("../models/Detail");
const Service = require('../models/Service');
const Slider = require('../models/Slider');


const routes = express.Router()


routes.get("/", async(req, res) => {

   const details = await Detail.findOne({"_id": "63d2d82ebd6ff027ce2ebf9e"})
   const slides = await Slider.find()
   const services = await Service.find()
    // console.log(details)
    // console.log(slides)

    res.render("index",{
        details:details,
        slides: slides,
        services:services

    })

});

routes.get('/gallery', async(req, res) => {
    const details = await Detail.findOne({"_id": "63d2d82ebd6ff027ce2ebf9e"})
    res.render("gallery",{
        details:details
    })
})

//process contact form
routes.post("/process-contact-form",async(req,res)=>{
    console.log("this form is submitted")
    console.log(req.body)

    //save the data to db
    try{
        const data = await Contact.create(req.body)
        console.log(data)
        res.redirect("/")

    }catch(e)
    {
        console.log(e)
        res.redirect("/")
    }

    
})


module.exports = routes