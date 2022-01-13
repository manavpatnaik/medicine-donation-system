const router = require('express').Router();
const db = require('../config/db');

router.post('/', (req, res) => {
	const { requestor_id, med_id } = req.body;
	const sql = `INSERT INTO requests(requestor_id, med_id) VALUES(${requestor_id}, ${med_id});`;
	db.query(sql, (err, results) => {
		if (err) return res.send(err.message);
		res.send(results);
	});
});

router.get('/', (req, res) => {
	const sql = 'SELECT * FROM requests;';
	db.query(sql, (err, results) => {
		if (err) return res.send(err.message);
		res.send(results);
	});
});

router.get('/users', (req, res) => {
	const { requestor_id } = req.body;
	const sql = `SELECT * FROM requests WHERE requestor_id=${requestor_id};`;
	db.query(sql, (err, results) => {
		if (err) return res.send(err.message);
		res.send(results);
	});
});

router.get('/medicines', (req, res) => {
	const { med_id } = req.body;
	const sql = `SELECT * FROM requests WHERE med_id=${med_id};`;
	db.query(sql, (err, results) => {
		if (err) return res.send(err.message);
		res.send(results);
	});
});

module.exports = router;
