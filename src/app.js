//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  return [managerName,managerAge,currentTeam,trophiesWon]
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if (formation.length==3){
    return {defender:formation[0],midfield:formation[1],forward:formation[2]}

  }else if(formation.length<3 && formation.length>0){
    return {defender:formation[0],midfield:formation[1],forward:formation[2]}

  }else{
    return null
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
    var Debut = players.filter(function(items){
      return items.debut==year
    })
    return Debut
  }
  

//Progression 4 - Filter players that play at the position _______
function filterByPosition(positions){
  let Position = players.filter(function(items){
    return items.position==positions
  })
  return Position
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(award) {
  let Award = players.filter(function (item) {
    return item.awards.some(function (awardItem) {
      return awardItem.name === award;
    });
  });
  return Award;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(award,no){
 
    let NoAw = players.filter(function (item) {
      
      let matchingAwards = item.awards.filter(function (awardItem) {
        return awardItem.name === award;
      });
      return matchingAwards.length >= no;
    });
  return NoAw
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(award,countrys){
  let country1 = players.filter(function(items){
    return items.awards.some(function (awardItem) {
      return awardItem.name === award;
    })
  })
    let country2 = country1.filter(function(awardItem){
    return awardItem.country==countrys
  })
    
  return country2
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var NoTA = players.filter(function(items){
    return items.awards.length>=noOfAwards
  })
  var nota=NoTA.filter(function(item){
    return item.team==team
  })
  var Nota=nota.filter(function(item1){
    return item1.age<age 
  })
  return Nota
  }
//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  var Sort_soccar = players.sort(function(a,b){
    return b.age-a.age
  })
  return Sort_soccar
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  var team_p = players.filter(function(player){
    return player.team === team;
  });

  team_p.sort(function(a, b) {
    return b.awards.length - a.awards.length;
  });

  return team_p;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  let av= filterByAwardxTimes(awardName,noOfTimes)
  let country1 = av.filter(function(items){
    
      return items.country==country
    
  })
  return country1
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  let older = players.filter(function(items){
    return items.age>age
  })
  older.sort(function(a){
    return a.name
  })

  let old = players.filter(function(items){
    return items.awards.sort(function (a,b){
      return a.year - b.year; 
  })
})
return old
}


