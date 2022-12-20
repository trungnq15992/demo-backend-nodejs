const getHomepage = (req,res) => {
    res.render('sample.ejs')
}

const getABC = (req,res) => {
    res.send('ABC')
}

module.exports = {
    getHomepage, getABC
}