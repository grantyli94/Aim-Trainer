// const bcrypt = require("bcrypt");

const db = require("../db.js");
// const { BCRYPT_WORK_FACTOR } = require("../config");

async function commonBeforeAll() {
  await db.query("DELETE FROM scores_classic");
  await db.query("DELETE FROM scores_tracking");

  await db.query(`
    INSERT INTO scores_classic(name, score)
    VALUES ('ABC', 10),
           ('DEF', 15),
           ('GHI', 20)`);
  
  await db.query(`
    INSERT INTO scores_tracking(name, score)
    VALUES ('ABC', 1000),
           ('DEF', 1500),
           ('GHI', 2000)`);
}

async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}


module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
};