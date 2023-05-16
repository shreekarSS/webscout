import express from 'express'
import { userController } from '../controllers/index.js'

const router = express.Router();
import adminauth from "../middleware/adminauth.js";

// routing for creating user and session , adding favourites and removing favorites, deleting and getting all users(only for admin)
router.route("/createUser")
        .post(userController.createUserController);

router.route("/session")
        .post(userController.createUserSessionController);

router.route("/adminsession")
        .post(userController.createAdminSessionController);        

router.route("/favorites")
        .post(userController.addFavoriteController)
        .delete(userController.deleteFavoriteController);


router.delete("/:id", userController.deleteUserController);

router.get("/", userController.getAllUsersController);


export default router;
