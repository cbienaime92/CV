import "./styles/App.css"
import User from "./components/User"
import Skills from "./components/Skills"
import Profil from "./components/Profil"
import ListFormations from "./components/ListFormations"
import ListExperiences from "./components/ListExperiences"

function App() {

  return (

    <div className="App">
      <div className="grid__container">
        <div className="sidebar">
          <div className="actions">
          </div>
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <ListFormations />
          <ListExperiences />
        </div>
      </div>

    </div>

  )
}

export default App
