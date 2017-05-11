import mongoose from 'mongoose';

const {Schema} = mongoose;

const PostSchema = new Schema ({
	uid : {
		type : String,
		required : true
	},
	title : {
		type : String,
	},
	body : {
		type : String,
	}
}, { collection : 'Post', timestamps : true });

export default mongoose.model('Post', PostSchema);