const ax = require("axios");

const test = ax('https://api.ipify.org/?format=json');

export default async (req, res) => {

  let dat = Math.random()
  let temp = await fetch('https://api.ipify.org/?format=json').then(d=>d.json())
  res.send({...temp,test:await test,dat})
  
};