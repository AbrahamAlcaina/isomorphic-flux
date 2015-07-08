import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const NewsSchema = new Schema({
    _id: Number,
    title: String,
    text: String,
    src: String
});

export default mongoose.model('New', NewsSchema);
