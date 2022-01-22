// const jwt = require("jsonwebtoken");
// const auth = (req, res, next) => {
//     const { authorization } = req.headers
//  const valid = jwt.verify(authorization, 'hdgifjhiuhewuihiewdkwejieui778r3$fl')
//  console.log(valid)
// }
// module.exports = auth;
// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
// const auth = async (req, res, next) => {
//   if (req.url == "/" && req.method == "GET") {
//     next();
//   } else {
//     const { authorization } = req.headers;
    

//     const payload = await jwt.verify(authorization, 'process.env.SECRET');

//     User.findOne({ username: payload.username }).then((user) => {
//       req.user = user;
      
//       next();
//     });
//   }
// };

// module.exports = auth;
