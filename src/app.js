const express = require("express")
const hbs = require("hbs")

const mongoose = require('mongoose')
const app = express()
const bodyParser = require("body-parser")


const routes = require('./routes/main')
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service = require("./models/Service")



app.use(bodyParser.urlencoded({
    extended: true
}))

//static/css/style.css
app.use('/static', express.static("public"))

app.use('', routes)


//template engine

app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")



//mongodb connection

mongoose.connect("mongodb://localhost/website", () => {
    console.log("DB connected")








    // foir services connection//

    // Service.create([
    //     {
    //         icon:'fa-solid fa-cubes ',
    //         title:'Provide best softwares',
    //         description:'we provide software that fulfills the requirements of our clients.',
    //         linkText:'Check',
    //         link:'#'
    //     },
    //     {
    //         icon:'fa-solid fa-code',
    //         title:'Web Development',
    //         description:'we are known for building reliable websites.',
    //         linkText:'Check',
    //         link:'#'
    //     },
    //     {
    //         icon:'fa-solid fa-microchip ',
    //         title:'App Development',
    //         description:'our apps are as secure as the Swiss bank.',
    //         linkText:'Check',
    //         link:'#'
    //     },
    //     {
    //         icon:'fa-solid fa-bug-slash',
    //         title:'After Sales services',
    //         description:'Our maintanance department are world famous.',
    //         linkText:'Check',
    //         link:'#'
    //     },
    //     {
    //         icon:'fa-brands fa-connectdevelop',
    //         title:'Better relations between developers and clients',
    //         description:'we put our clients and employees on the first rank of our priority list.',
    //         linkText:'Check',
    //         link:'#'
    //     },
    //     {
    //         icon:'fa-solid fa-circle-nodes',
    //         title:'24X7 Support',
    //         description:'Our customer-care department employees do not sleep.',
    //         linkText:'Check',
    //         link:'#'
    //     },
    // ])


    // for carousel connection//

    // Slider.create([
    //     {
    //         title:"All IT Solutions",
    //         subTitle:"We provide all IT solutions at one place",
    //         imageUrl:"/static/image/s1.jpg"
    //     },
    //     {
    //         title:"Web Development",
    //         subTitle:"We have the reputation of building most secure and reliable WebSites",
    //         imageUrl:"/static/image/s2.jpg"
    //     },
    //     {
    //         title:"Mobile App Development",
    //         subTitle:"Our Developers are known for building Cross-Platform Applications via Flutter and React Native",
    //         imageUrl:"/static/image/s3.jpg"
    //     },
    // ])







    // for navbar connection//

    // Detail.create({
    //     brandName: "codeKnight",
    //     brandIconUrl: "https://yt3.ggpht.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s88-c-k-c0x00ffffff-no-rj",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             label: "Contact us",
    //             url: "/contact-us"
    //         },


    //     ]
    // })
})



app.listen(process.env.PORT | 5555, () => {
    console.log("Server Started")
});
