import mongoose from "mongoose";

const fotoSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, required: true},
    valor:{type: String}
}, {versionKey:false}
);

const foto = mongoose.model("foto", fotoSchema);

export default foto;