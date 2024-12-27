import mongoose from "mongoose";
import { mergeConfig } from "vite";

const userSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type: String,
        required: true
    }
})