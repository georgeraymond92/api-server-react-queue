'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const q = require('./src/lib/publisher');
global.Q = new q();

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

require('./src/app.js').start(process.env.PORT);
