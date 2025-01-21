import { Service } from 'typedi'; // Import Service decorator

@Service() // Registering the service with DI container
export class UserService {
  async addUser() {
    return { success: true, message: 'User added successfully' };
  }
}