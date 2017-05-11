import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} from 'graphql';


export const postType = new GraphQLObjectType ({
	name : 'Post',
	description : 'post api',
	fields : () => ({
		_id : {
			type : new GraphQLNonNull(GraphQLID)
		},
		uid : {
			type : GraphQLString
		},
		title : {
			type : GraphQLString
		},
		body : {
			type : GraphQLString
		}
	})
});

export const postInputType = new GraphQLInputObjectType ({
	name : 'PostInput',
	description : 'insert post',
	fields : () => ({
		uid : {
			type : GraphQLString
		},
		title : {
			type : GraphQLString
		},
		body : {
			type : GraphQLString
		}
	})
})