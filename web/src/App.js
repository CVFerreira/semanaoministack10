import React, { useState, useEffect} from 'react';
import api from './services/api';
import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

//CONCEITOS FUNDAMENTAIS REACT
//componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//propriedade: Iformações que o componente Pai passa para o filho, através de atributos.
//estado: Informações mantidas pelo componente. (imutabulidade)

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

async function handleAddDev(e){
  e.preventDefault();

  const response = await api.post('/devs',{
    github_username,
    techs,
    latitude,
    longitude
  })
  
  console.log(response.data);
};

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) =>{
        console.log(err);
      },
      {
        timeout: 30000,
      }
      )
  }, []);
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">User of GitHub</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologies</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="Number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="Number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
            
          <button type="submit">Save</button>
        </form>
      </aside> 

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/20914246?s=460&v=4" alt="Caio Ferreira"/>
              <div className="user-info">
                <strong>Caio Fereira</strong>
                <span>ReacJs, React Native, Node.JS</span>
              </div>              
            </header>
            <p>Entusiasta em JavaScript e seus Framewoks</p>
            <a href="https://github.com/CVFerreira">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/20914246?s=460&v=4" alt="Caio Ferreira"/>
              <div className="user-info">
                <strong>Caio Fereira</strong>
                <span>ReacJs, React Native, Node.JS</span>
              </div>              
            </header>
            <p>Entusiasta em JavaScript e seus Framewoks</p>
            <a href="https://github.com/CVFerreira">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/20914246?s=460&v=4" alt="Caio Ferreira"/>
              <div className="user-info">
                <strong>Caio Fereira</strong>
                <span>ReacJs, React Native, Node.JS</span>
              </div>              
            </header>
            <p>Entusiasta em JavaScript e seus Framewoks</p>
            <a href="https://github.com/CVFerreira">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/20914246?s=460&v=4" alt="Caio Ferreira"/>
              <div className="user-info">
                <strong>Caio Fereira</strong>
                <span>ReacJs, React Native, Node.JS</span>
              </div>              
            </header>
            <p>Entusiasta em JavaScript e seus Framewoks</p>
            <a href="https://github.com/CVFerreira">Acessar perfil no GitHub</a>
          </li>

        </ul>

      </main>

    </div>

  );
}

export default App;
