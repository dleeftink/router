//import { select } from '@/src/utils.js'

const { select } = require('../src/utils');
const axios = require('axios');
const ax = axios.default;

module.exports = async (req, res) => {
  let ipi = (await ax('https://api.ipify.org/?format=json')).data;
  let geo = (await ax('http://ipwho.is')).data; ;

  let prox = (
    await axios.get('https://api.ipify.org/?format=json', {
      proxy: {
        protocol: 'http',
        host: '117.160.250.138', 
        port: 8080,
      },
    })
  )?.data;

  res.send({ ipi, geo, prox, fn: select(1), d: Math.random() });
};
