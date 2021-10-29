import { difference } from "../src/graph";

const chai = require("chai");
const expect = chai.expect;

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
