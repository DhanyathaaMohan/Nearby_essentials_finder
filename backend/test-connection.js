// Test MongoDB Connection
require('dotenv').config();
const mongoose = require('mongoose');

const testConnection = async () => {
  console.log('🔍 Testing MongoDB Connection...\n');
  console.log('Connection String:', process.env.MONGODB_URI ? process.env.MONGODB_URI.replace(/\/\/.*@/, '//***:***@') : 'NOT SET');
  console.log('');

  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI not found in .env file');
    console.log('\nPlease create a .env file with:');
    console.log('MONGODB_URI=mongodb://localhost:27017/nearby_essentials');
    console.log('OR');
    console.log('MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nearby_essentials');
    process.exit(1);
  }

  try {
    console.log('⏳ Connecting to MongoDB...');
    
    await mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });

    console.log('✅ MongoDB Connected Successfully!');
    console.log(`   Host: ${mongoose.connection.host}`);
    console.log(`   Database: ${mongoose.connection.name}`);
    console.log(`   Ready State: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'}`);
    
    // Test a simple operation
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`\n📊 Collections in database: ${collections.length}`);
    if (collections.length > 0) {
      collections.forEach(col => {
        console.log(`   - ${col.name}`);
      });
    }

    await mongoose.connection.close();
    console.log('\n✅ Connection test completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ MongoDB Connection Failed!');
    console.error(`   Error: ${error.message}`);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\n💡 Solutions:');
      console.log('   1. Make sure MongoDB is running locally');
      console.log('   2. OR use MongoDB Atlas (cloud):');
      console.log('      - Sign up at https://www.mongodb.com/cloud/atlas/register');
      console.log('      - Create free cluster');
      console.log('      - Get connection string and update .env file');
    } else if (error.message.includes('authentication failed')) {
      console.log('\n💡 Check your username and password in the connection string');
    } else if (error.message.includes('ENOTFOUND')) {
      console.log('\n💡 Check your MongoDB Atlas cluster URL');
    }
    
    process.exit(1);
  }
};

testConnection();
