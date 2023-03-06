//import { select } from '@/src/utils.js'

const all = require('@/src/utils.js');
const axios = require('axios');
const ax = axios.default;

// const all = require('../src/util');

module.exports = async (req, res) => {

  let temp = (await ax('https://api.ipify.org/?format=json')).data;
  res.send({ temp, fn:all.toString() });

};
