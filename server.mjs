import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/health', (_, res) => {
  res.json({ ok: true, msg: 'Proxy is running!' });
});

app.get('/injuries', (req, res) => {
  res.json({
    impactCount: 2,
    list: [
      { player: 'Key Hitter', status: 'DTD', note: 'wrist soreness', source: 'rotowire' },
      { player: 'Setup RP', status: 'IL-15', note: 'shoulder strain', source: 'cbs' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`diamondedge proxy running on :${PORT}`);
});
