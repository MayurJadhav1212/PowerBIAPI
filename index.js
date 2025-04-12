const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

// PostgreSQL connection setup
const pool = new Pool({
  user: 'postgres',
  host: '51.20.188.162',
  database: 'postgres',
  password: 'SssvM@379738',
  port: 5432,
});

// Simple API to fetch borrowers data
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API running at http://0.0.0.0:${PORT}`);
});


