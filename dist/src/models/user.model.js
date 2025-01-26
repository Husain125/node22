"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
// Define the user schema
const userSchema = new mongoose_1.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true, // Removes extra spaces
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});
// Create the model
const UserModel = mongoose_1.default.model("users", userSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map