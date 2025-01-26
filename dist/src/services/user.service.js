"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi"); // Import Service decorator
const user_model_1 = tslib_1.__importDefault(require("../models/user.model")); // Ensure the correct import path
let UserService = class UserService {
    addUser() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield new user_model_1.default({
                    firstname: 'Husain',
                    lastName: 'Badwah wala', // Consistent casing
                    location: 'Indore',
                });
                user.save();
                return user; // No need to call save() again // Save the user to the database
            }
            catch (error) {
                console.error('Error saving user:', error);
                // throw error; // Handle errors appropriately
            }
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = tslib_1.__decorate([
    (0, typedi_1.Service)() // Registering the service with DI container
], UserService);
//# sourceMappingURL=user.service.js.map