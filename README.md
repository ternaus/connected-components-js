# Library to work with connected components of the undirected graph

## Installation

```bash
npm install connected-components-js
```

```javascript
const g = new Graph();
g.addEdge("a", "b")
g.addEdges([["a", "d"], ["e", "f"], ["k", "l"]])

g.addNode("c")
g.addNodes(["t", "f", "m"])

const components = g.computeComponents()
```
