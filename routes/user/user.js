const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ status: 'OK' });
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.json({ status: 'OK' });
});

module.exports = router;
