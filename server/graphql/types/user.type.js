import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList
} from 'graphql';

import Post from './../../models/post.model';
import {postType} from './post.type';

export const userType = new GraphQLObjectType({
	name : 'User',
	description : 'user api',
	fields : () => ({
		_id : {
			type : new GraphQLNonNull(GraphQLID)
		},
		email : {
			type : GraphQLString
		},
		name : {
			type : GraphQLString
		},
		posts : {
			type : new GraphQLList(postType),
			resolve (user) {
				const { _id } = user;
				return Post.find({ uid : _id })
			}
		}
	})
});


export const userInputType = new GraphQLInputObjectType ({
	name : 'UserInput',
	description : 'insert user',
	fields : () => ({
		email : {
			type : GraphQLString
		},
		name : {
			type : GraphQLString
		}
	})
})