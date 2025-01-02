const express = require('express');
const dotenv = require('dotenv');
const { Pool } = require('pg');

// Load environment variables
dotenv.config();

const app = express();
const port = 3000;

// Configure PostgreSQL connection pool
const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.dbname,
    password: process.env.password,
    port: process.env.port,
});

// API endpoint to fetch representative details
app.get('/representative', async (req, res) => {
    const { ward } = req.query;
    try {
        const query = 'SELECT * FROM Representative_db WHERE ward = $1';
        const result = await pool.query(query, [ward]);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
