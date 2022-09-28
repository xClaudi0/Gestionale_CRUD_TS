import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
  name: String,
  surname: String,
  password: String,
  email: String,
  role: String,
  salt: String
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
      name: {type: String, required: true},
      surname: {type: String, required: true},
      password: {type: String, required: true},
      email: { type: String, unique: true, required: true},
      role: {type: String, required: true},
      salt: String
    },
    {
        timestamps: false,
        versionKey: false
    }
);

export const user = mongoose.model<IUserModel>('user', UserSchema);


  
