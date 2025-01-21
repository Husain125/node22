"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // Make sure this is at the top
const microframework_w3tec_1 = require("microframework-w3tec");
const expressLoader_1 = require("./loaders/expressLoader");
const mongoLoader_1 = require("./loaders/mongoLoader");
require("reflect-metadata");
(0, microframework_w3tec_1.bootstrapMicroframework)([
    expressLoader_1.expressLoader
]).then(() => {
    (0, mongoLoader_1.mongoLoader)();
    console.info('connected on port 3000');
}).catch((err) => {
    console.error(err);
});
//# sourceMappingURL=app.js.map