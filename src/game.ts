import {BehaviorStrategy} from "./behavior-strategy";
import {Result} from "./result";
import {Behavior} from "./behavior";
import {Interaction} from "./interaction";

export class Game {

    public static between(player1: BehaviorStrategy, player2: BehaviorStrategy): Result {
        let result = Result.zeroZero();
        for (let i = 0; i < 100; i++) {
            const round = Interaction.between(player1, player2);
            const points = Game.calculatePoints(round);
            result = result.add(points);
        }
        return result;
    }

    private static calculatePoints([player1, player2]: [Behavior, Behavior]): Result {
        if (player1 === Behavior.COOPERATE) {
            if (player2 === Behavior.COOPERATE) {
                return new Result(3, 3)
            }
            return new Result(0, 5)
        } else {
            if (player2 === Behavior.COOPERATE) {
                return new Result(5, 0)
            }
            return new Result(1, 1)
        }
    }
}