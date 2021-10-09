"use strict";

const request = require("supertest");

const app = require("../app");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** POST /scores/classic */

describe("POST /scores/classic", function () {
  test("creates a classic score", async function () {
    const resp = await request(app)
        .post(`/scores/classic`)
        .send({
          name: "BOB",
          score: 17,
        });
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      score: {
        id: expect.any(Number),
        name: "BOB",
        score: 17,
      },
    });
  });

});

/************************************** GET /scores/classic */

describe("GET /scores/classic", function () {
  test("fetches list of classic scores", async function () {
    const resp = await request(app).get(`/scores/classic`);
    expect(resp.body).toEqual({
          scores: [
            {
              id: expect.any(Number),
              name: 'GHI',
              score: 20
            },
            {
              id: expect.any(Number),
              name: 'DEF',
              score: 15
            },
            {
              id: expect.any(Number),
              name: 'ABC',
              score: 10
            },
          ],
        },
    );
  });

});

/************************************** POST /scores/tracking */

describe("POST /scores/tracking", function () {
  test("creates a tracking score", async function () {
    const resp = await request(app)
        .post(`/scores/tracking`)
        .send({
          name: "BOB",
          score: 1700,
        });
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      score: {
        id: expect.any(Number),
        name: "BOB",
        score: 1700,
      },
    });
  });

});

/************************************** GET /scores/tracking */

describe("GET /scores/tracking", function () {
  test("fetches list of tracking scores", async function () {
    const resp = await request(app).get(`/scores/tracking`);
    expect(resp.body).toEqual({
          scores: [
            {
              id: expect.any(Number),
              name: 'GHI',
              score: 2000
            },
            {
              id: expect.any(Number),
              name: 'DEF',
              score: 1500
            },
            {
              id: expect.any(Number),
              name: 'ABC',
              score: 1000
            },
          ],
        },
    );
  });

});

// /************************************** GET /jobs/:id */

// describe("GET /jobs/:id", function () {
//   test("works for anon", async function () {
//     const resp = await request(app).get(`/jobs/${testJobIds[0]}`);
//     expect(resp.body).toEqual({
//       job: {
//         id: testJobIds[0],
//         title: "J1",
//         salary: 1,
//         equity: "0.1",
//         company: {
//           handle: "c1",
//           name: "C1",
//           description: "Desc1",
//           numEmployees: 1,
//           logoUrl: "http://c1.img",
//         },
//       },
//     });
//   });

//   test("not found for no such job", async function () {
//     const resp = await request(app).get(`/jobs/0`);
//     expect(resp.statusCode).toEqual(404);
//   });
// });

// /************************************** PATCH /jobs/:id */

// describe("PATCH /jobs/:id", function () {
//   test("works for admin", async function () {
//     const resp = await request(app)
//         .patch(`/jobs/${testJobIds[0]}`)
//         .send({
//           title: "J-New",
//         })
//         .set("authorization", `Bearer ${adminToken}`);
//     expect(resp.body).toEqual({
//       job: {
//         id: expect.any(Number),
//         title: "J-New",
//         salary: 1,
//         equity: "0.1",
//         companyHandle: "c1",
//       },
//     });
//   });

//   test("unauth for others", async function () {
//     const resp = await request(app)
//         .patch(`/jobs/${testJobIds[0]}`)
//         .send({
//           title: "J-New",
//         })
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(401);
//   });

//   test("not found on no such job", async function () {
//     const resp = await request(app)
//         .patch(`/jobs/0`)
//         .send({
//           handle: "new",
//         })
//         .set("authorization", `Bearer ${adminToken}`);
//     expect(resp.statusCode).toEqual(400);
//   });

//   test("bad request on handle change attempt", async function () {
//     const resp = await request(app)
//         .patch(`/jobs/${testJobIds[0]}`)
//         .send({
//           handle: "new",
//         })
//         .set("authorization", `Bearer ${adminToken}`);
//     expect(resp.statusCode).toEqual(400);
//   });

//   test("bad request with invalid data", async function () {
//     const resp = await request(app)
//         .patch(`/jobs/${testJobIds[0]}`)
//         .send({
//           salary: "not-a-number",
//         })
//         .set("authorization", `Bearer ${adminToken}`);
//     expect(resp.statusCode).toEqual(400);
//   });
// });

// /************************************** DELETE /jobs/:id */

// describe("DELETE /jobs/:id", function () {
//   test("works for admin", async function () {
//     const resp = await request(app)
//         .delete(`/jobs/${testJobIds[0]}`)
//         .set("authorization", `Bearer ${adminToken}`);
//     expect(resp.body).toEqual({ deleted: testJobIds[0] });
//   });

//   test("unauth for others", async function () {
//     const resp = await request(app)
//         .delete(`/jobs/${testJobIds[0]}`)
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(401);
//   });

//   test("unauth for anon", async function () {
//     const resp = await request(app)
//         .delete(`/jobs/${testJobIds[0]}`);
//     expect(resp.statusCode).toEqual(401);
//   });

//   test("not found for no such job", async function () {
//     const resp = await request(app)
//         .delete(`/jobs/0`)
//         .set("authorization", `Bearer ${adminToken}`);
//     expect(resp.statusCode).toEqual(404);
//   });
// });
