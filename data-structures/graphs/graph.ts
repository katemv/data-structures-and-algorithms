class Graph {
    private numberOfNodes: number;
    private readonly adjacentList: { [key: string]: string[]};

    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    public addVertex(node: string): void {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    public addEdge(node1: string, node2: string): void {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    public showConnections(): string {
        const allNodes = Object.keys(this.adjacentList);
        let result = "";

        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;

            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }

            result += node + " --> " + connections + "\n";
        }

        return result;
    }
}

export default Graph;
