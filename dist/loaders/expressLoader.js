"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = expressLoader;
const routing_controllers_1 = require("routing-controllers");
const user_controller_1 = require("../controllers/user.controller");
const os_controller_1 = require("../controllers/os.controller");
function expressLoader(settings) {
    const routes = [user_controller_1.UserController, os_controller_1.OSController]; // To be changed soon
    const app = (0, routing_controllers_1.createExpressServer)({
        controllers: routes, // we specify controllers we want to use
    });
    app.listen(3000, () => {
        console.log('port is running');
    });
    settings.setData("express_app", app);
}
//# sourceMappingURL=expressLoader.js.map