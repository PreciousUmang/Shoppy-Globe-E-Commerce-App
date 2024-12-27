import express from "express"
import connectDB from "./Config/db.mjs";

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});