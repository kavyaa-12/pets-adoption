const sequelize = require('./models/db'); // adjust the path if needed

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((err) => {
    console.error('❌ Error connecting to the database:', err);
  });
