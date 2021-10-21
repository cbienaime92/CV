import React, { useEffect, useState } from "react"
import "../styles/User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

import axios from 'axios'

function User() {
  const [user, setUser] = useState([]);

  useEffect(
    () => {
      axios.get("http://localhost:5000/contact/nom/BIENAIME")
        .then(
          (response) => {
            console.log(response)

            setUser(response.data)
          }
        )
        .catch(
          (err) => {
            console.log("ERREUR: ", err)
          }
        )

    }, []);


  return (
    <div className="user">
      <img src="./images/avatar.png" className="user__avatar" alt="John Doe" />
      <h1 className="user__name">{user.prenom}  {user.nom}</h1>
      <p className="user__profession">{user.metier}</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> {user.ville}
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33606060606">{user.tel}</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:{user.email}">{user.email}</a>
        </p>
        <p className="user__info">
          <DirectionsCarIcon />{user.permis}
        </p>
                
      </div>
    </div>
  )
}

export default User
