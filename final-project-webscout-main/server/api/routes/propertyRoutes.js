import express from "express";

import {
  getAll,
  create,
  update,
  remove,
  getOne,
  search,
  getAllApprovedProps,
  approveProp
} from "../controllers/propertyController.js";

//Auth middleware for checking user authentication
import auth from "../middleware/auth.js";
import adminauth from "../middleware/adminauth.js";
const propertyRouter = express.Router();
//Property Routes
propertyRouter.get("/search", search);
propertyRouter.get("/getAll", getAllApprovedProps)
propertyRouter.get("/", getAll);
// propertyRouter.post("/", auth, create);
propertyRouter.post("/", create);

propertyRouter.put("/:id", auth, update);
propertyRouter.delete("/:id", remove);
propertyRouter.get("/:id", getOne);
propertyRouter.patch("/:id", approveProp);

export default propertyRouter;
