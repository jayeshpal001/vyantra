const erroHandler = (err, req, res, next) => {
  let responseCode = res.statusCode; 
  if (responseCode<400){
    responseCode=500; 
  }

  res.status(responseCode).json({
    success: false,
    message: err.message,
  })
}

module.exports = erroHandler;