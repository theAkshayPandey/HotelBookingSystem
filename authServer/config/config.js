require(`dotenv`).config();
const envVars= process.env;


module.exports ={
port: envVars.PORT,
mysql:{
    username: envVars.MYSQL_USERNAME,
    password: envVars.MYSQL_PASSWORD,
    db:envVars.MYSQL_DATABASE
},
jwtSecret: envVars.secretOrKey
};