'use strict';

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
    'item',
    {
      id: {
        type: 'int',
        notNull: true,
        autoIncrement: true,
        primaryKey: true,
      },
      itemName: {
        type: 'string',
        length: 128,
        notNull: true,
      },
      description: {
        type: 'string',
        length: 256,
        notNull: true,
      },
      price: {
        type: 'int',
        notNull: true,
      },
      imageUrl: {
        type: 'string',
        length: 128,
        notNull: true,
      },
      createdAt: {
        type: 'timestamp',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP',
      },
      soldAt: {
        type: 'timestamp',
        defaultValue: null,
      },
      buyerName: {
        type: 'string',
        length: 64,
        defaultValue: null,
      },
      userId: {
        type: 'int',
        foreignKey: {
          name: 'itemUserIdFk',
          table: 'user',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT',
          },
          mapping: 'id',
        },
      },
    },
    err => {
      if (err) return callback(err);
      return callback();
    }
  );
};

exports.down = function (db, callback) {
  db.dropTable('item', callback);
};

exports._meta = {
  "version": 1
};
