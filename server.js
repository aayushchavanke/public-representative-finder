const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Connection Pool
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DBNAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

// API Endpoint to fetch representatives by place
app.get("/representatives", async (req, res) => {
  const { ward } = req.query;
  try {
    const result = await pool.query(
      "SELECT * FROM representative_db WHERE ward = $1",
      [ward]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
