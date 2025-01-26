import mongoose, { Schema, Document, Model } from "mongoose";

// Define a TypeScript interface for the user
interface IUser extends Document {
  firstname: string;
  lastName: string;
  location: string;
}

// Define the user schema
const userSchema: Schema<IUser> = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the model
const UserModel: Model<IUser> = mongoose.model<IUser>("users", userSchema);

export default UserModel;
