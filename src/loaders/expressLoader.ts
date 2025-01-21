import { MicroframeworkSettings } from "microframework-w3tec";
import { createExpressServer } from "routing-controllers";
import { UserController } from "../controllers/user.controller";
import { OSController } from "../controllers/os.controller";


export function expressLoader(settings: MicroframeworkSettings) {

    const routes = [UserController, OSController]; // To be changed soon

    const app = createExpressServer(
        {
            controllers: routes, // we specify controllers we want to use
            
        }
    );

    app.listen(3000, () => {
        console.log('port is running');
    })
    settings.setData("express_app", app);


}