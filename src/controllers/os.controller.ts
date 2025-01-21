import { Get, JsonController } from 'routing-controllers';
import os from 'os';
import { secondsToDaysTime, sizeCalculator } from '../utils/common.utils';

@JsonController()
export class OSController {
    @Get('/systemDetails')
    getAll() {
        const freemem = sizeCalculator(os.freemem());
        const totalMem = sizeCalculator(os.totalmem());
        const upTime = secondsToDaysTime(os.uptime());
        const network = os.networkInterfaces();
        return {
            freemem,
            totalMem,
            network,
            upTime
        }
    }
}
