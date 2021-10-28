// import Graph from "../src/graph";
// import { makeSymmetric } from "../src/utils";
//
// const chai = require("chai");
// const expect = chai.expect;
//
// describe("Symmetry enforcer", () => {
//   it("Check empty graph", () => {
//     const adjacencyList = new Map<string, Set<string>>();
//     expect(makeSymmetric(adjacencyList)).to.deep.equal(adjacencyList);
//   });
//   it("Check one node graph", () => {
//     const adjacencyList = new Map<string, Set<string>>();
//     adjacencyList.set("a", new Set());
//     expect(makeSymmetric(adjacencyList)).to.deep.equal(adjacencyList);
//   });
//
//   it("Check graph with two disconnected nodes", () => {
//     const adjacencyList = new Map<string, Set<string>>();
//     adjacencyList.set("a", new Set());
//     adjacencyList.set("b", new Set());
//     expect(makeSymmetric(adjacencyList)).to.deep.equal(adjacencyList);
//   });
// })
