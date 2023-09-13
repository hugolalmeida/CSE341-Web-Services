displayJoke = (req, res) => {
    const data =
      'Hugo L. ALmeida';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayJoke,
  };