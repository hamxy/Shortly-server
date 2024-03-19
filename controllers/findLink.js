import Link from "../models/Link.js";

const findLink = async (req, res) => {
    const { short } = req.params;

    try {
        const link = await Link.findOne({short: short});
        res.json(link);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export default findLink;