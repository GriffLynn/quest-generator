

const PopUp = ({ antagonists, loot, questgiver, quests, twists }) => {

  const chooseAntagonist = () => {
    const randomType = antagonists[Math.floor(Math.random() * antagonists.length)];

    for (var types in randomType) {
      return randomType[types][Math.floor(Math.random() * randomType[types].length)].description;
    }
  }

  const chooseLoot = () => {
    const randomLoot = loot[Math.floor(Math.random() * loot.length)];

    for (var shinies in randomLoot) {
      return randomLoot[shinies][Math.floor(Math.random() * randomLoot[shinies].length)].description;
    }
  }

  const chooseQuestGiver = () => {
    var QG = '';
    const randomRace = questgiver[Math.floor(Math.random() * questgiver.length)];
    const randomJob = randomRace.occupation[Math.floor(Math.random() * randomRace.occupation.length)];
    const randomChar = randomRace.with[Math.floor(Math.random() * randomRace.with.length)];
    QG += randomRace.race + ' ' + randomJob + ' with ' + randomChar;
    return QG;
  }

  const chooseQuest = () => {
    return quests[Math.floor(Math.random() * quests.length)].q;
  }

  const chooseTwist = () => {
    return twists[Math.floor(Math.random() * twists.length)].t;
  }
  console.log(chooseTwist());

  return (
    <div className="pop-div">
      <p className="quest-text">
       A {chooseQuestGiver()} approaches the party and asks them to {chooseQuest()} They offer {chooseLoot()} in exhange. Along the way, the party faces {chooseAntagonist()} and {chooseTwist()}
      </p>
    </div>
  )
}


export default PopUp;