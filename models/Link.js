import { Schema, model } from 'mongoose';

const linkSchema = new Schema({
    path: {
        type: String,
        required: [true, "Path not provided."]
    },
    short: {
        type: String,
        required: [true, "Short link not provided."],
        unique: true
    }
})

const Link = model("Link", linkSchema);

export default Link;

