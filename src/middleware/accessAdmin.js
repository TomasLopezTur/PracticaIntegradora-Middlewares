const admins = ['Ada', 'Greta', 'Tim', 'Vim']


module.exports = (req, res, next)=>{

    if (admins.includes(req.query.admin)){
        next()
    }else{
        return res.redirect('/not-entry')
    }
    

}