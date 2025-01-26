import 'reflect-metadata'; // Make sure this is at the top

import { bootstrapMicroframework } from "microframework-w3tec";
import { expressLoader } from "./loaders/expressLoader";
import { mongoLoader } from "./loaders/mongoLoader";

import 'reflect-metadata';
import { useContainer } from 'class-validator';
import Container from 'typedi';
import { iocLoader } from './loaders/iocLoader';

useContainer(Container); // Bind typedi container

const Loaders = [iocLoader, expressLoader
]

bootstrapMicroframework({
    loaders: Loaders
}).then(() => {
    mongoLoader();
    console.info('connected on port 3000')
}).catch((err) => {
    console.error(err)
})