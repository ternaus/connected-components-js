import { difference, makeSymmetric } from "../src/utils";

const chai = require("chai");
const expect = chai.expect;

describe("Symmetry enforcer", () => {
  it("Check empty graph", () => {
    const adjacencyList = new Map<string, Set<string>>();
    expect(makeSymmetric(adjacencyList)).to.deep.equal(adjacencyList);
  });
  it("Check one node graph", () => {
    const adjacencyList = new Map<string, Set<string>>();
    adjacencyList.set("a", new Set());
    expect(makeSymmetric(adjacencyList)).to.deep.equal(adjacencyList);
  });

  it("Check graph with two disconnected nodes", () => {
    const adjacencyList = new Map<string, Set<string>>();
    adjacencyList.set("a", new Set());
    adjacencyList.set("b", new Set());
    expect(makeSymmetric(adjacencyList)).to.deep.equal(adjacencyList);
  });
})

describe("test difference", () => {
  it("A - empty", () => {
    const a = new Set(['a'])
    const b = new Set<string>()
    expect(difference(a, b)).to.deep.equal(a)
  })
  it("empty - a", () => {
    const a = new Set(['a'])
    const b = new Set<string>()
    expect(difference(b, a)).to.deep.equal(b)
  })
  it("[0, 1, 2] - [1, 2, 3]", () => {
    const a = new Set(['0', '1', '2'])
    const b = new Set(["1", "2", "3"])

    expect(difference(a, b)).to.deep.equal(new Set(["0"]))
    expect(a).to.deep.equal(new Set(["0", "1", "2"]))
    expect(b).to.deep.equal(new Set(["3", "1", "2"]))
  })
})
