import React from "react"

function Formation({ formation }) {


  return (



    <li key={formation._id}>

      <div className="grid__row" key={formation.nom}>
        <div className="grid__item">
          <p className="grid__date">{formation.anneeDebut} - {formation.anneeFin} </p>

        </div>
        <div className="grid__item">
          <p className="grid__title">{formation.nom}</p>
          
        </div>
        <div className="grid__item">
          <p className="grid__title">{formation.organisme}</p>
        </div>
      </div>
    </li>






  )
}

export default Formation
