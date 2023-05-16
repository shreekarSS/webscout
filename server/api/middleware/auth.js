import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    //Get the token
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1]
    const isCustomAuth = token.length < 500;

    let decodedData;

    //Check if normal auth or google auth
    if (token && isCustomAuth) {
      console.log("Using custom auth");
      decodedData = jwt.verify(token, "webscout_secret");

      console.log(decodedData);

      req.email = decodedData?.email || undefined;
      console.log(req.email);

    } else {
      decodedData = jwt.decode(token);

      req.email = decodedData?.sub || undefined;
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

export default auth;
