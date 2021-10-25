import React, { useEffect, useState } from "react"
import axios from 'axios'

//import { Button, TextField, DialogActions, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { IconButton } from '@mui/material';
// import { AccessAlarm, AddCircleOutlineIcon } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';




function Formation({ formation, sendDataToParent }) {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);

  };


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
          <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => {
              sendDataToParent(formation._id);
            }}>
              <AddCircleOutlineIcon  />
            </IconButton>
        </div>
      </div>
    </li>






  )
}

export default Formation
