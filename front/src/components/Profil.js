import React, { useEffect, useState } from "react"
import axios from 'axios'
import Experience from "./Experiences";


function Profil() {

  const [profil, setProfil] = useState([]);

  useEffect(
    () => {
      axios.get("http://localhost:5000/profil/")
        .then(
          (response) => {
            console.log(response)

            setProfil(response.data)
          }
        )
        .catch(
          (err) => {
            console.log("ERREUR: ", err)
          }
        )

    }, []);


  return (
    <div className="profil mb5">
      <h2>Profil</h2>
      
      { profil.map(experience => (
        <p>
        {experience.intitule}
        </p>
      ))}
      
    </div>
  )
}

export default Profil
