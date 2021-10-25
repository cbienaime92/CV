import React, { useEffect, useState } from "react"
import "../styles/ListFormations.css"
import Formation from "./Formations"
import axios from 'axios'
import { Button, TextField, DialogActions, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { AccessAlarm, AddCircleOutlineIcon } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';

// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

function ListFormations() {
  const [formations, setFormations] = useState([]);
  const [open, setOpen] = useState(false);
  const [organisme, setOrganisme] = useState("")
  const [anneeDebut, setanneeDebut] = useState("")
  const [anneeFin, setanneeFin] = useState("")
  const [nomFormation, setnomFormation] = useState("")


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    addFormation();
    setOpen(false);
  };

  const sendDataToParent = (id) => { // the callback. Use a better name
    console.log("ID CHILD", id);
    axios.delete(
      `${process.env.REACT_APP_API_URL}/formation/delete/${id}`)
      .then(response => {
        console.log('Delete successful')
        getAllFormation();
      }
      )
      .catch(error => {
        //setErrorMessage(error.message);
        console.error('There was an error!', error);

      });
  };

  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  const deleteFormation = () => {



  }

  const getAllFormation = () => {
    axios.get(
      `${process.env.REACT_APP_API_URL}/formation/`
      // "http://localhost:5000/formation/"
      )
      .then(
        (response) => {

          let form = response.data;
          form.sort(compareValues("anneeDebut", "desc"))

          setFormations(form)

        }
      )
      .catch(
        (err) => {

        }
      )

  }

  const addFormation = () => {

    let form = {
      "nom": nomFormation,
      "anneeDebut": anneeDebut,
      "anneeFin": anneeFin,
      "organisme": organisme
    }
    axios.post(
      // "http://localhost:5000/formation/add", form
      `${process.env.REACT_APP_API_URL}/formation/add`, form

      )
      .then(
        (response) => {

          //setFormations([...formations, response.data])
          getAllFormation();

        }
      )
      .catch(
        (err) => {

        }
      )
  }

  useEffect(
    () => {
      getAllFormation()
    }, []);



  return (
    <div>
      <div className="cursus mb3">
        <div>
          <h2>Formations
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleClickOpen}>
              <AddCircleOutlineIcon />
            </IconButton>
          </h2>
        </div>
        {/* 
        <Button variant="outlined" onClick={handleClickOpen}>
          Ajouter
        </Button> */}
      </div>
      <ul>
        {
          formations.map(formation => (
            <Formation formation={formation} sendDataToParent={sendDataToParent} key={formation._id} />
          ))}

      </ul >
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter une nouvelle formation</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus margin="dense" id="anneeDebut" label="Année de début" type="number" fullWidth variant="outlined"
            value={anneeDebut} onChange={e => setanneeDebut(e.target.value)}
          />
          <TextField
            autoFocus margin="dense" id="anneFin" label="Année de fin" type="number" fullWidth variant="outlined"
            value={anneeFin} onChange={e => setanneeFin(e.target.value)}
          />
          <TextField
            autoFocus margin="dense" id="nomFormation" label="Nom de la formation" fullWidth variant="outlined"
            value={nomFormation} onChange={e => setnomFormation(e.target.value)}
          />
          <TextField
            autoFocus margin="dense" id="organisme" label="Organisme de la formation" fullWidth variant="outlined"
            value={organisme} onChange={e => setOrganisme(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div >

  )

}

export default ListFormations
