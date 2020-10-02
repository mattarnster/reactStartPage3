module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "https://ngstartpage.uk")
    res.status(200).send(`Hello`)
  }