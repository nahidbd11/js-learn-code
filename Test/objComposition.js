let game = {
  score: "this is common properties",
  details() {
    return "every game has details property";
  },
};

console.log(game.details());

/*****
 * !inheriting  from game object****
 * */
let football = Object.create(game, {
  player: { value: "messi" },
  award: {
    value: function () {
      return "ballon d or is the award";
    },
  },
});

console.log(football.award());
