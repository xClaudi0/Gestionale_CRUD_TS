import * as express from 'express';
require("dotenv").config()
let bodyParser = require('body-parser');
import mongoose from 'mongoose';
import { router_Author } from './routes/author.routes';
import { router_Book } from './routes/book.routes';
import { router_User } from './routes/user.routes';
const app = express();

Connect();

app.use(bodyParser.json())

async function Connect(){
  try{
  await mongoose.connect(`${process.env.MONGODB}`);
  console.log("Connessione al DB avvenuta con successo");
  }catch(e){
     console.log("Errore connessione DB a causa di: " + e);
  } 
}

app.use('/',router_Book);
app.use('/', router_User);
app.use('/', router_Author);


 app.listen(process.env.PORT, () => {
    console.log(`Processo avviato e in ascolto sulla porta ${process.env.PORT}`)
  }) 
  