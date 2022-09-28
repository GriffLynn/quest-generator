import {useState, useEffect} from 'react';
import PopUp from './components/PopUp.js';
import Greeting from './components/Greeting.js';
import Button from './components/Button.js';
import antagonists from './data/antagonists.json';
import loot from './data/loot.json';
import quest_giver from './data/quest_giver.json';
import quests from './data/quests.json';
import twist from './data/twist.json';
import './App.css';

const App = () => {
  const [pop, setPop] = useState(false);

  console.log('Pop!', pop);

  return (
    <div className="App">
        <header className="App-header">
          <div className="header-container">
            <h2 className="qg">Quest Generator</h2>
          </div>
        </header>
      <div className="components-div">
          <Greeting />
          <Button
            handleClick={setPop}/>
        {pop ? <PopUp
          antagonists={antagonists}
          loot={loot}
          questgiver={quest_giver}
          quests={quests}
          twists={twist} /> : null}
      </div>
    </div>
  );
}

export default App;
