import React, { useContext, useState } from 'react'
import { FleetArray } from '../../context/FleetContext'
import { CarPick } from '../../context/SelectedCarContext';
import NewYarisSportImg from '../../images/cars-big/NewYarisSport-5.png';

export default function Fleet() {

  const { cars } = useContext(FleetArray);
  const { setCarPicked } = useContext(CarPick);

  const [ currentCar, setCurrentCar ] = useState(cars[0]);
  const [ selectedCar, setSelectedCar ] = useState(cars[0].name);

  function setCar(e) {
    setCurrentCar(cars.filter(car => car.name === e.target.value)[0])
    setSelectedCar(e.target.value)
  }

  function chosenCar() {
    setCarPicked(selectedCar);
  }

  return (
    <section className='fleet-section'>
      <div className='fleet-section__container'>
        <div className='fleet-heading-container'>
          <h3>รุ่นรถ</h3>
          <h2>รถเช่าของเรา</h2>
          <p>เลือกจากรถที่น่าทึ่งหลากหลายรุ่นของเราเพื่อการผจญภัยหรือการเดินทางธุรกิจครั้งต่อไปของคุณ</p>
        </div>
        <div className='image-container' style={{margin: '2rem auto', maxWidth: 350, width: '100%'}}>
          <img src={NewYarisSportImg} alt="New Yaris Sport" style={{width: '100%', maxWidth: 350, height: 'auto', borderRadius: '1rem', display: 'block', margin: '0 auto'}} />
        </div>
      </div>
    </section>
  )
}
