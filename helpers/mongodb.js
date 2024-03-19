import mongoose from 'mongoose';

const database = () => {
    mongoose
        .connect(process.env.DB_URL)
        .catch((err) => {
            console.error("error: " + err.stack);
            process.exit(1);
        });
    mongoose.connection.on("open", () => {
        console.log("connected to database");
    });
};

export default database;