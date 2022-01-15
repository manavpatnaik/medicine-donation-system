const router = require('express').Router();
const db = require('../config/db');

router.post('/', (req, res) => {
	const { requestor_id, emp_id } = req.body;
	const sql = `SELECT * FROM requests WHERE requestor_id=${requestor_id};`;
	db.query(sql, (err, results) => {
		if (err) return res.status(404).send({ success: false, msg: err.message });

		if (results.length === 0) return res.status(400).send({ success: false, msg: 'All requests fulfilled' });

		const pendingRequests = results.filter((request) => request.req_status === 'Pending');
		if (pendingRequests.length === 0)
			return res.status(400).send({ success: false, msg: 'All requests fulfilled' });

		for (pendingReq of pendingRequests) {
			let sql1 = `UPDATE requests SET req_status="Delivered" 
                        WHERE requestor_id=${pendingReq.requestor_id} AND med_id=${pendingReq.med_id};`;
			db.query(sql1);
		}
		const sql2 = `INSERT INTO deliveries VALUES(${requestor_id}, ${emp_id});`;
		db.query(sql2, (err, results) => {
			if (err) return res.status(400).send({ success: false, msg: err.message });
			res.send(results);
		});
	});
});

router.get('/', (req, res) => {
	const sql = `SELECT * FROM deliveries;`;
	db.query(sql, (err, results) => {
		if (err) return res.status(404).send({ success: false, msg: err.message });
		res.send(results);
	});
});

module.exports = router;
