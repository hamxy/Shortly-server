import express from "express";
let router = express.Router();

import createLinkController from "../controllers/createLinkController.js";
import redirectToLink from "../controllers/redirectToLink.js";
import findLink from '../controllers/findLink.js';

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("hello from server");
});

router.post("/create-link", createLinkController);
router.get("/:short", redirectToLink);
router.get("/:short/get", findLink);


export default router;
