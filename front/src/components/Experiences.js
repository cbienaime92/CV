import React from "react"

function Experience({ experience }) {


  return (


    <li key={experience._id}>

      <div className="grid__row" key={experience.nom}>
        <div className="grid__item ">
          <p className="grid__date">{experience.anneeDebut} - {experience.anneeFin} </p>

        </div>
        <div className="grid__item">
          <p className="grid__title">{experience.nom}</p>

        </div>
        <div className="grid__item">
          <p className="grid__title">{experience.societe}</p>
          <ul>
            {experience.taches.map(item => (
              <li>
                {item.nom}
                <ul>
                  {item.taches.map(res => (
                    <li>
                      {res}

                    </li>
                  ))}
                </ul>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </li>







  )
}

export default Experience
