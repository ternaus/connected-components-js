export const  difference = (setA: Set<string>, setB: Set<string>) => {
  let _difference = new Set(setA)
  for (let elem of setB) {
    _difference.delete(elem)
  }
  return _difference
}

export const union = (setA: Set<string>, setB: Set<string>) => {
  let _union = new Set(setA)
  for (let elem of setB) {
    _union.add(elem)
  }
  return _union
}

/**
 * Make the graph symmetric. I.E. if A is neighbor to B => B is neighbor to A
 * @param graph
 */
export const makeSymmetric = (graph: Map<string, Set<string>>) => {
  for (let node of graph.keys()) {
    for (let neighbor in graph.get(node)) {
      graph.get(neighbor).add(node)
    }
  }
  return graph
}
