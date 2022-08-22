const authMiddleware = (req, res, next) => {
  console.log('2', req.session.login);
  if (req.session.login) {
    next();
  } else {
    res.status(401).send({ message: 'You are not authorized' });
  }
};

module.exports = authMiddleware;
