import { Schema, model, models } from "mongoose";

const UserModel = new Schema({
  clerkId: {
    type: "string",
    required: true,
    unique: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  username: {
    type: "string",
    required: true,
    unique: true,
  },
  firstName: {
    type: "string",
    required: true,
  },
  lastName: {
    type: "string",
    required: true,
  },
  photo: {
    type: "string",
    required: true,
  },
});
const User = models.User || model("User", UserModel);
export default User;
