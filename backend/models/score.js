"use strict";

const db = require("../db");
const { NotFoundError, BadRequestError} = require("../expressError");

class Score {
  
  /** Create a classic score, update db, return new score data.
   *
   * name: 3-letter string
   * score: integer
   * 
   * Returns {id, name, score}
   **/

  static async createClassic(name, score) {
    if (name.length > 3) throw new BadRequestError(`Name must be 3 characters or less`);
    
    const result = await db.query(
      `INSERT INTO scores_classic (name, score)
       VALUES ($1, $2)
       RETURNING id, name, score`,
       [name, score]
    );

    const newScore = result.rows[0];
    return newScore;
  }
}

module.exports = Score;