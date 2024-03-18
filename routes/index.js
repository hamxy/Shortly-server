import express from 'express';
let router = express.Router();

import createLinkController from '../controllers/create-link.js';



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello from server");
});

router.get('/create-link', createLinkController);

router.get('/:link')

export default router;
