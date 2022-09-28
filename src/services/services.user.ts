import { user } from "../models/user"
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");
import { IUser } from '../models/user';
export async function userGetService(){
        return await user.find();
    }
    export async function userPostService(body: IUser){
        if(!(body.email == undefined || body.email == null || body.password == undefined || body.password == null)){
        try{
            let salt = await bcrypt.genSalt();
        let hashpsw = bcrypt.hashSync(body.password, salt); 
        const _user = new user({
            name: body.name,
            surname: body.surname,
            email: body.email,
            password: hashpsw,
            salt: salt,
            role:body.role
        })   
        await _user.save();
        return _user;}
        catch{
            return 400
        }}
        
        return 400
    }
    export async function userDeleteService(email:String){
            return await user.deleteOne({ email : email })
       
}
   export async function userAuthService(_user: IUser, _password: String){
        let _hashpsw = bcrypt.hashSync(_password, _user.salt);
        return _hashpsw == _user.password;
    }

    export async function userGenTokenService(_user: IUser){
        try {
           const token = jwt.sign(
              { email: _user.email, role: _user.role},
              process.env.SECRET_KEY,
              { expiresIn: "1h" }
            );
            console.log("Token generato con successo");
            return token;
            }catch{
                console.log("Errore nella generazione del token");
            }
    }

    export async function userByEmailService(email:String){
            return await user.findOne({ _email: email })
    }

    export async function verifyUserTokenService(token: String){
    return jwt.verify(token,process.env.SECRET_KEY);
    }

    export async function UserPutByIDService(id:String, body: IUser){
        console.log("Modifica utente "+ id);
        let _name: String = body.name;
        let _surname: String = body.surname;
        const _user = await user.findOne({ _id: id })
       return await _user?.updateOne({name: _name ,surname: _surname});
    }
    export async function UserByIDService (id:String){
            return await user.findOne({_id: id})
        
}
export async function UserDeleteByIDService(id:String){
        return await user.deleteOne({ _id: id });
}