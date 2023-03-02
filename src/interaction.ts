import {BehaviorStrategy} from "./behavior-strategy";
import {Behavior} from "./behavior";

export class Interaction {

    static between(player1: BehaviorStrategy, player2: BehaviorStrategy): [Behavior, Behavior] {
        const cardOfPlayer1 = player1.showBehavior();
        const cardOfPlayer2 = player2.showBehavior();
        player1.seenBehaviorWas(cardOfPlayer2);
        player2.seenBehaviorWas(cardOfPlayer1);
        return [cardOfPlayer1, cardOfPlayer2]
    }

}