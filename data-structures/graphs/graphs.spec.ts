import Graph from "./graph";

const testConnections = (graph: Graph): string => {
    return graph.showConnections()
        .replace(/\s\n/g, "; ")
        .trim()
        .slice(0, -1);
}
describe("Graph", () => {
    let graph: Graph;

    beforeEach(() => {
        graph = new Graph();
        graph.addVertex("0");
        graph.addVertex("1");
        graph.addVertex("2");

        graph.addEdge("1", "2");
        graph.addEdge("1", "0");
        graph.addEdge("0", "2");
    })

    it("should print values of the graph", () => {
        const result = "0 --> 1 2; 1 --> 2 0; 2 --> 1 0";
        expect(testConnections(graph)).toBe(result);
    });

    it("should add a vertex to the graph", () => {
        const result = "0 --> 1 2; 1 --> 2 0; 2 --> 1 0; 3 -->";
        graph.addVertex("3");
        expect(testConnections(graph)).toBe(result);
    });

    it("should add an edge to the graph", () => {
        const result = "0 --> 1 2; 1 --> 2 0 3; 2 --> 1 0; 3 --> 1";
        graph.addVertex("3");
        graph.addEdge("3", "1");
        expect(testConnections(graph)).toBe(result);
    });
});
