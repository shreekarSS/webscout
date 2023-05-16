import mongoose from "mongoose";

//Property Schema
const PropertySchema = mongoose.Schema({
  Name: {
    type: String,
    required: "Name cannot be empty",
  },
  cost: {
    type: String,
    required: "Cost cannot be empty",
  },
  desc: {
    type: String,
    required: true,
  },
  beds: {
    type: String,
    required: true,
  },

  baths: {
    type: String,
    required: true,
  },

  buildArea: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: "Address cannot be empty",
  },
  files: {
    type: [String],
    default: [],
  },
  
  phone: {
    type: String,
    required: false,
  },
  contactEmail: {
    type: String,
    required: "Contact email cannot be left empty",
  },

  adminStatus: {
    type: String,
    // required: true,
    default: "PENDING"
  },

  lat:{
    type: String,
  },
  lng:{
    type: String
  },
  zip:{
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastModifiedAt: {
    type: Date,
    default: Date.now,
  },
});

PropertySchema.virtual('score').get(function() {
  return  this.cost/this.buildArea;
});

const Property = mongoose.model("PropertySchema", PropertySchema);

export default Property;
