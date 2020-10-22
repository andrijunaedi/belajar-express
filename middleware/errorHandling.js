module.exports = (err, req, res, next) => {
  const { name, message } = err;
  res.status(422).json({ status: 'error', name, message });

  next();
};
