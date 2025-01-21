"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const os_1 = tslib_1.__importDefault(require("os"));
const common_utils_1 = require("../utils/common.utils");
let OSController = class OSController {
    getAll() {
        const freemem = (0, common_utils_1.sizeCalculator)(os_1.default.freemem());
        const totalMem = (0, common_utils_1.sizeCalculator)(os_1.default.totalmem());
        const upTime = (0, common_utils_1.secondsToDaysTime)(os_1.default.uptime());
        const network = os_1.default.networkInterfaces();
        return {
            freemem,
            totalMem,
            network,
            upTime
        };
    }
};
exports.OSController = OSController;
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/systemDetails'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], OSController.prototype, "getAll", null);
exports.OSController = OSController = tslib_1.__decorate([
    (0, routing_controllers_1.JsonController)()
], OSController);
//# sourceMappingURL=os.controller.js.map