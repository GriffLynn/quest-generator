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
  return (
    <div className="App">
      <div className="header-container">
        <header className="App-header">
          <h2 className="qg">Quest Generator</h2>
        </header>
      </div>
      <div>
        <Greeting />
        <Button />
        <PopUp
          antagonists={antagonists}
          loot={loot}
          questgiver={quest_giver}
          quests={quests}
          twists={twist} />
      </div>
    </div>
  );
}

export default App;
