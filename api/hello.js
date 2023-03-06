/*const ax = require("axios");

module.exports = async (req, res) => {

  const test = await ax('https://api.ipify.org/?format=json');

  let dat = Math.random()
  let temp = await fetch('https://api.ipify.org/?format=json').then(d=>d.json())
  res.send({...temp,test,dat})
  
};*/

const axios = require('axios');

const ax = axios.default;

export default async function handler(req, res) {
  let temp = (await ax("https://api.ipify.org/?format=json")).data;
  res.status(200).json({ name: 'John Doe' ,VERSION:axios.VERSION, temp})
}
