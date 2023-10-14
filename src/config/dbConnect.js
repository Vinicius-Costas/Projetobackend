import mongoose from "mongoose";


async function connectDataBase(){
    mongoose.connect("mongodb+srv://viniciuscostas:88737149@cluster0.eofuqin.mongodb.net/fotocam?retryWrites=true&w=majority");

    return mongoose.connection;
}

export default connectDataBase;

