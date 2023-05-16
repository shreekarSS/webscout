import userModel from "../models/userModel.js";

export const findUser = (email) => {
    return userModel.findOne({email}).exec();
};

export const createUser = ({name, email, password, phone}) => {
    return userModel.create({
        name,
        email,
        password,
        phone
    });
};

export const addFavorite = (email, propertyId)  => {
    return userModel.findOne({email}).then(user =>{
        if (!user.favorites.find(f => f == propertyId)) {
            user.favorites.push(propertyId);
            user.save();
        }
    })
}

export const deleteFavorite = (email, propertyId)  => {
    return userModel.findOne({email}).then(user =>{
        user.favorites = user.favorites.filter(f => f != propertyId);
        user.save();
    })
}

  export const getAllUsers = (params = {}) => {
    const promise = userModel.find(params).exec();
    return promise;
  };
  

  export const deleteUser = (id) => {
    const promise = userModel.findByIdAndRemove({ _id: id }).exec();
    return promise;
  };
