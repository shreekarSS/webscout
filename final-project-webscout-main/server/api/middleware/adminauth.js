import jwt from "jsonwebtoken";

const adminauth = async (req, res, next) => {
  try {
    //Get the token
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1];

    console.log(token);
    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, "webscout_admin_secret");

      console.log(decodedData);

      req.isAdmin = decodedData?.isAdmin || undefined;
      console.log(req.isAdmin);

    }

    next();
  } catch (err) {
    console.log(err);
  }
};

export default adminauth;
