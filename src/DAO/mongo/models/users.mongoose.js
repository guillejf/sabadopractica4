import { Schema, model } from "mongoose";
import { generateCartId } from "../../../utils/main.js";

const schema = new Schema({
  firstName: { type: String, required: false, max: 100 },
  lastName: { type: String, required: false, max: 100 },
  age: { type: Number, required: false },
  email: { type: String, required: true, max: 100, unique: true },
  password: { type: String, required: false, max: 100 },
  role: { type: String, default: "user" },
  premium: { type: Boolean, default: false },
  cartID: {
    type: String,
    required: true,
    unique: true,
    default: () => generateCartId(),
  },
  purchase_made: {
    type: [String],
    default: [],
  },
  //documents: [] {name: 'tiketpago.jpg', reference: 'isdusuario/documents/tikets/'} {name: 'dni.jpg', reference: 'isdusuario/documents/profile/'}
  //last_connection: deberá modificarse cada vez que el usuario realice un proceso de login y logout
});

export const UsersMongoose = model("users", schema);
