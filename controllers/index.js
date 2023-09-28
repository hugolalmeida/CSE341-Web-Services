displayJoke = (req, res) => {
  const data = '<h1>Hugo L. Almeida</h1>';
  res.status(200).send(data);
};
displayLuffy = (req, res) => {
  const data = '<h1>Luffy</h1>';
  res.status(200).send(data);
};
displayData = (req, res) => {
  const data = 'Hugo L. Almeida - 24 / Luffy - 19';
  res.status(200).send(data);
};
module.exports = {
  displayJoke,
  displayLuffy,
  displayData
};
