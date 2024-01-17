import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async () => {
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-fw9kttz-shard-00-00.egvsrje.mongodb.net:27017,ac-fw9kttz-shard-00-01.egvsrje.mongodb.net:27017,ac-fw9kttz-shard-00-02.egvsrje.mongodb.net:27017/?ssl=true&replicaSet=atlas-hxalcn-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, {useUnifiedTopology: true});
       console.log('Database connected');
    }catch(error){
        console.log('Error found' , error.message);
    }
}

export default Connection;