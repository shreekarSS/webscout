//Importing adn exporting all controllers

import {createUserController, 
    createUserSessionController,
    createAdminSessionController,
addFavoriteController,
deleteFavoriteController,
deleteUserController,
getAllUsersController
} from './userController.js'


const userController = {
    createUserController,
    createUserSessionController,
    createAdminSessionController,
    addFavoriteController,
    deleteFavoriteController,
    deleteUserController,
    getAllUsersController
};
export { userController };