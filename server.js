const express = require('express');
const app = express()
app.get('/', (req, res) => {
	res.send("version 1");
})
app.get('/liveness', (req, res) => {
	res.send('live');
})
app.get('/readiness', (req, res) => {
	res.send('ready');
})
app.listen(8080, () => {
	console.log('server start');
})
