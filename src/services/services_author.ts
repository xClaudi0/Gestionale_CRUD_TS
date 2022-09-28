import { author } from "../models/author";
export async function AuthorGetService() {
        return await author.find();
}
export async function AuthorPostService(_name: String, _genre: String) {
        const _author = new author({
                name: _name,
                genre: _genre,
        })
        await _author.save();
}
export async function AuthorDeleteService(name:String) {
        return await author.deleteOne({ _name: name })

}
export async function AuthorByIDService(id:String) {

        return await author.findOne({ _id: id })


}
export async function AuthorDeleteByIDService (id: String){
        return await author.deleteOne({ _id: id });
}
    export async function AuthorUpdateService (id: String, _name: String, _genre: String) {
                const _author = await author.findOne({ _id: id })
                return await _author?.updateOne({ name: _name, genre: _genre });
        }



