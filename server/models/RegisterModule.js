import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["Admin", "Manager", "Developer"],
  },
});

const Register= mongoose.model("Register", RegisterSchema);
export default Register;