
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: "guy1@booze.net",
          password: 'password1'
        },
        {
          email: 'guy2@booze.net',
          password: 'password2'
        },
        {
          email: 'guy3@booze.net',
          password: 'password3'
        },
        {
          email: 'guy4@booze.net',
          password: 'password4'
        },
        {
          email: 'guy5@booze.net',
          password: 'password5'
        }
      ]);
    });
};
