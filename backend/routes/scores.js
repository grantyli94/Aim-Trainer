"use strict";

/** Routes for scores. */

// const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const Score = require("../models/score");
// const jobNewSchema = require("../schemas/jobNew.json");

const router = express.Router({ mergeParams: true });


/** POST / { score } => { score }
 *
 * score should be { name, score }
 *
 * Returns { id, name, score }
 *
 */

router.post("/classic", async function (req, res, next) {
  // const validator = jsonschema.validate(req.body, jobNewSchema);
  // if (!validator.valid) {
  //   const errs = validator.errors.map(e => e.stack);
  //   throw new BadRequestError(errs);
  // }

  const score = await Score.createClassic(req.body);
  return res.status(201).json({ score });
});

/** GET / =>
 *   { scores: [ { id, name, score }, ...] }
 *
 */

router.get("/classic", async function (req, res, next) {
  // const validator = jsonschema.validate(q, jobSearchSchema);
  // if (!validator.valid) {
  //   const errs = validator.errors.map(e => e.stack);
  //   throw new BadRequestError(errs);
  // }

  const scores = await Score.getClassicScores();
  return res.json({ scores });
});

router.post("/tracking", async function (req, res, next) {
  // const validator = jsonschema.validate(req.body, jobNewSchema);
  // if (!validator.valid) {
  //   const errs = validator.errors.map(e => e.stack);
  //   throw new BadRequestError(errs);
  // }

  const score = await Score.createTracking(req.body);
  return res.status(201).json({ score });
});

/** GET / =>
 *   { scores: [ { id, name, score }, ...] }
 *
 */

router.get("/tracking", async function (req, res, next) {
  // const validator = jsonschema.validate(q, jobSearchSchema);
  // if (!validator.valid) {
  //   const errs = validator.errors.map(e => e.stack);
  //   throw new BadRequestError(errs);
  // }

  const scores = await Score.getTrackingScores();
  return res.json({ scores });
});


module.exports = router;
