import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-theme-material.css';
import 'ag-grid-community/styles/ag-grid.css';
import Button from '@mui/material/Button';
import Addcar from './Addcar';
import Editcar from './Editcar';

function Carlist() {
  const [cars, setCars] = useState([]);
  
  
  const fetchData = () => {
    fetch('https://carrestapi.herokuapp.com/cars')
    .then(response => response.json())
    .then(data => setCars(data._embedded.cars))
    .catch(err => console.error(err))
  }

  const deleteCar = (url) => {
    if (!window.confirm('Are you sure you want to delete?')) return;
    const options = {
      method: 'delete'
    };  
      fetch(url, options)
      .then(resp => fetchData())
      .catch(err => console.error(err));
    }

    const saveCar = car => {
      const options = {
        method: 'post', headers: {
          'Content-Type': 'application/json'},
          body: JSON.stringify(car)
    };
    fetch('https://carrestapi.herokuapp.com/cars', options)
    .then(resp => fetchData())
    .catch(err => console.error(err));
  }

  const updateCar = (url, car) => {
    const options = {
      method: 'put', headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify(car)
  };
  fetch(url, options)
  .then(resp => fetchData())
  .catch(err => console.error(err));
}

    const columnDefs = [
      { field: "brand"},
      { field: "model"},
      { field: "color"},
      { field: "fuel"},
      { field: "year"},
      { field: "price"},
      { field: "_links.self.href",
      headerName: "",
      sortable: false,
      filter: false,
      floatingFilter: false,
      cellRenderer: params => {
        return (
          <Button onClick= {() => deleteCar(params.value)}>Delete</Button>
                  )
      }},
      { field: "_links.self.href",
      headerName: "",
      sortable: false,
      filter: false,
      floatingFilter: false,
      cellRenderer: params => {
        return (
          <Editcar car={params.data} updateCar={updateCar} />
                  )
      }}
    ];

  useEffect(fetchData, []);


  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true
  };

  return(
      <div className="ag-theme-material"
      style={{height: '700px', width: '95%', margin: 'auto' }}>
        <Addcar saveCar={saveCar}/>
        <AgGridReact
        rowData={cars}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef} />
        </div>
  );
}

export default Carlist;