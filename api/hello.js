//import { select } from '@/src/utils.js'

const all = require('../src/utils');
const axios = require('axios');
const ax = axios.default;

module.exports = async (req, res) => {

  let temp = (await ax('https://api.ipify.org/?format=json')).data;
  res.send({ temp, fn:all.toString() });

};
