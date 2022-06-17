import './Style/App.scss';
import './Style/active.scss';
import './Style/noActive.scss';
import './Style/disable.scss';

import List from './list.jsx';
import cat from './assets/cat.json';

function App() {
  return (
    <div className="App">
      <div className="tittle">
        <p>Ты сегодня покормил кота?</p>
      </div>
      <div className="list">
        {cat.map((obj) => (
          <List
            key={obj.id}
            name={obj.name}
            size={obj.size}
            gift={obj.gift}
            gift_text={obj.gift_text}
            massa_text={obj.massa_text}
            text_buttom={obj.text_buttom}
            disable={obj.disable}
            disable_text={obj.dasable_text}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
