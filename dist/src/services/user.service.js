"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi"); // Import Service decorator
let UserService = class UserService {
    addUser() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return { success: true, message: 'User added successfully' };
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = tslib_1.__decorate([
    (0, typedi_1.Service)() // Registering the service with DI container
], UserService);
//# sourceMappingURL=user.service.js.map