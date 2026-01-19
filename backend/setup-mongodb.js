// MongoDB Setup Helper Script
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== MongoDB Setup Helper ===\n');
console.log('Choose your MongoDB option:\n');
console.log('1. MongoDB Atlas (Cloud - Recommended, Free)');
console.log('2. Local MongoDB (Requires installation)');
console.log('3. Skip setup (Manual configuration)\n');

rl.question('Enter your choice (1-3): ', (choice) => {
  if (choice === '1') {
    setupAtlas();
  } else if (choice === '2') {
    setupLocal();
  } else {
    console.log('\n📝 Manual Setup:');
    console.log('1. Create a .env file in the backend directory');
    console.log('2. Add: MONGODB_URI=your_connection_string');
    console.log('3. Run: npm start');
    rl.close();
  }
});

function setupAtlas() {
  console.log('\n=== MongoDB Atlas Setup ===\n');
  console.log('Follow these steps:\n');
  console.log('1. Go to: https://www.mongodb.com/cloud/atlas/register');
  console.log('2. Create a free account');
  console.log('3. Create a FREE cluster (M0 tier)');
  console.log('4. Set up Database Access:');
  console.log('   - Go to "Database Access" → "Add New Database User"');
  console.log('   - Create username and password (SAVE THESE!)');
  console.log('   - Set privileges to "Atlas admin"');
  console.log('5. Set up Network Access:');
  console.log('   - Go to "Network Access" → "Add IP Address"');
  console.log('   - Click "Allow Access from Anywhere" (0.0.0.0/0)');
  console.log('6. Get Connection String:');
  console.log('   - Go to "Database" → Click "Connect"');
  console.log('   - Choose "Connect your application"');
  console.log('   - Copy the connection string\n');
  
  rl.question('Paste your MongoDB Atlas connection string here: ', (connectionString) => {
    if (!connectionString.trim()) {
      console.log('No connection string provided. Exiting...');
      rl.close();
      return;
    }

    // Ensure database name is included
    let finalConnectionString = connectionString.trim();
    if (!finalConnectionString.includes('/nearby_essentials')) {
      if (finalConnectionString.endsWith('/')) {
        finalConnectionString += 'nearby_essentials';
      } else {
        finalConnectionString += '/nearby_essentials';
      }
    }

    // Replace <password> placeholder if present
    if (finalConnectionString.includes('<password>')) {
      rl.question('Enter your database password: ', (password) => {
        finalConnectionString = finalConnectionString.replace('<password>', password);
        saveEnvFile(finalConnectionString);
      });
    } else {
      saveEnvFile(finalConnectionString);
    }
  });
}

function setupLocal() {
  console.log('\n=== Local MongoDB Setup ===\n');
  console.log('1. Download MongoDB: https://www.mongodb.com/try/download/community');
  console.log('2. Install MongoDB');
  console.log('3. Start MongoDB service\n');
  
  rl.question('Is MongoDB installed and running? (y/n): ', (answer) => {
    if (answer.toLowerCase() === 'y') {
      const localUri = 'mongodb://localhost:27017/nearby_essentials';
      saveEnvFile(localUri);
    } else {
      console.log('\nPlease install MongoDB first, then run this script again.');
      console.log('Or choose option 1 for MongoDB Atlas (no installation needed).');
      rl.close();
    }
  });
}

function saveEnvFile(connectionString) {
  const envPath = path.join(__dirname, '.env');
  const envContent = `# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret (CHANGE THIS IN PRODUCTION!)
JWT_SECRET=your_jwt_secret_change_in_production_please_change_this_in_production

# MongoDB Connection String
MONGODB_URI=${connectionString}
`;

  try {
    fs.writeFileSync(envPath, envContent);
    console.log('\n✅ .env file created successfully!');
    console.log(`   Connection String: ${connectionString.replace(/\/\/.*@/, '//***:***@')}`);
    console.log('\n📝 Next steps:');
    console.log('   1. Review the .env file');
    console.log('   2. Change JWT_SECRET to a secure random string');
    console.log('   3. Run: node test-connection.js (to test connection)');
    console.log('   4. Run: npm start (to start the server)');
  } catch (error) {
    console.error('\n❌ Error creating .env file:', error.message);
    console.log('\nPlease create .env file manually with:');
    console.log(`MONGODB_URI=${connectionString}`);
  }
  
  rl.close();
}
