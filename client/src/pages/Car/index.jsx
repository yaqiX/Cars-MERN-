import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Car = () => {
  const [car, setCar] = useState([]);


  useEffect(()=>{
    axios({
        method: "GET",
        url: "/server/car",
    }).then((res)=>{
        console.log(res.data);
        setCar(res.data)
    })

},[])
  return (
    <div>Show all car:
      {car.map((car) => 
        <div key={JSON.stringify(car)}>
            <div>{car.brand}</div>
            <div>{car.color}</div>
            <div>{car.year}</div>
            <div>{car.cleanEnergy}</div>
        </div>
      )}
       </div>
  )
}

export default Car;