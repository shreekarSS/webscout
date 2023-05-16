import { userService } from "../services/index.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// For error handling

const errorHandler = (message, res) => {
    res.status(500).json({ error: message });
  };
  const setSuccessResponse = (data, res) => {
    res.status(200).json(data);
  };
// for user creation
export const createUserController =
    async (req, resp) => {
        const user = await userService.findUser(req.body.email);
        if (user) {
            return resp.json({
                error: 'User already exists'
            }).status(400);
        }

        const {name, email, phone, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = await userService.createUser({
            name,
            email,
            phone,
            password: hashedPassword
        });

        resp.json(createdUser);
        resp.status(200);
    }

    // for creating user session
    export const createUserSessionController =
    async (req, resp) => {

        const {email, password} = req.body;
        const user = await userService.findUser(email);

        if (!user) {
            return resp.json({
                error: "The user does not exist"
            }).status(400);
        }
        console.log("pass is ",user.password);
        console.log("pass is ",password);

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            
            return resp.json({
                error: "The password is incorrect"
            }).status(400);
        }

        // Generate token
        const token = jwt.sign({email: user.email}, 'webscout_secret',{
            expiresIn: "1h"
        });

        resp.json({
            token
        }).status(200);
    }


    // for creating admin session
    export const createAdminSessionController =
    async (req, resp) => {

        const {username, password} = req.body;

        if (!username) {
            return resp.json({
                error: "No user given"
            }).status(400);
        }
        console.log("pass is ",password);
        //hardcoded admin username and password
        const match = username === 'sysadmin' && password === 'sysadmin';
        if (!match) {
            
            return resp.json({
                error: "The username or password is incorrect"
            }).status(400);
        }

        // Generate token
        const token = jwt.sign({isAdmin: true}, 'webscout_admin_secret',{
            expiresIn: "1h"
        });

        console.log(token);
        resp.json({
            token
        }).status(200);
    }

        // for adding favourite
    export const addFavoriteController = async (req, resp) => {
        const {email, propertyId} = req.body;
        await userService.addFavorite(email, propertyId);

        const user = await userService.findUser(email);
        return resp.json(user).status(200);
    }
        // for deleting favorites
    export const deleteFavoriteController = async (req, resp) => {
        const {email, propertyId} = req.body;
        await userService.deleteFavorite(email, propertyId);

        const user = await userService.findUser(email);
        return resp.json(user).status(200);
    }    
        // for deleting user 
    export const deleteUserController = async (req, res) => {
    try {

        if (!req?.isAdmin) {
            res.status(400).json({ error: "Not an admin" });
        }

      const id = req.params.id;
      const deletedItem = await userService.deleteUser(id);
      setSuccessResponse(deletedItem, res);
    } catch (err) {
        errorHandler(err.message, res);
    }
  };

        // for getting all users (to be used only for admin)
  export const getAllUsersController = async (req, res) => {
  
    try {

        if (!req?.isAdmin) {
            res.status(400).json({ error: "Not an admin" });
        }

      const items = await userService.getAllUsers();
      setSuccessResponse(items, res);
    } catch (err) {
        errorHandler(err.message, res);
    }
  };
  