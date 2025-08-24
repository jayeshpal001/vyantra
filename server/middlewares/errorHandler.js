const erroHandler = (err, req, res, next) => {
  const responseCode = res.statatusCode; 
  if (responseCode<400){
    responseCode=500; 
  }

  res.status(responseCode).json({
    success: false,
    message: err.message,
  })
}

module.exports = erroHandler;