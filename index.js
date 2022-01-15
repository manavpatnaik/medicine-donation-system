const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const authRoutes = require('./routes/auth');
const medicineRoutes = require('./routes/medicines');
const requestRoutes = require('./routes/requests');
const donationRoutes = require('./routes/donation');
const deliveryRoutes = require('./routes/deliveries');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/medicines', medicineRoutes);
app.use('/medrequests', requestRoutes);
app.use('/donation', donationRoutes);
app.use('/deliveries', deliveryRoutes);

app.get('/', (req, res) => {
	res.send('Medical Donation System!!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
