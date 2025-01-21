"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const user_service_1 = require("../services/user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    addUser() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                //   console.log(this);
                // return '';
                const a = yield this.userService.addUser();
                return a;
            }
            catch (error) {
                console.log(error);
                return 'No Data Found';
            }
        });
    }
};
exports.UserController = UserController;
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/addUser'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
exports.UserController = UserController = tslib_1.__decorate([
    (0, routing_controllers_1.JsonController)(),
    tslib_1.__param(0, (0, typedi_1.Inject)()),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map