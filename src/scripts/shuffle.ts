import { DrinkCategory } from "../types/drink";

export const shuffle = (allDrinks: DrinkCategory[]) => {
    let currentIndex = allDrinks.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [allDrinks[currentIndex], allDrinks[randomIndex]] = [allDrinks[randomIndex], allDrinks[currentIndex]];
    }
  }
