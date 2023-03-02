import {behaviors} from "./behaviors";
import {Interaction} from "./interaction";
import {Game} from "./game";
import {Tournament} from "./tournaments";
import {Evolution} from "./evolution";

const separator = () => console.log('\n---------------------\n');

const pair = (input: any[]) => {
    const pairs: [any, any][] = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            pairs.push([input[i], input[j]]);
        }
    }
    return pairs;
};

const pairedBehaviours = pair(behaviors);


console.log('Prisoner\'s Dilemma');

separator();

console.log('Interaction between two players');
console.table(pairedBehaviours.map(([player1, player2]) => {
    const [player1Behavior, player2Behavior] = Interaction.between(player1, player2);
    return {
        player1: player1.name,
        player1Behavior,
        player2Behavior,
        player2: player2.name
    }
}))

separator();

console.log('Game between two players');
console.table(pairedBehaviours.map(([player1, player2]) => {
    const result = Game.between(player1, player2);
    return {
        player1: player1.name,
        player1Score: result.one,
        player2Score: result.two,
        player2: player2.name
    }
}));

separator();

console.log('Tournament between all players');
console.table([...Array(behaviors.length).keys()].map(i => {
    const result = Tournament.play(behaviors);
    return {
        players: behaviors.map(a => a.name).join(', '),
        scoreBoard: result.toString(),
        winner: result.winner,
        loser: result.loser
    }
}));

separator();

console.log('Evolution of the population');
let generation = behaviors;
console.table([...Array(behaviors.length - 1).keys()].map(i => {
    generation = Evolution.evolve(generation);
    return {
        behaviors: generation.map(a => a.name).join(', '),
    }
}));