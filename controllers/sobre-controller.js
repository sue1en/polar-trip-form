const ejs = require('ejs');

const hendlerGetSobre = (req, res,next) => {

    res.render('sobre');
}

module.exports = {
    sobreGet: hendlerGetSobre
}