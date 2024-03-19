import Link from "../models/Link.js";

const createLinkController = async (req, res) => {
  const { path } = req.body;
  const shortLink = await ensureUniqueShortLink();
  try {
    const saved = await Link.create({
      path: path,
      short: shortLink,
    });

    res.status(201).send(saved);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });

  }
};

const generateShortLink = (length = 4) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const ensureUniqueShortLink = async (length) => {
  let unique = false;
  let uniqueLink = "";

  while (!unique) {
    uniqueLink = generateShortLink(length);
    const existingLink = await Link.findOne({ short: uniqueLink });
    if (!existingLink) unique = true;
  }
  return uniqueLink;
};

export default createLinkController;
