"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoLoader = mongoLoader;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
function mongoLoader() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const uri = `mongodb+srv://hbarwahwala5253:7aqqsLhg4cfI5afZ@cluster0.vkjdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
            yield mongoose_1.default.connect(uri);
            console.log('MongoDB connection established successfully');
        }
        catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw new Error('Failed to connect to MongoDB');
        }
    });
}
//# sourceMappingURL=mongoLoader.js.map