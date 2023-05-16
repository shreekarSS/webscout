import Item from "../models/propertyModel.js";

//Get Search Properties
export const searchProperties = (itemName) => {
  const promise = Item.find({
    $or: [{ itemName }, { address: itemName }, { cost: itemName }],
  });
  return promise;
};

//Get All Properties
export const getAllProperties = (params = {}) => {
  const promise = Item.find(params).exec();
  return promise;
};

//Get Approved Properties
export const getApprovedProperties = (params ={}) =>{
  const promise = Item.find({adminStatus: "Approved"}).exec();
  return promise;
};

//Create Property
export const createProperties = (item) => {
  const newItem = new Item(item);
  // Add new score property here, as newItem.score = calculateScore(); (newItem.bedrooms / newItem.cost or whatever)
  return newItem.save();
};

//Update Property
export const updateProperty = (item) => {
  item._id = item.id;
  item.lastModifiedAt = Date.now();
  const promise = Item.findByIdAndUpdate(item.id, item).exec();
  return promise;
};

//Delete Property
export const deleteProperty = (id) => {
  const promise = Item.findByIdAndRemove({ _id: id }).exec();
  return promise;
};

//Get Single Property
export const getProperty = (id) => {
  const promise = Item.findById(id).exec();
  return promise;
};


// approve property
export const approveProperty = (id) => {

  const promise = Item.findById(id).exec();
  return promise;

}