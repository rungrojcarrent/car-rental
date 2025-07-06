import React, { createContext, useState } from 'react'
// ...existing code...


export const FleetArray = createContext();

export default function FleetContext({children}) {

  const [cars, setCars] = useState([
    {
      name: "Honda City Turbo",
      model: "City Turbo",
      mark: "Honda",
      year: 2022,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 1000,
      id: 1,
      image: require('../images/cars-big/HondaCityTurbo-5.png'),
      image2: require('../images/cars-big/HondaCityTurbo-5.png')
    },
    {
      name: "Toyota New Yaris Sport",
      model: "New Yaris Sport",
      mark: "Toyota",
      year: 2022,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 800,
      id: 2,
      image: require('../images/cars-big/NewYarisSport-5.png'),
      image2: require('../images/cars-big/NewYarisSport-5.png')
    },
    {
      name: "Toyota New Yaris Ativ",
      model: "New Yaris Ativ",
      mark: "Toyota",
      year: 2022,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 1000,
      id: 3,
      image: require('../images/cars-big/NewYarisAtiv-5.png'),
      image2: require('../images/cars-big/NewYarisAtiv-5.png')
    },
    {
      name: "Nissan Almera Sportech",
      model: "Almera Sportech",
      mark: "Nissan",
      year: 2022,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 800,
      id: 4,
      image: require('../images/cars-big/NissanAlmeraSportech-5.png'),
      image2: require('../images/cars-big/NissanAlmeraSportech-5.png')
    },
    {
      name: "Suzuki Ciaz",
      model: "Ciaz",
      mark: "Suzuki",
      year: 2022,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 800,
      id: 5,
      image: require('../images/cars-big/SuzukiCiaz-5.png'),
      image2: require('../images/cars-big/SuzukiCiaz-5.png')
    },
    {
      name: "Ford Ranger Raptor",
      model: "Ranger Raptor",
      mark: "Ford",
      year: 2022,
      transmission: "Automatic",
      fuel: "Diesel",
      price: 2500,
      id: 6,
      image: require('../images/cars-big/FordRangerRaptor-2.png'),
      image2: require('../images/cars-big/FordRangerRaptor-2.png')
    },
    {
      name: "Toyota Vigo Champ",
      model: "Vigo Champ",
      mark: "Toyota",
      year: 2022,
      transmission: "Manual",
      fuel: "Diesel",
      price: 2000,
      id: 7,
      image: require('../images/cars-big/ToyotaVigoChamp-2.png'),
      image2: require('../images/cars-big/ToyotaVigoChamp-2.png')
    },
    {
      name: "Toyota Veloz",
      model: "Veloz",
      mark: "Toyota",
      year: 2022,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 1800,
      id: 8,
      image: require('../images/cars-big/ToyotaVeloz-2.png'),
      image2: require('../images/cars-big/ToyotaVeloz-2.png')
    },
    {
      name: "Mitsubishi Pajero Sport Elite Edition",
      model: "Pajero Sport Elite Edition",
      mark: "Mitsubishi",
      year: 2022,
      transmission: "Automatic",
      fuel: "Diesel",
      price: 2200,
      id: 9,
      image: require('../images/cars-big/PajeroSportEliteEdition-2.png'),
      image2: require('../images/cars-big/PajeroSportEliteEdition-2.png')
    },
    {
      name: "Mitsubishi Cross",
      model: "Cross",
      mark: "Mitsubishi",
      year: 2022,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 1800,
      id: 10,
      image: require('../images/cars-big/MitsubishiCross-5.png'),
      image2: require('../images/cars-big/MitsubishiCross-5.png')
    },
    {
      name: "Mitsubishi Xpander",
      model: "Xpander",
      mark: "Mitsubishi",
      year: 2018,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 1800,
      id: 11,
      image: require('../images/cars-big/MitsubishiXpander-5.png'),
      image2: require('../images/cars-big/MitsubishiXpander-5.png')
    },
    {
      name: "Isuzu MU-X",
      model: "MU-X",
      mark: "Isuzu",
      year: 2022,
      transmission: "Automatic",
      fuel: "Diesel",
      price: 1990,
      id: 12,
      image: require('../images/cars-big/IsuzuMUX-1.png'),
      image2: require('../images/cars-big/IsuzuMUX-1.png')
    },
  ])

  const [ rentalLocations, setRentalLocations ] = useState(
    [
      { location: 'สำนักงานใหญ่ รถเช่าอุดรธานีรุ่งโรจน์คาร์เร้นท์', id: 1 },
      { location: 'สาขาสนามบิน รถเช่าอุดรธานีรุ่งโรจน์คาร์เร้น', id: 2 },
      { location: 'อื่นๆ', id: 3 },
    ]
  )

  return (
    <FleetArray.Provider value={{cars, setCars, rentalLocations, setRentalLocations}}>
      {children}
    </FleetArray.Provider>
  )
}
