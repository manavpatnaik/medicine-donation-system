const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const dbConnection = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
	res.send('Medical Donation System');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
