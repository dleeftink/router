const ax = require("axios");

const test = await ax('https://api.ipify.org/?format=json');

export default async (req, res) => {

  let dat = Math.random()
  let temp = await fetch('https://api.ipify.org/?format=json').then(d=>d.json())
  res.send({...temp,test,version,dat})
  
};