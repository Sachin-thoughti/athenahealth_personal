"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db, callback) {
    db.createTable(
        "psq_run",
        {
            psq_id: {
                type: "bigint",
                length: 20,
                primaryKey: true,
                autoIncrement: true
            },
            psq_run_count: {
                type: "bigint",
                length: 20,
                null: true
            },
            psq_run_psq_id: {
                type: "bigint",
                length: 20,
                null: true
            },
            psq_run_timestamp: {
                type: "datetime",
                null: true
            }
        },
        function (err) {
            if (err) return callback(err);
            return callback();
        }
    );
};

exports.down = function (db, callback) {
    db.dropTable("psq_run", callback);
};

exports._meta = {
    version: 1
};
