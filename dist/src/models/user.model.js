"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
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
const userModel = mongoose_1.default.model('users', userSchema);
exports.default = userModel;
//# sourceMappingURL=user.model.js.map