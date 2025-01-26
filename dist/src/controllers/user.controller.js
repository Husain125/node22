"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const user_service_1 = require("../services/user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    addUser() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                console.log('UserController Instance:', this);
                const result = yield this.userService.addUser();
                return { success: true, data: result };
            }
            catch (error) {
                console.error('Error in addUser:', error);
                return { success: false, message: 'Unable to add user' };
            }
        });
    }
};
exports.UserController = UserController;
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/add-user'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
exports.UserController = UserController = tslib_1.__decorate([
    (0, routing_controllers_1.JsonController)('/user'),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map