import {
	GraphQLID,
	GraphQLNonNull
} from 'graphql';

import { userType } from './../../types/user.type';
import User from './../../../models/user.model';

export default {
	type : userType,
	args : {
		id : {
			name : 'ID',
			type : new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return User.findOne({ _id : params.id })
	}
}