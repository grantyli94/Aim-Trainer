"use strict";

const db = require("../db");
const { NotFoundError, BadRequestError} = require("../expressError");

class Score {
  
  /** Create a classic score, update db, return new score data.
   *
   * data should be { name, score }
   * 
   * Returns {id, name, score}
   * 
   **/

  static async createClassic(data) {
    if (data.name.length > 3) throw new BadRequestError(`Name must be 3 characters or less`);
    
    const result = await db.query(
      `INSERT INTO scores_classic (name, score)
       VALUES ($1, $2)
       RETURNING id, name, score`,
       [data.name, data.score]
    );

    const newScore = result.rows[0];
    return newScore;
  }

  /** Fetches all classic scores.
   *
   * Returns [{id, name, score}, ...] 
   * 
   **/

  static async getClassicScores() {
    const result = await db.query(
      `SELECT * FROM scores_classic
       ORDER BY score DESC`
    );

    const scores = result.rows;
    return scores;
  }

  /** Create a classic score, update db, return new score data.
   *
   * data should be { name, score }
   * 
   * Returns {id, name, score}
   * 
   **/

   static async createTracking(data) {
    if (data.name.length > 3) throw new BadRequestError(`Name must be 3 characters or less`);
    
    const result = await db.query(
      `INSERT INTO scores_tracking (name, score)
       VALUES ($1, $2)
       RETURNING id, name, score`,
       [data.name, data.score]
    );

    const newScore = result.rows[0];
    return newScore;
  }

  /** Fetches all tracking scores.
   *
   * Returns [{id, name, score}, ...] 
   * 
   **/

  static async getTrackingScores() {
    const result = await db.query(
      `SELECT * FROM scores_tracking
       ORDER BY score DESC`
    );

    const scores = result.rows;
    return scores;
  }
}

module.exports = Score;