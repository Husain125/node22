import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const userModel = mongoose.model('users', userSchema)
export default userModel