# EcoStay AI Backend

Backend Phase 1 foundation for EcoStay AI. This project sets up the production-ready Node.js, Express, and MongoDB architecture that later API modules can extend.

## Installation

```bash
cd backend
npm install
```

## Running

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

The server exposes a root health response:

```json
{
  "message": "EcoStay AI Backend Running"
}
```

## Folder Structure

```text
backend/
|-- src/
|   |-- config/
|   |   |-- db.js
|   |   `-- cloudinary.js
|   |-- controllers/
|   |-- middleware/
|   |   |-- authMiddleware.js
|   |   |-- errorMiddleware.js
|   |   `-- notFound.js
|   |-- models/
|   |-- routes/
|   |   `-- index.js
|   |-- services/
|   |-- utils/
|   |-- validations/
|   |-- app.js
|   `-- server.js
|-- .env
|-- .env.example
|-- .gitignore
|-- package.json
`-- README.md
```

## Environment Variables

Copy `.env.example` to `.env` and fill in deployment-specific values.

| Variable | Description |
| --- | --- |
| `PORT` | Port used by the Express server |
| `NODE_ENV` | Runtime environment, such as `development` or `production` |
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key reserved for future JWT verification |
| `JWT_EXPIRE` | Future JWT token lifetime |
| `CLIENT_URL` | Allowed frontend origin for CORS |
| `CLOUDINARY_NAME` | Reserved for future Cloudinary integration |
| `CLOUDINARY_API_KEY` | Reserved for future Cloudinary integration |
| `CLOUDINARY_API_SECRET` | Reserved for future Cloudinary integration |
