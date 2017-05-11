import express from 'express';
import graphqlHTTP from 'express-graphql';


import mongoose from './database/db';
import schema from './graphql';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
	res.json({
		message : 'hello World'
	})
});

app.use('/graphql', graphqlHTTP(() => ({
	schema,
	graphiql : true,
	pretty : true
})));

app.listen(PORT, (err) => {
	if (err) 
		console.log("whoops", err);
	else 
		console.log(`Server up on port ${PORT}`);
})