const chai = require("chai");
const expect = chai.expect;

import Graph from "../src/graph";


describe("Check connected components generation", () => {
  it("Check empty graph", () => {
    const g = new Graph();
    g.computeComponents()
    expect(g.components).to.deep.equal([]);
  });

  it("Check graph with one node", () => {
    const g = new Graph();
    g.addNode("a")
    g.computeComponents()
    expect(g.components).to.deep.equal([new Set(["a"])]);
  });

  it("Check graph with two disconnected nodes", () => {
    const g = new Graph();
    g.addNodes(["a", "b"])
    g.computeComponents()
    expect(g.components).to.deep.equal([new Set(["a"]), new Set(["b"])]);
  });

  it("Check graph with two connected nodes", () => {
    const g = new Graph();
    g.addEdge("a", "b")
    g.computeComponents()
    expect(g.components).to.deep.equal([new Set(["a", "b"])]);
  });

  it("Check complex graph", () => {
    const g = new Graph();
    g.addEdges([["a", "d"], ["d", "c"], ["b", "e"]])
    g.addNode("v")
    g.computeComponents()
    expect(g.components).to.deep.equal([new Set(["a", "d", "c"]), new Set(["b", "e"]), new Set(["v"])])
  });
});


describe("Check correct neighbors", () => {
  it("Check graph with one node", () => {
    const g = new Graph();
    g.addNode("a")
    g.computeComponents()
    expect(g.getNeighbors("a")).to.deep.equal(new Set());
  });
  it("Check graph with two disconnected nodes", () => {
    const g = new Graph();
    g.addNodes(["a", "b"])
    g.computeComponents()
    expect(g.getNeighbors("a")).to.deep.equal(new Set());
    expect(g.getNeighbors("b")).to.deep.equal(new Set());
  });
  it("Check complex graph", () => {
    const g = new Graph();
    g.addEdges([["a", "d"], ["d", "c"], ["b", "e"]])
    g.computeComponents()
    expect(g.getNeighbors("a")).to.deep.equal(new Set(["c", "d"]))
    expect(g.getNeighbors("c")).to.deep.equal(new Set(["a", "d"]))
    expect(g.getNeighbors("d")).to.deep.equal(new Set(["a", "c"]))
    expect(g.getNeighbors("b")).to.deep.equal(new Set(["e"]))
    expect(g.getNeighbors("e")).to.deep.equal(new Set(["b"]))
  });
});


describe("cutEdge", () => {
  it("Cut Non Existing edge", () => {
    const g = new Graph();
    g.cutEdge("a", "b")
    g.computeComponents()
    expect(g.components).to.deep.equal([]);
  })
  it("Cut Existing edge", () => {
    const g = new Graph();
    g.addEdge("a", "b")
    g.cutEdge("a", "b")
    g.computeComponents()
    expect(g.components).to.deep.equal([new Set(["a"]), new Set(["b"])]);
  })
})

describe("cutNode", () => {
  it("Cut Non Existing node", () => {
    const g = new Graph();
    g.cutNode("a")
    g.computeComponents()
    expect(g.components).to.deep.equal([]);
  })
  it("Cut Existing node", () => {
    const g = new Graph();
    g.addNode("a")
    g.cutNode("a")
    g.computeComponents()
    expect(g.components).to.deep.equal([]);
  })
})
