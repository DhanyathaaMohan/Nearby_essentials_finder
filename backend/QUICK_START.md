# Quick Start Guide - MongoDB Setup

## 🚀 Fastest Way: MongoDB Atlas (5 minutes)

### Step 1: Create MongoDB Atlas Account
1. Go to: **https://www.mongodb.com/cloud/atlas/register**
2. Sign up with email (free account)

### Step 2: Create Free Cluster
1. Click **"Build a Database"**
2. Select **FREE (M0)** tier
3. Choose any cloud provider/region
4. Click **"Create"** (takes 1-3 minutes)

### Step 3: Configure Database Access
1. Go to **"Database Access"** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter username (e.g., `admin`)
5. Enter password (SAVE THIS!)
6. Set privileges to **"Atlas admin"**
7. Click **"Add User"**

### Step 4: Configure Network Access
1. Go to **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

### Step 5: Get Connection String
1. Go to **"Database"** → Click **"Connect"** on your cluster
2. Choose **"Connect your application"**
3. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/
   ```
4. Replace `<username>` and `<password>` with your actual credentials
5. Add database name at the end: `/nearby_essentials`

**Final connection string should look like:**
```
mongodb+srv://admin:mypassword123@cluster0.xxxxx.mongodb.net/nearby_essentials
```

### Step 6: Configure Backend
Run the setup script:
```bash
cd backend
node setup-mongodb.js
```

Or manually create `backend/.env`:
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_change_in_production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nearby_essentials
```

### Step 7: Test Connection
```bash
node test-connection.js
```

### Step 8: Start Server
```bash
npm start
```

---

## 🖥️ Alternative: Local MongoDB

### Install MongoDB Locally
1. Download: **https://www.mongodb.com/try/download/community**
2. Install MongoDB Community Server
3. MongoDB will start as a Windows service automatically

### Configure Backend
Create `backend/.env`:
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_change_in_production
MONGODB_URI=mongodb://localhost:27017/nearby_essentials
```

### Test & Start
```bash
node test-connection.js
npm start
```

---

## ✅ Verify Setup

Once server is running, test the API:
```bash
# Health check
curl http://localhost:5000/api/health

# Should return:
# {
#   "status": "ok",
#   "timestamp": "...",
#   "database": "connected"
# }
```

---

## 🆘 Troubleshooting

**Connection Refused:**
- MongoDB not running (local) or wrong connection string (Atlas)
- Check firewall settings for Atlas

**Authentication Failed:**
- Wrong username/password in connection string
- User not created in Database Access

**Network Access Denied:**
- IP address not whitelisted in Atlas Network Access
- Add 0.0.0.0/0 for development

**Connection Timeout:**
- Check internet connection (Atlas)
- Verify connection string format
