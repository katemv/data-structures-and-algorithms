class HashTable<T> {
    private readonly data: [string, T][][];
    
    constructor(size: number) {
        this.data = new Array(size);
    }

    private hash(key: string): number {
        let hashValue = 0;
        
        for (let i = 0; i < key.length; i++) {
            hashValue = (hashValue + key.charCodeAt(i) * i) % this.data.length;
        }
        
        return hashValue;
    }

    public set(key: string, value: T) {
        const address = this.hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
    }

    public get(key: string): T | undefined {
        const address = this.hash(key);

        const currentBucket =  this.data[address];

        if (currentBucket && currentBucket.length > 0) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }

    public keys (): string[] {
        const keysArray = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let k = 0; k < this.data[i].length; k++) {
                    keysArray.push(this.data[i][k][0]);
                }
            }
        }

        return keysArray;
    }

    public values (): T[] {
        const keysArray = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let k = 0; k < this.data[i].length; k++) {
                    keysArray.push(this.data[i][k][1]);
                }
            }
        }

        return keysArray;
    }
}

export default HashTable;
