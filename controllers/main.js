const { response } = require("express");
const Puja = require("../models/puja.js");

module.exports.index = async (req, res) => {
  res.render("./main/index.ejs");
};
module.exports.panchang = async (req, res) => {
  res.render("./main/panchang.ejs");
};
module.exports.puja = async (req, res) => {
  const allListing = await Puja.find({});
  res.render("./main/puja.ejs", { allPujas });
};
module.exports.show = async (req, res) => {
  res.render("./main/show.ejs");
};
