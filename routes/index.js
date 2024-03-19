import express from "express";
let router = express.Router();

import createLinkController from "../controllers/createLinkController.js";
import redirectToLink from "../controllers/redirectToLink.js";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("hello from server");
});

router.post("/create-link", createLinkController);
router.get("/:short", redirectToLink);

export default router;
