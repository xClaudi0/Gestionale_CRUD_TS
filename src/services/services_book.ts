import {book} from "../models/book";


    export async function booksGetService() {
            return await book.find();
        }
    export async function BookByGenreService(genre: String){
            return await book.find(
                {
                    "$or": [
                        { $regex: { _genre: genre} },
                    ]
                }
            )   
    }
    export async function BookByIDService(id: String) {
            return await book.findOne({ _id: id })
    }
    export async function BookPostService(title:String, genre:String){
        const _book = new book({
            title: title,
            genre: genre,
        })   
        await _book.save();
        return _book;
    
    }
    export async function BookDeleteByIDService(id:String){
            return await book.deleteOne({ _id: id });
    }
   export async function BookPutByIDService(id:String, _title:String, _genre:String){
        const _book = await book.findOne({ _id: id })
       await _book?.updateOne({title: _title, genre:_genre});
}

