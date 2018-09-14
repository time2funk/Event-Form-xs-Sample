const bodyParser = require('body-parser');
const expressLogging = require('express-logging');
const logger = require('logops');
const cors = require('cors');
const express = require('express');
const app = express();
const config = require('./config');
const DB = require('./modules/db');

const db = new DB(config.db);

app.set('port', (process.env.PORT || config.port));
app.use(expressLogging(logger)) ;
app.use(bodyParser.json({limit: '5mb'}));
app.use(cors());

app.get('/api/event/list', async (request, response) => {
	try {
		const list = await db.getEventList();
		console.log(list);
		response.json({list});
	} catch (error) {
		response.send({error: error});
	}
});

app.post('/api/event/new', async (request, response) => {
	try {
		console.log('post');
		console.log(request.body);
		const data = await db.createEvent(request.body.data);
		console.log('node new event data',data);
		response.status(200).json(data);
	} catch (error) {
		response.send({error: error});
	}
});

app.listen(app.get('port'), () => {
	console.log('Node Server is running on port', app.get('port'));
});
