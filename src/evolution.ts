import {BehaviorStrategy} from "./behavior-strategy";
import {Tournament} from "./tournaments";

export class Evolution {

    static evolve(generation: BehaviorStrategy[]): BehaviorStrategy[] {
        if (generation.length === 1) {
            return generation;
        }
        const evaluation = Tournament.play(generation);
        return generation.filter(entity => entity.name !== evaluation.loser);
    }

}