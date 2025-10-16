# Sino Project

Full-stack web application with separated frontend and backend.

## Project Structure

```
frame/
├── fe/sino/          # Frontend (Next.js + Tailwind CSS)
└── be/sino/          # Backend (Node.js + Express)
```

## Quick Start

### Frontend (fe/sino)

```bash
cd fe/sino
npm install
npm run dev
```

The frontend will run on [http://localhost:3000](http://localhost:3000)

### Backend (be/sino)

```bash
cd be/sino
npm install
npm run dev
```

The backend API will run on [http://localhost:5000](http://localhost:5000)

## Tech Stack

### Frontend
- Next.js 15.5.4
- React 19.1.0
- Tailwind CSS 4
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- CORS enabled
- Environment configuration with dotenv

## Development

Both frontend and backend can run simultaneously during development. The frontend is configured to work with the backend API.

## License

ISC

