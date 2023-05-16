import {
    getAllProperties,
    getApprovedProperties,
    searchProperties,
    createProperties,
    updateProperty,
    deleteProperty,
    getProperty,
    approveProperty
  } from "../services/propertyService.js";
  
  //Success Response Setter
  const setSuccessResponse = (data, res) => {
    res.status(200).json(data);
  };
  
  //Error Handler
  const errorHandler = (message, res) => {
    res.status(500).json({ error: message });
  };
  
  //Get All Properties
  export const getAll = async (req, res) => {
  
    try {
      const items = await getAllProperties();
      setSuccessResponse(items, res);
    } catch (err) {
      errorHandler(err.message, res);
    }
  };
  
  //Get All Approved Properties

  export const getAllApprovedProps = async(req, res) =>{
    try{
      const items = await getApprovedProperties();
      setSuccessResponse(items, res);
    }
    catch(err){
      errorHandler(err.message, res)
    }
  }

  //Get Search Properties
  export const search = async (req, res) => {
    const { searchQuery } = req.query;
    try {
      const itemName = new RegExp(searchQuery, "i");
      const items = await searchProperties(itemName);
      setSuccessResponse(items, res);
    } catch (err) {
      errorHandler(err.message, res);
    }
  };
  
  //Create Property
  export const create = async (req, res) => {
    try {
      const item = { ...req.body };
        const newItem = await createProperties(item);
       
        
        //req.files.image.mv(`../webapp/public/images/${newItem._id}.png`);
      setSuccessResponse(newItem, res);
    } catch (err) {
      errorHandler(err.message, res);
    }
  };
  
  //Update Property
  export const update = async (req, res) => {
    try {
      const id = req.params.id;
      const item = { ...req.body, id };
      const updatedItem = await updateProperty(item);
      setSuccessResponse(updatedItem, res);
    } catch (err) {
      errorHandler(err.message, res);
    }
  };
// admin approve/reject
  export const adminStatus = async (req, res) => {
    try {
      const id = req.params.id;
      const item = await getProperty(id);

      if (req.status === 'APPROVED') {
        item.status = 'APPROVED';
      } else if (req.status === 'REJECTED') {
        item.status = 'REJECTED';
      } else {
        res.status(400).json({ error: "Invalid status requested" });
      }

      const updatedItem = await updateProperty(item);
      setSuccessResponse(updatedItem, res);
    } catch (err) {
      errorHandler(err.message, res);
    }
  };
  // step 1: fetch id from request
  // step 2: fetch property from db using id
  // step 3: update item.adminStatus field from PENDING to APPROVED/REJECTED
  // step 4: save this updated property details
  
  //Delete Property
  export const remove = async (req, res) => {
    try {
      const id = req.params.id;
      const deletedItem = await deleteProperty(id);
      setSuccessResponse(deletedItem, res);
    } catch (err) {
      errorHandler(err.message, res);
    }
  };
  
  //Get Single Property
  export const getOne = async (req, res) => {
    try {
      const id = req.params.id;
      const item = await getProperty(id);
      setSuccessResponse(item, res);
    } catch (err) {
      errorHandler(err.message, res);
    }
  };

  // approve property
  export const approveProp = async (req, res) =>{
    try {
      const id = req.params.id;
      const item = await approveProperty(id);
      item.adminStatus =  "Approved";
      item.save();
      setSuccessResponse(item, res);
    } catch (err) {
      errorHandler(err.message, res);
    }
  };


