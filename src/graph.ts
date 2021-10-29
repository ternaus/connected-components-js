import { difference, union } from "./utils";

class Graph {
  graph: Map<string, Set<string>>;
  components: Set<string>[];

  constructor() {
    this.graph = new Map<string, Set<string>>();
    this.components = [new Set()];
  }

  computeComponents = () => {
    this.components = this.get_all_connected_groups();
  };

  getNeighbors(vertexA: string) {
    const connected = this.components.filter((component: Set<string>) => component.has(vertexA))[0];
    return difference(connected, new Set<string>([vertexA]));
  }

  cutEdge(vertexA: string, vertexB: string) {
    if (this.graph.get(vertexA)?.has(vertexB)) this.graph.get(vertexA)!.delete(vertexB);
    if (this.graph.get(vertexB)?.has(vertexA)) this.graph.get(vertexB)!.delete(vertexA);
  }

  cutNode(vertex: string) {
    if (!this.graph.has(vertex)) return;

    this.graph.get(vertex)!.forEach(neighbor => {if (this.graph.has(neighbor)) {
      this.graph.get(neighbor)!.delete(vertex)
    }});
    this.graph.delete(vertex);
  }

  addEdge(vertexA: string, vertexB: string) {
    if (this.graph.has(vertexA)) this.graph.get(vertexA)!.add(vertexB);
    else this.graph.set(vertexA, new Set([vertexB]));

    if (this.graph.has(vertexB)) this.graph.get(vertexB)!.add(vertexA);
    else this.graph.set(vertexB, new Set([vertexA]));
  }

  addEdges(input: string[][]) {
    input.forEach(edge => this.addEdge(edge[0], edge[1]));
  }

  addNode(vertexA: string) {
    if (!this.graph.has(vertexA)) this.graph.set(vertexA, new Set([]));
  }

  addNodes(input: string[]) {
    input.forEach(node => this.addNode(node));
  }


  private get_all_connected_groups(): Set<string>[] {
    let alreadySeen = new Set<string>();

    const DFSUtil = (node: string) => {
      // Mark the current node as visited and print it
      alreadySeen.add(node);

      let result = new Set<string>([node]);

      // Recur for all the vertices adjacent to this vertex
      for (let neighbor of this.graph.get(node)!) {
        if (alreadySeen.has(neighbor)) continue;

        result = union(result, DFSUtil(neighbor));
      }
      return result;
    };

    const result = [];

    for (let node of this.graph.keys()) {
      if (alreadySeen.has(node)) continue;

      const connectedComponent = DFSUtil(node);
      result.push(connectedComponent);
    }

    return result;
  }
}

export default Graph;
