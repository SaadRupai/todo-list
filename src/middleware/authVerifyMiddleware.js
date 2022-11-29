let jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers["token-key"];
    jwt.verify(token, 'secretKey12345', function (err, decoded) {
        if(err){
            res.status(401).json({status:"unauthorized"});
        }
        else{
            //taking username from decoded data
            let userName = decoded.data["userName"];
            req.headers.userName = userName;
            // console.log(userName);

            next();
        }
    });
}