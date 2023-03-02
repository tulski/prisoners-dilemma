import {Behavior} from "./behavior";

export interface BehaviorStrategy {
    name: string;
    showBehavior(): Behavior;
    seenBehaviorWas(behavior: Behavior): void;

}