"use strict";

/** Routes for scores. */

// const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const Score = require("../models/score");
// const jobNewSchema = require("../schemas/jobNew.json");

const router = express.Router({ mergeParams: true });


/** POST / { job } => { job }
 *
 * job should be { title, salary, equity, companyHandle }
 *
 * Returns { id, title, salary, equity, companyHandle }
 *
 * Authorization required: admin
 */

router.post("/", async function (req, res, next) {
  // const validator = jsonschema.validate(req.body, jobNewSchema);
  // if (!validator.valid) {
  //   const errs = validator.errors.map(e => e.stack);
  //   throw new BadRequestError(errs);
  // }

  const job = await Job.create(req.body);
  return res.status(201).json({ job });
});

/** GET / =>
 *   { jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...] }
 *
 * Can provide search filter in query:
 * - minSalary
 * - hasEquity (true returns only jobs with equity > 0, other values ignored)
 * - title (will find case-insensitive, partial matches)

 * Authorization required: none
 */

router.get("/", async function (req, res, next) {
  const q = req.query;
  // arrive as strings from querystring, but we want as int/bool
  if (q.minSalary !== undefined) q.minSalary = +q.minSalary;
  q.hasEquity = q.hasEquity === "true";

  // const validator = jsonschema.validate(q, jobSearchSchema);
  // if (!validator.valid) {
  //   const errs = validator.errors.map(e => e.stack);
  //   throw new BadRequestError(errs);
  // }

  const jobs = await Job.findAll(q);
  return res.json({ jobs });
});


module.exports = router;
