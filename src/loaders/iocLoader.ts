import { useContainer as classValidatorUseContainer } from 'class-validator';
import {
  MicroframeworkLoader,
  MicroframeworkSettings,
} from 'microframework-w3tec';
import { useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';

export const iocLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined,
) => {
  /**
   * Setup routing-controllers to use typedi container.
   */ console.log(settings);
  routingUseContainer(Container);
  classValidatorUseContainer(Container);
};