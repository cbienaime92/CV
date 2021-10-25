import React, { useEffect, useState } from "react"
import axios from 'axios'
import Experience from "./Experiences";


function Profil() {

  const [profil, setProfil] = useState([]);

  useEffect(
    () => {
      axios.get(
        // "http://localhost:5000/profil/"
      `${process.env.REACT_APP_API_URL}/profil/`
      )
        .then(
          (response) => {
   

            setProfil(response.data)
          }
        )
        .catch(
          (err) => {
           
          }
        )

    }, []);


  return (
    <div className="profil mb5">
      <h2>Profil</h2>

      {profil.map(profil => (
        <p  key={profil._id}>
          {profil.intitule}
        </p>
      ))}

    </div>
  )
}

export default Profil
