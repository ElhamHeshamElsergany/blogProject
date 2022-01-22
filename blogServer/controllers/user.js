// const User = require("../models/user");
// const jwt = require("jsonwebtoken");
// const signin = async ({ username, password }) => {
//     const user = await User.findOne({ username });
//     const isValid = await user.comparePassword(password);
  
//     if (!isValid) {
//       throw "UN_AUTH";
//     }
//     return jwt.sign(
//       {
//         username,
//         _id: user._id,
//         maxAge: "2d",
//       },
//       "kjjdkchjdfdsjnc$lkdmfklc54cdd"
//     );
//   };
//   module.exports =  {login }