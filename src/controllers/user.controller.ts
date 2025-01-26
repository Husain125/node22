import { Get, JsonController } from 'routing-controllers';
import { UserService } from "../services/user.service";

@JsonController('/user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Get('/add-user')
  async addUser() {
    try {
      console.log('UserController Instance:', this);
      const result = await this.userService.addUser();
      return { success: true, data: result };
    } catch (error) {
      console.error('Error in addUser:', error);
      return { success: false, message: 'Unable to add user' };
    }
  }

}


