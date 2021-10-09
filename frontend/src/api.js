import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

 class AimlyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    // const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // /*************** User Routes ***************/

  // /** Get details on a user. */
  
  // static async getUserInfo(username) {
  //   let res = await this.request(`users/${username}`);
  //   return res.user;
  // }
  
  // /** Registers a user and returns a token. */

  // static async signUp(userInfo) {
  //   let res = await this.request(`auth/register`, userInfo, "post");
  //   this.token = res.token;
  //   return res.token;
  // }

  // /** Authenticates user credentials and returns a token. */

  // static async logIn(credentials) {
  //   let res = await this.request(`auth/token`, credentials, "post");
  //   this.token = res.token;
  //   return res.token;
  // }
  
  // /** Authenticates user credentials and returns a token. */

  // static async updateUser(userInfo, username) {
  //   let res = await this.request(`users/${username}`, userInfo, "patch");
  //   return res.user;
  // }
  
  // /** Apply to a job. */

  // static async applyToJob(username, id) {
  //   let res = await this.request(`users/${username}/jobs/${id}`, {}, "post");
  //   return res;
  // }

  // /** Unapply to a job. */

  // static async unApplyToJob(username, id) {
  //   let res = await this.request(`users/${username}/jobs/${id}`, {}, "delete");
  //   return res;
  // }
  
  // /** Gets user's list of applied jobs. */

  // static async getAppliedJobs(username) {
  //   let res = await this.request(`users/${username}/jobs`);
  //   return res.jobs;
  // }

  /*************** Scores Routes ***************/
  
   /** Creates a new classic score entry
    *  data - { name, score }
    *  returns { id, name, score }
    */

   static async createClassic(data) {
    let res = await this.request(`scores/classic`, data, "post");
    return res.score;
  }
  
  /** Get all classic scores */

  static async getClassicScores() {
    let res = await this.request(`scores/classic`);
    return res.scores;
  }

  /** Creates a new tracking score entry
    *  data - { name, score }
    *  returns { id, name, score }
    */

  static async createTracking(data) {
    let res = await this.request(`scores/tracking`, data, "post");
    console.log(res.score);
    return res.score;
  }
  
  /** Get all tracking scores */

  static async getTrackingScores() {
    let res = await this.request(`scores/tracking`);
    return res.scores;
  }
  
  
  /** Get details on a company by handle. */

  static async get(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /*************** Job Routes ***************/

  /** Get details on all jobs. */

  static async getAllJobs(term) {
    if (!term){
      let res = await this.request(`jobs`);
      return res.jobs;
    } else {
      let res = await this.request(`jobs?title=${term}`);
      return res.jobs;
    }
  }
  
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export default AimlyApi;