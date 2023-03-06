import * as all from 'src/utils.js';

const axios = require('axios');
const ax = axios.default;

module.exports = async (req, res) => {

  let temp = (await ax('https://api.ipify.org/?format=json')).data;
  res.send({ temp });

};
