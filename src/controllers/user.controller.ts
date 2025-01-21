import "reflect-metadata";
import { Get, JsonController } from 'routing-controllers';
import { Inject } from 'typedi';
import { UserService } from "../services/user.service";

@JsonController()
export class UserController {
  constructor(
    @Inject() private userService: UserService
  ) {
  }


  @Get('/addUser')
  async addUser() {
    try {
    //   console.log(this);
    // return '';
    const a = await this.userService.addUser();
    return a;
    } catch (error) {
      console.log(error)
      return 'No Data Found'
    }
  }
}