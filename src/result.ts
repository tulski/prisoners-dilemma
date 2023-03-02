export class Result {

    static zeroZero(): Result {
        return new Result(0, 0);
    }

    constructor(
        public readonly one: number,
        public readonly two: number,
    ) {
    }

    public add(other: Result): Result {
        return new Result(this.one + other.one, this.two + other.two);
    }

    public toString(): string {
        return `Result(${this.one}, ${this.two})`;
    }

}