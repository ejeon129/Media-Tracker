const router = require('express').Router();
let Media = require('../models/media.model');

router.route('/').get((req, res) => {
  Media.find()
    .then(medias => res.json(medias))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const attraction = Number(req.body.attraction);
  const date = Date.parse(req.body.date);

  const newMedia = new Media({
    username,
    description,
    attraction,
    date,
  });

  newMedia.save()
  .then(() => res.json('Media added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Media.findById(req.params.id)
    .then(media => res.json(media))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Media.findByIdAndDelete(req.params.id)
    .then(() => res.json('Media deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Media.findById(req.params.id)
    .then(media => {
      media.username = req.body.username;
      media.description = req.body.description;
      media.attraction = Number(req.body.attraction);
      media.date = Date.parse(req.body.date);

      media.save()
        .then(() => res.json('Media updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;