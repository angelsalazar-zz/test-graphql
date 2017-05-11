import { GraphQLNonNull, GraphQLID } from 'graphql';

import { userType } from './../../types/user.type';
import User from './../../../models/user.model';


export default {
	type : userType,
	args : {
		id : {
			name : 'id',
			type : new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return User.findOneAndRemove({_id : params.id});
	}
}