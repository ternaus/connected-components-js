const chai = require("chai");
const expect = chai.expect;

import Graph from "../src/graph";


describe("Check connected components generation", () => {
  // it("Check empty graph", () => {
  //   const adjacencyList = new Map<string, Set<string>>();
  //   const g = new Graph(adjacencyList);
  //   expect(g.components).to.deep.equal([]);
  // });
  //
  // it("Check graph with one node", () => {
  //   const adjacencyList = new Map<string, Set<string>>();
  //   adjacencyList.set("a", new Set());
  //   const g = new Graph(adjacencyList);
  //   expect(g.components).to.deep.equal([new Set(["a"])]);
  // });
  //
  //
  // it("Check graph with two disconnected nodes", () => {
  //   const adjacencyList = new Map<string, Set<string>>();
  //   adjacencyList.set("a", new Set());
  //   adjacencyList.set("b", new Set());
  //   const g = new Graph(adjacencyList);
  //   expect(g.components).to.deep.equal([new Set(["a"]), new Set(["b"])]);
  // });
  //
  //
  // it("Check graph with two connected nodes", () => {
  //   const adjacencyList = new Map<string, Set<string>>();
  //   adjacencyList.set("a", new Set(["b"]));
  //   const g = new Graph(adjacencyList);
  //   expect(g.components).to.deep.equal([new Set(["a", "b"])]);
  // });

  it("Check complex graph", () => {
    const adjacencyList = new Map<string, Set<string>>();
    adjacencyList.set("d", new Set(["a", "c"]));
    adjacencyList.set("a", new Set(["d"]));
    adjacencyList.set("c", new Set(["d"]));
    adjacencyList.set("b", new Set(["e"]));

    const g = new Graph(adjacencyList);

    console.log(g.components);
    // expect(g.getNeighbors("a")).to.deep.equal(new Set(["c", "d"]))
  });
});
//
//
// describe("Check correct neighbors", () => {
//   it("Check complex graph", () => {
//     const adjacencyList = new Map<string, Set<string>>();
//     adjacencyList.set("d", new Set(["a", "c"]));
//     adjacencyList.set("a", new Set(["d"]));
//     adjacencyList.set("c", new Set(["d"]));
//     adjacencyList.set("b", new Set(["e"]));
//
//     const g = new Graph(adjacencyList);
//
//     console.log(g.components);
//     // expect(g.getNeighbors("a")).to.deep.equal(new Set(["c", "d"]))
//   });
// });
