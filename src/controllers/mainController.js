module.exports = {
    index: (req, res)=> res.render('index'),
    admin: (req,res)=> res.render('admin',{admin: req.query.admin}),
    not_entry: (req, res)=> res.render('not-entry')
}