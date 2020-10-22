const router = require('express').Router();
const Ninja = require('../../models/ninjas');

router.get('/', (req, res) => {
  res.json({ status: 'OK' });
});

router.post('/', (req, res, next) => {
  const { name, rank, available } = req.body;

  Ninja.create({
    name,
    rank,
    available,
  })
    .then((ninja) => {
      console.log(ninja);
      res.json(ninja);
    })
    .catch((err) => next(err.errors.name));
});

module.exports = router;
