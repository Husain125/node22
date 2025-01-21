"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSController = void 0;
const routing_controllers_1 = require("routing-controllers");
const os_1 = __importDefault(require("os"));
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
__decorate([
    (0, routing_controllers_1.Get)('/systemDetails'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OSController.prototype, "getAll", null);
exports.OSController = OSController = __decorate([
    (0, routing_controllers_1.JsonController)()
], OSController);
//# sourceMappingURL=os.controller.js.map