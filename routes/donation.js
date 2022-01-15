const router = require('express').Router();
const db = require('../config/db');

router.post('/', (req, res) => {
	const { donor_id, med_id, quantity } = req.body;
	const sql1 = `SELECT * FROM medicine WHERE med_id=${med_id};`;
	db.query(sql1, (err, results) => {
		if (err) return res.status(400).send({ success: false, msg: err.message });
		const currentQuantity = results[0].quantity;
		const newQuantity = currentQuantity + quantity;
		const sql2 = `INSERT INTO donations VALUES(${donor_id}, ${med_id}, ${quantity});`;
		db.query(sql2);
		const sql3 = `UPDATE medicine SET quantity=${newQuantity} WHERE med_id=${med_id}`;
		db.query(sql3, (err, results) => {
			if (err) return res.status(400).send({ success: false, msg: err.message });
			res.send({ success: true, msg: 'Donated Successfully' });
		});
	});
});

router.get('/', (req, res) => {
	const sql = `SELECT * FROM donations`;
	db.query(sql, (err, results) => {
		if (err) return res.status(400).send({ success: false, msg: err.message });
		res.status(200).send(results);
	});
});

module.exports = router;
