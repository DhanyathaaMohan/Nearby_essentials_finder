# Setup Checklist - What You Need to Do

## ✅ Already Done (Automated)
- ✅ Express server configured
- ✅ MongoDB connection module created
- ✅ User model with Mongoose schema
- ✅ All endpoints updated for MongoDB
- ✅ Dependencies installed (mongoose, etc.)
- ✅ Setup scripts created

## 📝 What You Need to Do Manually

### Option 1: MongoDB Atlas (Cloud - Recommended, ~5 minutes)

**Step 1: Create MongoDB Atlas Account** (2 minutes)
- Go to: https://www.mongodb.com/cloud/atlas/register
- Sign up with email (free account)

**Step 2: Create Free Cluster** (2 minutes)
- Click "Build a Database"
- Select **FREE (M0)** tier
- Choose any cloud provider/region
- Click "Create" (wait 1-3 minutes)

**Step 3: Configure Database Access** (1 minute)
- Go to "Database Access" → "Add New Database User"
- Create username (e.g., `admin`)
- Create password (**SAVE THIS!**)
- Set privileges to "Atlas admin"
- Click "Add User"

**Step 4: Configure Network Access** (30 seconds)
- Go to "Network Access" → "Add IP Address"
- Click "Allow Access from Anywhere" (0.0.0.0/0)
- Click "Confirm"

**Step 5: Get Connection String** (30 seconds)
- Go to "Database" → Click "Connect" on your cluster
- Choose "Connect your application"
- Copy the connection string
- Replace `<password>` with your actual password
- Add `/nearby_essentials` at the end

**Step 6: Create .env File** (1 minute)
```bash
cd backend
npm run setup
```
OR manually copy `.env.example` to `.env` and update `MONGODB_URI`

---

### Option 2: Local MongoDB (~10 minutes)

**Step 1: Install MongoDB**
- Download: https://www.mongodb.com/try/download/community
- Install MongoDB Community Server
- MongoDB will start as Windows service automatically

**Step 2: Create .env File**
```bash
cd backend
copy .env.example .env
```
Then edit `.env` and set:
```
MONGODB_URI=mongodb://localhost:27017/nearby_essentials
```

---

## 🚀 After Setup

**Test Connection:**
```bash
npm run test-connection
```

**Start Server:**
```bash
npm start
```

**Test API:**
```bash
# Health check
curl http://localhost:5000/api/health
```

---

## 📋 Summary

**Minimum Manual Steps Required:**
1. ✅ Create MongoDB Atlas account OR install MongoDB locally
2. ✅ Get connection string (Atlas) OR verify local MongoDB running
3. ✅ Create `.env` file with connection string
4. ✅ Run `npm start`

**Total Time:** ~5-10 minutes

---

## 🆘 Need Help?

- Read: `QUICK_START.md` for detailed step-by-step guide
- Run: `npm run setup` for interactive setup
- Test: `npm run test-connection` to verify connection
