import {BehaviorStrategy} from "./behavior-strategy";
import {Behavior} from "./behavior";

class Betrayer implements BehaviorStrategy {

    get name(): string {
        return 'Betrayer'
    }

    public showBehavior(): Behavior {
        return Behavior.BETRAY
    }

    public seenBehaviorWas(behavior: Behavior): void {
    }

}

class Cooperator implements BehaviorStrategy {

    get name(): string {
        return 'Cooperator'
    }

    public showBehavior(): Behavior {
        return Behavior.COOPERATE
    }

    public seenBehaviorWas(behavior: Behavior): void {
    }

}

class Random implements BehaviorStrategy {

    get name(): string {
        return 'Random'
    }

    public showBehavior(): Behavior {
        return Math.random() > 0.5 ? Behavior.COOPERATE : Behavior.BETRAY
    }

    public seenBehaviorWas(behavior: Behavior): void {
    }

}

class TitForTat implements BehaviorStrategy {

    private lastSeen: Behavior | undefined = undefined;

    get name(): string {
        return 'TitForTat'
    }

    public showBehavior(): Behavior {
        if (this.lastSeen === undefined) {
            return Behavior.COOPERATE
        }
        return this.lastSeen;
    }

    public seenBehaviorWas(behavior: Behavior): void {
        this.lastSeen = behavior;
    }

}


class Mean implements BehaviorStrategy {

        private lastSeen: Behavior | undefined = undefined;

        get name(): string {
            return 'Mean'
        }

        public showBehavior(): Behavior {
            if (this.lastSeen === undefined) {
                return Behavior.COOPERATE
            }
            return this.lastSeen === Behavior.COOPERATE ? Behavior.BETRAY : Behavior.COOPERATE;
        }

        public seenBehaviorWas(behavior: Behavior): void {
            this.lastSeen = behavior;
        }

}

export const behaviors = [
    new Betrayer(),
    new Cooperator(),
    new Random(),
    new TitForTat(),
    new Mean()
];
