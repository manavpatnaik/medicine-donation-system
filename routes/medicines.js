const router = require('express').Router();
const db = require('../config/db');

router.post('/', (req, res) => {
	const { med_name, quantity } = req.body;
	const sql = `INSERT INTO medicine(med_name, quantity) 
                VALUES("${med_name}", ${quantity});`;
	db.query(sql, (err, results) => {
		if (err) return res.send(err.message);
		res.send(results);
	});
});

router.get('/', (req, res) => {
	const sql = `SELECT * FROM medicine;`;
	db.query(sql, (err, results) => {
		if (err) return res.send(err.message);
		res.send(results);
	});
});

router.post('/specific', (req, res) => {
	const { name } = req.body;
	const sql = `SELECT * FROM medicine WHERE med_name LIKE "%${name}%";`;
	db.query(sql, (err, results) => {
		if (err) return res.send(err.message);
		res.send(results);
	});
});

router.get('/');

module.exports = router;
