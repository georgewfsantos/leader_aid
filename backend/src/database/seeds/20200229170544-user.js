const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: process.env.SEEDS_USERNAME,
          email: process.env.SEEDS_EMAIL,
          password_hash: bcrypt.hashSync(process.env.SEEDS_PSW, 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
