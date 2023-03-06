const ax = require("axios");

module.exports = async (req, res) => {

  const test = await ax('https://api.ipify.org/?format=json');

  let dat = Math.random()
  let temp = await fetch('https://api.ipify.org/?format=json').then(d=>d.json())
  res.send({...temp,test,dat})
  
};