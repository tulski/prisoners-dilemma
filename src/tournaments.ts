import {BehaviorStrategy} from "./behavior-strategy";
import {ScoreBoard} from "./score-board";
import {Game} from "./game";

export class Tournament {

    public static play(players: BehaviorStrategy[]): ScoreBoard {
        const scoreBoard = new ScoreBoard();
        players.forEach(player1 => {
            players.forEach(player2 => {
                if (player1 !== player2) {
                    const result = Game.between(player1, player2);
                    scoreBoard.add(player1.name, result.one);
                    scoreBoard.add(player2.name, result.two);
                }
            })
        });
        return scoreBoard;
    }

}