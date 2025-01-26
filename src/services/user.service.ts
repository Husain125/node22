import { Service } from 'typedi'; // Import Service decorator
import UserModel from '../models/user.model'; // Ensure the correct import path


@Service() // Registering the service with DI container
export class UserService {
  async addUser(): Promise<any> {
    try {
      const user = await new UserModel({
        firstname: 'Husain',
        lastName: 'Badwah wala', // Consistent casing
        location: 'Indore',
      });
      user.save();
      return user; // No need to call save() again // Save the user to the database
    } catch (error) {
      console.error('Error saving user:', error);
      // throw error; // Handle errors appropriately
    }
  }

}