import 'reflect-metadata'; // Make sure this is at the top

import { bootstrapMicroframework } from "microframework-w3tec";
import { expressLoader } from "./loaders/expressLoader";
// import { mongoLoader } from "./loaders/mongoLoader";

import 'reflect-metadata';

bootstrapMicroframework([
    expressLoader
]).then(() => {
    // mongoLoader();
    console.info('connected on port 3000')
}).catch((err) => {
    console.error(err)
})