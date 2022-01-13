const router = require('express').Router();
const db = require('../config/db');

router.post('/signupDonor', (req, res) => {
	const { name, email, password, phone } = req.body;
	const sql = `INSERT INTO donor(donor_name, donor_email, donor_password, donor_phone)
                VALUES ("${name}", "${email}", "${password}", ${phone});`;
	db.query(sql, (err, result) => {
		if (err) return res.send(err.message);
		res.send(result);
	});
});

router.post('/signupEmp', (req, res) => {
	const { name, email, password, phone } = req.body;
	const sql = `INSERT INTO employee(emp_name, emp_email, emp_password, emp_phone)
                VALUES ("${name}", "${email}", "${password}", ${phone});`;
	db.query(sql, (err, result) => {
		if (err) return res.send(err.message);
		res.send(result);
	});
});

router.post('/signupReq', (req, res) => {
	const { name, email, password, phone } = req.body;
	const sql = `INSERT INTO requestor(req_name, req_email, req_password, req_phone)
                VALUES ("${name}", "${email}", "${password}", ${phone});`;
	db.query(sql, (err, result) => {
		if (err) return res.send(err.message);
		res.send(result);
	});
});

module.exports = router;
