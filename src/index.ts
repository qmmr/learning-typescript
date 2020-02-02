// function addOne(age: number): number {
//   return age + 1;
// }

// // console.log(addOne("thirty two"));

// // 1 - declaring a type
// type RankingTuple = [number, string, boolean];

// // 2 - defining typed variables
// let position: number;
// let playerName: string;
// let finishedGame: boolean;
// let ranking: RankingTuple;
// let hallOfFame: Array<RankingTuple> = [];

// // 3 - creating a ranking
// position = 1;
// playerName = "Bruno Krebs";
// finishedGame = true;
// ranking = [position, playerName, finishedGame];
// hallOfFame.push(ranking);

// // 4 - creating another ranking
// position = 2;
// playerName = "Maria Helena";
// finishedGame = true;
// ranking = [position, playerName, finishedGame];
// hallOfFame.push(ranking);

// // 5 - defining a function that logs all rankings
// function printRankings(rankings: Array<RankingTuple>): void {
//   for (let ranking of rankings) {
//     console.log(ranking);
//   }
// }

// // 6 - calling the function
// printRankings(hallOfFame);

import { Task } from './task'
import { Completable } from './completable'

interface sendCompletionEmailFN {
  (completeable: Completable): void
}

const sendCompletionEmail: sendCompletionEmailFN = (completable) => {
  if (!completable.completed) {
    // ignore incompleted entities
    console.error(`Please, complete '${completable.title}' before sending email.`)
    return
  }
  console.log(`Sending email about '${completable.title}'`)
  // ...
}

// let tasks: Array<Task> or let tasks: Task[]
let tasks: Task[] = [
  new Task(1, 'Buy milk'),
  new Task(2, 'Buy cheese'),
  new Task(3, 'Pay bills'),
  new Task(4, 'Clean the house'),
]

for (let task of tasks) {
  console.log(task.title)
}

let bugFix = new Task(1, 'Weirdo flying bug')
sendCompletionEmail(bugFix)
bugFix.completed = true
sendCompletionEmail(bugFix)
