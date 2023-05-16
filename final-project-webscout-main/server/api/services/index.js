//importing and exporting all users
import { findUser, createUser, addFavorite, deleteFavorite , getAllUsers, deleteUser} from "./userService.js";

export const userService = {
    findUser,
    createUser,
    addFavorite,
    deleteFavorite,
    getAllUsers,
    deleteUser
};