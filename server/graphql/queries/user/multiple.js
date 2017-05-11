import { GraphQLList } from 'graphql';

import { userType } from './../../types/user.type';
import User from './../../../models/user.model';

export default {
	type : new GraphQLList(userType),
	resolve() {
		return User.find({});
	}
}