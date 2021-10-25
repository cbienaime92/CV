import React, { useEffect, useState } from "react"
import "../styles/ListExperiences.css"
import Experience from "./Experiences"
import axios from 'axios'

function ListExperiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(
    () => {
      axios.get(
        `${process.env.REACT_APP_API_URL}/experience/`
        // "http://localhost:5000/experience/"
      )
        .then(
          (response) => {


            setExperiences(response.data)
          }
        )
        .catch(
          (err) => {

          }
        )

    }, []);



  return (
    <div>
      <div className="cursus mb3">
        <h2>Experiences</h2>
      </div>
      <ul>
        {
          experiences.map(experience => (
            <Experience experience={experience} key={experience._id} />
          ))}

      </ul >
    </div>
  )

}

export default ListExperiences
