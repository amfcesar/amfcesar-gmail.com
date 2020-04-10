module.exports = (req, res, next)=> {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE, PATCH');
 res.header('Access-Control-Allow-Headers', 'Origin, Accept, X-Requestted-With , Content-Type')

 next();
}