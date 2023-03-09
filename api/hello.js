//import { select } from '@/src/utils.js'

const { select } = require('../src/utils');
const axios = require('axios');
const httpProxy = require('http-proxy');
const ax = axios.default;

const proxy = httpProxy.createProxyServer({});

module.exports = async (req, res) => {

  let ip = (await ax('https://api.ipify.org/?format=json')).data;
  let url = 'http://ipwho.is';

  let newReq = new Request(url, req);

  proxy.web(newReq, res, { target: `http://185.135.157.89:8080` })

  proxy.on('proxyRes', function (proxyRes, rq, rs) {
    res.send({...ip,proxyRes,rq,rs,d:Math.random()})
    //console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
  });
   

  //res.send({ ...ip, fn:select(1),oi:Math.random()});

};
