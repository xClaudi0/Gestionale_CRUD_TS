import mongoose, { Document, Schema } from 'mongoose';

export interface IAuthor {
  name: String,
  genre: String,
}

export interface IAuthorModel extends IAuthor, Document {}

const AuthorSchema: Schema = new Schema(
    {
      name: String,
      genre: String
    },
    {
        timestamps: false,
        versionKey: false
    }
);

export const author = mongoose.model<IAuthorModel>('author', AuthorSchema);

  
