import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clarkId: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  firstname: { type: String, requir: true, unique: true },
  lastname: { type: String, require: true, unique: true },
  photo: { type: String, require: true },
});

const User = models.User || model("User", UserSchema);
export default User;
