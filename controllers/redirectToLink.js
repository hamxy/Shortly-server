import Link from "../models/Link.js";

const redirectToLink = async (req, res) => {
  const { short } = req.params;
  console.log(short + " sss");

  try {
    const link = await Link.findOne({ short: short });
    res.redirect(link.path);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export default redirectToLink;
