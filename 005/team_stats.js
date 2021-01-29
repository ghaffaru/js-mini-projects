let team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Micheal',
        lastName: 'Essien',
        age: 30
      },
      {
        firstName: 'Sulley',
        lastName: 'Muntari',
        age: 31
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'laliga',
        teamPoints: 44,
        opponentPoints: 30
      },
      {
        opponent: 'uefa',
        teamPoints: 50,
        opponentPoints: 20
      }
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
    
  
    addPlayer(firstName, lastName, age) {
      this._players.push({firstName,lastName,age})
    },
  
    addGame(name, teamPoints, opponentPoints) {
      this._games.push({name, teamPoints, opponentPoints});
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('tennis', 32, 43);
  team.addGame('basketball', 42, 44);
  team.addGame('netball', 10, 23);
  console.log(team.players);
  console.log(team.games);