import React, { useEffect, useState } from "react"
import "../styles/ListFormations.css"
import Formation from "./Formations"
import axios from 'axios'

function ListFormations() {
  const [formations, setFormations] = useState([]);

  useEffect(
    () => {
      axios.get("http://localhost:5000/formation/")
        .then(
          (response) => {
            console.log(response)

            setFormations(response.data)
          }
        )
        .catch(
          (err) => {
            console.log("ERREUR: ", err)
          }
        )

    }, []);



  return (
    <div>
      <div className="cursus mb3">
        <h2>Formations</h2>
      </div>
      <ul>
        {
          formations.map(formation => (
            <Formation formation={formation} key={formation._id}/>
          ))}

      </ul >
    </div>
  )

}

export default ListFormations
