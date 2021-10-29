import { difference, union } from "./utils";

class Graph {
  graph: Map<string, Set<string>>;
  components: Set<string>[];

  constructor(graph: Map<string, Set<string>>) {
    this.graph = graph;
    console.log("G = ", graph);
    this.components = this.get_all_connected_groups();
  }

  getNeighbors(vertexA: string) {
    const connected = this.components.filter((component: Set<string>) => component.has(vertexA))[0];
    return difference(connected, new Set<string>([vertexA]));
  }

  cut() {
  }

  add(vertexA: string, vertexB: string) {
  }


  private get_all_connected_groups(): Set<string>[] {
    let alreadySeen = new Set<string>();

    const DFSUtil = (node: string) => {
      // Mark the current node as visited and print it
      alreadySeen.add(node);

      let result = new Set<string>([node]);

      // Recur for all the vertices adjacent to this vertex
      for (let neighbor of this.graph.get(node)) {
        if (alreadySeen.has(neighbor)) continue;

        result = union(result, DFSUtil(neighbor));
      }
      return result
    };

    const result = [];

    for (let node of this.graph.keys()) {
      if (alreadySeen.has(node)) continue;

      const connectedComponent = DFSUtil(node)
      result.push(connectedComponent);
    }

    console.log(result)
    return result
  }
}

export default Graph;
