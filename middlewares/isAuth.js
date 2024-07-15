const jwt = require("jsonwebtoken");
const isAuthenticated = async (req, res, next) => {
  //get the token from headers
  const headerObj = req.headers;
  const token = headerObj.authorization.split(" ")[1];
  //verify the token
  const verifyToken = jwt.verify(token, "masynctechKey", (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
  if (verifyToken) {
    //save the user into req.obj
    req.user = verifyToken.id;
    next();
  } else {
    const err = new Error("Token expired please login again");
    next(err);
  }
};
module.exports = isAuthenticated;
