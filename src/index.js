const app = require("./app");
const dotenv= require("dotenv");
const path = require("path");

dotenv.config({path:"./config.env"});

app.listen(process.env.PORT, function(){
    console.log("App is running on port: "+process.env.PORT);
})