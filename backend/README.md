# Backend API - Nearby Essentials Finder

A RESTful API built with Express.js and MongoDB for the Nearby Essentials Finder application.

## Features

- ✅ MongoDB database integration with Mongoose
- ✅ User authentication with JWT tokens
- ✅ Password hashing with bcrypt
- ✅ Input validation and error handling
- ✅ RESTful API design
- ✅ CORS enabled for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Set up MongoDB:**
   - **Local MongoDB**: Make sure MongoDB is running on your machine
   - **MongoDB Atlas**: Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

3. **Create a `.env` file** in the `backend` directory:
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_change_in_production
MONGODB_URI=mongodb://localhost:27017/nearby_essentials
```

   For MongoDB Atlas, use:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nearby_essentials
```

4. **Start the server:**
```bash
npm start
```

The server will automatically connect to MongoDB and start listening on the configured port.

## Project Structure

```
backend/
├── config/
│   └── database.js      # MongoDB connection configuration
├── models/
│   └── User.js          # User schema and model
├── index.js             # Main server file
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## API Endpoints

### Health Check
- `GET /api/health` - Check server and database status
  - Returns: `{ status, timestamp, database }`

### Authentication
- `POST /api/users/signup` - Register a new user
  - Body: `{ email, password, location }`
  - Location can be:
    - String: `"New York, NY"`
    - Object: `{ latitude: 40.7128, longitude: -74.0060 }`
  - Returns: `{ message, token, user }`

- `POST /api/users/login` - Login user
  - Body: `{ email, password }`
  - Returns: `{ token, user }`

- `GET /api/users/me` - Get current user (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ id, email, location, createdAt, updatedAt }`

## Database Schema

### User Model
```javascript
{
  email: String (required, unique, lowercase),
  password: String (required, min 6 chars, hashed),
  location: Mixed (required, string or {latitude, longitude}),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## Security Features

- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT token authentication
- ✅ Environment variables for sensitive data
- ✅ Input validation with Mongoose schemas
- ✅ Error handling middleware
- ✅ Password field excluded from queries by default

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment (development/production) | `development` |
| `JWT_SECRET` | Secret key for JWT tokens | Required |
| `MONGODB_URI` | MongoDB connection string | Required |

## Development

The server uses Mongoose for MongoDB operations and includes:
- Automatic password hashing on user creation
- Email uniqueness validation
- Location format validation
- Automatic timestamps (createdAt, updatedAt)

## Production Considerations

1. **Change JWT_SECRET** to a strong random string
2. **Use MongoDB Atlas** or a managed MongoDB service
3. **Set NODE_ENV=production** for optimized error messages
4. **Enable MongoDB authentication** in production
5. **Use environment-specific connection strings**
6. **Set up proper logging** and monitoring

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running (local) or connection string is correct (Atlas)
- Check firewall settings if using MongoDB Atlas
- Verify connection string format

### Port Already in Use
- Change `PORT` in `.env` file
- Or stop the process using port 5000
