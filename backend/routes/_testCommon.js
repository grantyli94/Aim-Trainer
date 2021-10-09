"use strict";

const db = require("../db.js");
const Score = require("../models/score");
// const { createToken } = require("../helpers/tokens");

const testJobIds = [];

async function commonBeforeAll() {
  await db.query("DELETE FROM scores_classic");
  await db.query("DELETE FROM scores_tracking");

  await Score.createClassic(
      {
        name: 'ABC',
        score: 10
      });
  await Score.createClassic(
      {
        name: 'DEF',
        score: 15
      });
  await Score.createClassic(
      {
        name: 'GHI',
        score: 20
      });

  await Score.createTracking(
      {
        name: 'ABC',
        score: 1000
      });
  await Score.createTracking(
      {
        name: 'DEF',
        score: 1500
      });
  await Score.createTracking(
      {
        name: 'GHI',
        score: 2000
      });
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


// const u1Token = createToken({ username: "u1", isAdmin: false });
// const u2Token = createToken({ username: "u2", isAdmin: false });
// const adminToken = createToken({ username: "admin", isAdmin: true });


module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
};
