const team = {
  _players: [
    {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
	},
    
    {
  firstName: 'Leo',
  lastName: 'Holland',
  age: 14
	},
    
    {
  firstName: 'Julio',
  lastName: 'Diez',
  age: 9
	}
  ],
  
  _games: [
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
	},
  
  {
  opponent: 'Barcelona',
  teamPoints: 50,
  opponentPoints: 31
	},
    
  {
  opponent: 'Madrid',
  teamPoints: 2,
  opponentPoints: 7
	},
  ],
  
  get games() {
       return this._games;
   },
  get players() {
       return this._players;
   },
  
   addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
  	},
  
  addGame(opponent, teamPoints, opponentPoints){
    const game = {
      apponent: opponent,
      points: teamPoints,
      opponentPoints: opponentPoints,
    };
    
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players);

team.addGame('Titans', 100, 98);
team.addGame('Rebels', 88, 72);
team.addGame('Falcons', 103, 90);

console.log(team._games);
