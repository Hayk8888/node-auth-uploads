
module.exports =  function (req, res, next) {
    const response = req.body;

    if (response && response.filename && response.code) {
        next()
    } else {
        res.status(400).send('Invalid format');
    }
}
