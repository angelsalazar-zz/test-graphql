import { GraphQLNonNull } from 'graphql';

import { postType, postInputType } from './../../types/post.type';

import Post from './../../../models/post.model';

export default {
	type : postType,
	args : {
		data : {
			name : 'data',
			type : new GraphQLNonNull(postInputType)
		}
	},
	resolve (root, params) {
		const post = new Post (params.data);
		return post.save();
	}
}