var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    'user',
    {
      id: {
        type: 'int',
        notNull: true,
        autoIncrement: true,
        primaryKey: true,
      },
      userName: {
        type: 'string',
        length: 64,
        unique: true,
      },
      password: {
        type: 'string',
        notNull: true,
      },
      currencyAccount: {
        type: 'int',
        notNull: true,
        defaultValue: 0,
      },
    },
    err => {
      if (err) return callback(err);
      return callback();
    }
  );
};

exports.down = function (db, callback) {
  db.dropTable('user', callback);
};

exports._meta = {
  version: 1
};
