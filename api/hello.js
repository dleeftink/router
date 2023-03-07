//import { select } from '@/src/utils.js'

const { select } = require('../src/utils');
const axios = require('axios');
const ax = axios.default;

module.exports = async (req, res) => {

  let ip = (await ax('https://api.ipify.org/?format=json')).data;
  res.send({ ...ip, fn:select(1),oi:Math.random(),req});

};
