export class ScoreBoard {

    private readonly scores: Map<string, number> = new Map<string, number>();

    get playersRanking(): string[] {
        return Array.from(this.scores.entries())
            .sort((a, b) => b[1] - a[1])
            .map(([name, score]) => name);
    }

    get winner(): string | undefined {
        return this.playersRanking[0];
    }

    get loser(): string | undefined {
        return this.playersRanking[this.playersRanking.length - 1];
    }

    public add(name: string, score: number): void {
        const currentScore = this.scores.get(name) || 0;
        this.scores.set(name, currentScore + score);
    }

    public toString(): string {
        return `ScoreBoard(${Array.from(this.scores.entries())
            .sort((a, b) => b[1] - a[1])
            .map(([name, score]) => `${name}: ${score}`)
            .join(', ')})`;
    }

}