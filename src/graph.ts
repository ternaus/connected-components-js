import { difference } from "./utils";

class Graph {
  graph: Map<string, Set<string>>;
  components: Set<string>[];

  constructor(graph: Map<string, Set<string>>) {
    this.graph = graph;
    console.log("G = ", graph)
    this.components = this.get_all_connected_groups();
  }

  getNeighbors(vertexA: string) {
    const connected = this.components.filter((component: Set<string>) => component.has(vertexA))[0]
    return difference(connected, new Set<string>([vertexA]))
  }

  cut() {
  }

  add(vertexA: string, vertexB: string) {
  }


  private get_all_connected_groups(): Set<string>[] {
    let result: Set<string>[] = []
    let alreadySeen = new Set<string>()

    const get_connected_group = (node: string) => {
      const result = new Set<string>()
      let nodes = new Set([node])
      console.log("Nodes before = ", nodes)
      while (nodes.size > 0) {
        let node = Array.from(nodes).pop()!
        alreadySeen.add(node)
        console.log("Node of interest = ", node, alreadySeen)
        // nodes = union(nodes, difference(this.graph.get(node)!, alreadySeen))
        console.log("Neighbors", this.graph.get(node)!)
        nodes = difference(this.graph.get(node)!, alreadySeen)
        console.log("Nodes after = ", node, nodes)
        result.add(node)
        console.log("Result = ", result)
      }
      return result
    }

    for (let node of this.graph.keys()) {
      console.log("Loop node = ", node, alreadySeen)
      if (alreadySeen.has(node)) continue

      const connectedGroup = get_connected_group(node)
      console.log("connected group = ", connectedGroup, alreadySeen)
      result.push(connectedGroup)
    }
    return result
  }
}

export default Graph;
