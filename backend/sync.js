const sequelize = require('./models/db'); // db.js exports the Sequelize instance
const User = require('./models/userModel'); // Import your model

// Sync models with the database
sequelize.sync({ force: false }) // change to `true` if you want to drop and recreate tables
  .then(() => {
    console.log('✅ All tables synced successfully.');
    process.exit();
  })
  .catch((err) => {
    console.error('❌ Error syncing tables:', err);
    process.exit(1);
  });
