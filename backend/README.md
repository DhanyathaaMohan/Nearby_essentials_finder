# Backend API - Nearby Essentials Finder

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the `backend` directory:
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_change_in_production
```

3. Start the server:
```bash
npm start
```

## API Endpoints

### Health Check
- `GET /api/health` - Check if server is running

### Authentication
- `POST /api/users/signup` - Register a new user
  - Body: `{ email, password, location }`
  - Returns: `{ token, user }`

- `POST /api/users/login` - Login user
  - Body: `{ email, password }`
  - Returns: `{ token, user }`

- `GET /api/users/me` - Get current user (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ id, email, location, createdAt }`

## Security Improvements

✅ Password hashing with bcrypt
✅ JWT token authentication
✅ Environment variables for sensitive data
✅ Input validation
✅ Error handling middleware
✅ Consistent module system (CommonJS)

## Notes

- User data is stored in-memory (will be lost on server restart)
- For production, consider using a database (MongoDB, PostgreSQL, etc.)
- Change `JWT_SECRET` to a strong random string in production
