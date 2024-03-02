export class MyQueue {
    private inputStack: number[];
    private readonly outputStack: number[];

    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }

    public push(x: number): void {
        while(this.outputStack.length > 0) {
        this.inputStack.push(this.outputStack.pop()!);
    }

    this.inputStack.push(x);

    while(this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop()!);
    }
}

    public pop(): number {
        return this.outputStack.pop()!;
    }

    public peek(): number {
        return this.outputStack[this.outputStack.length - 1];
    }

    public empty(): boolean {
        return this.outputStack.length === 0;
    }

    public print(): number[] {
        return this.outputStack;
    }
}