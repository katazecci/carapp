import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Editcar(props) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({brand: '', model: '', color: '', year: '', fuel: '', price: ''});

  const handleClickOpen = () => {
    setCar(props.car);
    setOpen(true);
  }

  const handleSave = () => {
    props.updateCar(car._links.car.href, car);
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleChangedInput = event => {
    setCar({...car, [event.target.name]: event.target.value});
  }


  return(
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="brand"
            name="brand"
            value={car.brand}
            onChange={event => handleChangedInput(event)}
            label="Brand"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="model"
            name="model"
            value={car.model}
            onChange={event => handleChangedInput(event)}
            label="Model"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="color"
            name="color"
            value={car.color}
            onChange={event => handleChangedInput(event)}
            label="Color"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="fuel"
            name="fuel"
            value={car.fuel}
            onChange={event => handleChangedInput(event)}
            label="Fuel"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="year"
            name="year"
            value={car.year}
            onChange={event => handleChangedInput(event)}
            label="Year"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="price"
            name="price"
            value={car.price}
            onChange={event => handleChangedInput(event)}
            label="Price (€)"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>    
    </div>
  );
}

export default Editcar;