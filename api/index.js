const { axios } = require("axios");

const version = axios.VERSION;

export default async (req, res) => {

  let dat = Math.random()
  let temp = await fetch('https://api.ipify.org/?format=json').then(d=>d.json())
  res.send({...temp,version,dat})
  
};