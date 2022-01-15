const router = require('express').Router();
const db = require('../config/db');

router.post('/signupDonor', (req, res) => {
	const { name, email, password, phone } = req.body;
	const sql = `INSERT INTO donor(donor_name, donor_email, donor_password, donor_phone)
                VALUES ("${name}", "${email}", "${password}", ${phone});`;
	db.query(sql, (err, result) => {
		if (err) return res.send({ success: false, msg: err.message });
		res.send(result);
	});
});

router.post('/signupEmp', (req, res) => {
	const { name, email, password, phone } = req.body;
	const sql = `INSERT INTO employee(emp_name, emp_email, emp_password, emp_phone)
                VALUES ("${name}", "${email}", "${password}", ${phone});`;
	db.query(sql, (err, result) => {
		if (err) return res.send({ success: false, msg: err.message });
		res.send(result);
	});
});

router.post('/signupReq', (req, res) => {
	const { name, email, password, phone } = req.body;
	const sql = `INSERT INTO requestor(req_name, req_email, req_password, req_phone)
                VALUES ("${name}", "${email}", "${password}", ${phone});`;
	db.query(sql, (err, result) => {
		if (err) return res.status(400).send({ success: false, msg: err.message });
		res.send(result);
	});
});

router.post('/login', (req, res) => {
	const { email, password, userType } = req.body;
	const sql = `SELECT * FROM ${userType} 
				WHERE ${userType}_email="${email}" AND ${userType}_password="${password}";`;
	console.log(sql);
	db.query(sql, (err, results) => {
		if (err) return res.status(400).send({ success: false, msg: err.message });
		if (results.length === 0) return res.status(400).send({ success: false, msg: 'Invalid Credentials' });
		res.status(200).send({ [userType]: results[0], success: true });
	});
});

router.get('/donor', (req, res) => {
	const sql = 'SELECT * FROM donor';
	db.query(sql, (err, results) => {
		if (err) return res.status(404).send({ success: false, msg: err.message });
		res.send(results);
	});
});

router.get('/employee', (req, res) => {
	const sql = 'SELECT * FROM employee';
	db.query(sql, (err, results) => {
		if (err) return res.status(404).send({ success: false, msg: err.message });
		res.send(results);
	});
});
router.get('/requestor', (req, res) => {
	const sql = 'SELECT * FROM requestor';
	db.query(sql, (err, results) => {
		if (err) return res.status(404).send({ success: false, msg: err.message });
		res.send(results);
	});
});

module.exports = router;
