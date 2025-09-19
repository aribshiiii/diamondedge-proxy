# DiamondEdge Proxy (Deploy-Ready)

This is a deploy-ready **Node/Express** proxy that feeds the DiamondEdge 2.0 frontend with richer baseball data.
It exposes endpoints your UI already expects (injuries, lineups, bullpen, defense, park, travel, umpires, odds passthrough).

## Endpoints (JSON)
- `GET /health`
- `GET /injuries?team=Toronto%20Blue%20Jays&sources=rotowire,cbs`
- `GET /lineup?team=Toronto%20Blue%20Jays`
- `GET /bullpen?team=Toronto%20Blue%20Jays`
- `GET /bullpen/usage?team=Toronto%20Blue%20Jays`
- `GET /defense?team=Toronto%20Blue%20Jays`
- `GET /savant/park?venueId=10&season=2025`
- `GET /umpires?gamePk=123456`
- `GET /travel?team=Toronto%20Blue%20Jays&date=2025-09-19`
- `GET /odds/h2h?sport=baseball_mlb&regions=us` (requires `ODDS_API_KEY`)

## Local Dev
```bash
npm install
npm run dev
# open http://localhost:3000/health
