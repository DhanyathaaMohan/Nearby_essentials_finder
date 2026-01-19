# MongoDB Setup Guide

## Option 1: MongoDB Atlas (Recommended - Free Cloud Database)

1. **Create Account**: Go to https://www.mongodb.com/cloud/atlas/register
2. **Create Free Cluster**:
   - Click "Build a Database"
   - Choose FREE (M0) tier
   - Select a cloud provider and region
   - Click "Create"
3. **Set Up Database Access**:
   - Go to "Database Access" → "Add New Database User"
   - Create username and password (save these!)
   - Set privileges to "Atlas admin" or "Read and write to any database"
4. **Set Up Network Access**:
   - Go to "Network Access" → "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0) for development
5. **Get Connection String**:
   - Go to "Database" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
   - Replace `<password>` with your actual password
   - Add database name at the end: `mongodb+srv://username:password@cluster.mongodb.net/nearby_essentials`

## Option 2: Local MongoDB Installation

1. **Download**: https://www.mongodb.com/try/download/community
2. **Install**: Run the installer
3. **Start MongoDB**: 
   - Windows: MongoDB should start as a service automatically
   - Or run: `mongod --dbpath C:\data\db`
4. **Connection String**: `mongodb://localhost:27017/nearby_essentials`

## Update .env File

After getting your connection string, update `backend/.env`:

```env
MONGODB_URI=your_connection_string_here
PORT=5000
JWT_SECRET=your_jwt_secret_change_in_production
```
