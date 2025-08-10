import mongoose, { Schema, Document } from "mongoose";
import { Message, MessageSchema } from "./message-model";
import { unique } from "next/dist/build/utils";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isAcceptingMessage: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    rquired: [true, "Email is required"],
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please use valid email"],
  },
  password: {
    type: String,
    rquired: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    rquired: [true, "Verify code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    rquired: [true, "Verify code date is required"],
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    required: true,
    default: true,
  },
  messages: [MessageSchema],
});
