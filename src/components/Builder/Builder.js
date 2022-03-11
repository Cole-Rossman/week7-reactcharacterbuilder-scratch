import React from 'react';
import './Builder.css';

export default function Builder({ setHead, setMiddle, setBottom, setCatchphrase, setCatchphraseArray, head, middle, bottom, catchphrase, catchphraseArray }) {

  const saveCatchphrase = () => {
    setCatchphraseArray((prevState) => [...prevState, catchphrase]);
  };

  return (
    <div className='builder'>
      <div className="left">
        <div className="picker">
          <label>
                    Head
            <select id="head-dropdown" onChange={(e) => setHead(e.target.value)}>
              <option value="bird">Bird</option>
              <option value="duck">Duck</option>
              <option value="dog">Dog</option>
              <option value="horse">Horse</option>
            </select>
          </label>
          <label>
                    Middle
            <select id="middle-dropdown" onChange={(e) => setMiddle(e.target.value)}>
              <option value="blue">Blue</option>
              <option value="dress">Fancy</option>
              <option value="pink">Pink</option>
              <option value="red">Red</option>
            </select>
          </label>
          <label>
                    Bottom
            <select id="bottom-dropdown" onChange={(e) => setBottom(e.target.value)}>
              <option value="leg">Single Leg</option>
              <option value="white">White Pants</option>
              <option value="blue">Blue Jeans</option>
            </select>
          </label>
          <label>
                    Add a catch phrase
            <input id="catchphrase-input" onChange={(e) => setCatchphrase(e.target.value)} />
            <button onClick={saveCatchphrase} id="catchphrase-button">Submit</button>
            Your catchphrase:
            <ul>
              {catchphraseArray.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </label>
        </div>
        <div id="stats">
          <p id="report"></p>
          <div id="catchphrases">
                    
          </div>
        </div>
      </div>
      <div className="right">
        <div className="character">
          <div className="bg head" id="head">
            <img style={{ height: '100px' }} src={`${process.env.PUBLIC_URL}/photos/${head}-head.png`} />
          </div>
          <div className="bg middle" id="middle">
            <img style={{ height: '100px' }} src={`${process.env.PUBLIC_URL}/photos/${middle}-middle.png`} />
          </div>
          <div className="bg bottom" id="bottom">
            <img style={{ height: '100px' }} src={`${process.env.PUBLIC_URL}/photos/${bottom}-pants.png`} />
          </div>
        </div>
            
      </div>
    
    </div>

  );
}