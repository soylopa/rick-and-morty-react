import React, {useEffect, useState} from 'react';
import menu from './css/menu.css';


function App() {
  const url = 'https://rickandmortyapi.com/api/character'
  const [character, setCharacter] = useState()
  const fecthApi = async () => {
    const response = await fetch (url)
    const responseJSON = await response.json()
    setCharacter(responseJSON)
  }
useEffect(() => {
  fecthApi()
}, []

);
 
  return (
    <div className="App">
      <header>
        <div class="home">
            <h1>
                Rick i Morty <span id="home-id">NFT</span>
            </h1>
        </div>
        <div class="nav-bar">
            <a href="">
                Characters
            </a>
            <a href="">
                Episodes
            </a>
            <a href="">
                Locations
            </a>
            <a href="">
                Chart-icon
            </a>
        </div>
    </header>
    <section>
        <div class="title">
            <h1>
                Title

            </h1>
        </div>
        <div id="flex-row">
            <div class="filter">
                <h2>
                    Filters
                </h2>
                <a href="">clear filters</a>

            </div>
            <div class="search">
                <input type="text" />
                <button>search</button>
            </div>
        </div>
    </section>
    <main>
        <div class="filter-panel"
        >
            <h3>
                Status
            </h3>
                <a>Alive</a>
                <a>Dead</a>
                <a>Unknow</a>
            <h3>
                Species
            </h3>
                <a>Human</a>
                <a>Droid</a>
                <a>Alien</a>
                <a>Unknow</a>
            <h3>
                Gender
            </h3>
                <a>Female</a>
                <a>Male</a>
                <a>Fluid</a>
                <a>Unknow</a>
        </div>
        <div class="data">
        <ul>
              { !character ? 'Cargando...': 
              character.map( (character, index)=>{
                return <li key={index}> 
                {this.character.name}
                </li>
              })
              }
          </ul>  
        </div>
    </main>
    </div>
  );
}

export default App;
