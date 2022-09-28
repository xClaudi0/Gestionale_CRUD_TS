import mongoose, { Document, Schema } from 'mongoose';

export interface IBook {
  title: String,
  genre: String,
}

export interface IBookModel extends IBook, Document {}

const BookSchema: Schema = new Schema(
    {
      title: String,
      genre: String
    },
    {
        timestamps: false,
        versionKey: false
    }
);

export const book = mongoose.model<IBookModel>('book', BookSchema);

  
