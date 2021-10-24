require('dotenv').config({ path: __dirname+'\\.env' })

module.exports = {
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI,
    db_name: process.env.DB_NAME,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET
}