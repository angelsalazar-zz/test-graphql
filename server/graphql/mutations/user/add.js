import { GraphQLNonNull } from 'graphql';

import { userType, userInputType } from './../../types/user.type';
import User from './../../../models/user.model';


export default {
	type : userType,
	args : {
		data : {
			name : 'data',
			type : new GraphQLNonNull(userInputType)
		}
	},
	resolve(root, params) {
		const user = new User(params.data);
		return user.save();
	}
}