import { GraphQLNonNull, GraphQLID } from 'graphql';

import { userType, userInputType  } from './../../types/user.type';
import User from './../../../models/user.model';


export default {
	type : userType,
	args : {
		id : {
			name : 'ID',
			type : new GraphQLNonNull(GraphQLID)
		},
		data : {
			name : 'data',
			type : new GraphQLNonNull(userInputType)
		}
	},
	resolve (root, params) {
		const {data} = params;
		return User.findOneAndUpdate({
			_id : params.id
		}, {
			$set : { ...data }
		}, {
			new : true
		})
	}
}