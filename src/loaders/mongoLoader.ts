import mongoose from 'mongoose';

export async function mongoLoader(): Promise<void> {
  try {
    const uri = `mongodb+srv://hbarwahwala5253:7aqqsLhg4cfI5afZ@cluster0.vkjdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(uri);

    console.log('MongoDB connection established successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}