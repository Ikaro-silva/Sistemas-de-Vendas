const dotenv=require("dotenv")
dotenv.config()

const conectBD={
    URI:process.env.URI
}
const keySecret={
    apiKey:process.env.apiKey
}

module.exports={conectBD,keySecret}