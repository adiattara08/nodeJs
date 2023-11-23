const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://USER:PASSWORD@INTERNAL_HOST:5432/node-postgres-sql', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
