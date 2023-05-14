const JWT = require("jsonwebtoken"); // https://jwt.io/introduction
const secret = process.env.JWT_SECRET; // process is a gloval node object

class TokenGenerator {
  static jsonwebtoken(user_id) { // static is class method rather than instance method
    // .sign is a JWT method that takes a payload object and secret key and returns a string representing a token
    return JWT.sign({
      user_id: user_id,
      iat: Math.floor(Date.now() / 1000), // iat => issued at
      
      // Set the JWT token to expire in 10 minutes
      exp: Math.floor(Date.now() / 1000) + (10 * 60)
    }, secret);
  }
}

module.exports = TokenGenerator;
