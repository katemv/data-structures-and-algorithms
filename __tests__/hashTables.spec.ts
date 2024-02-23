import HashTable from "../hash_tables/hashTable";

describe("Hash Table", () => {
    let myHashTable = new HashTable<number>(5);

    beforeEach(() => {
        myHashTable = new HashTable<number>(5);

        myHashTable.set("grapes", 1000);
        myHashTable.set("apples", 200);
        myHashTable.set("oranges", 2);
    })

    it("should read values by key", () => {
        expect(myHashTable.get("grapes")).toBe(1000);
    });

    it("should insert items into the hash table", () => {
        myHashTable.set("bananas", 800);
        expect(myHashTable.get("bananas")).toBe(800);
    });

    it("should output keys", () => {
        expect(myHashTable.keys().sort()).toEqual(["grapes", "apples", "oranges"].sort());
    });

    it("should output values", () => {
        expect(myHashTable.values().sort()).toEqual([1000, 200, 2].sort());
    });
});
