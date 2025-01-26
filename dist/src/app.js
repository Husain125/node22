"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata"); // Make sure this is at the top
const microframework_w3tec_1 = require("microframework-w3tec");
const expressLoader_1 = require("./loaders/expressLoader");
const mongoLoader_1 = require("./loaders/mongoLoader");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const iocLoader_1 = require("./loaders/iocLoader");
(0, class_validator_1.useContainer)(typedi_1.default); // Bind typedi container
const Loaders = [iocLoader_1.iocLoader, expressLoader_1.expressLoader
];
(0, microframework_w3tec_1.bootstrapMicroframework)({
    loaders: Loaders
}).then(() => {
    (0, mongoLoader_1.mongoLoader)();
    console.info('connected on port 3000');
}).catch((err) => {
    console.error(err);
});
//# sourceMappingURL=app.js.map