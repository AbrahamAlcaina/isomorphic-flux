import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const WallSchema = new Schema({
  title: String,
  text: String,
  src: String
});

export default mongoose.model('Wall', WallSchema);
