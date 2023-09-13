displayJoke = (req, res) => {
    const data =
      'Hugo L. ALmeida';
    res.status(200).send(data);
  };
  displayLuffy = (req, res) => {
    const data =
      'Luffy';
    res.status(200).send(data);
  };
  displayData = (req, res) => {
    const data =
      'Hugo L. Almeida - 24 / Luffy - 19';
    res.status(200).send(data);
  };
  module.exports = {
    displayJoke,
    displayLuffy,
    displayData,
  };