module.exports = async (req, res) => {

  let temp = await fetch('https://api.ipify.org/?format=json').then(d=>d.json())
  res.send({...temp})
  
};