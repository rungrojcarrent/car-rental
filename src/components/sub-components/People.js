import React from 'react'
import Patteera from '../../images/team/1.png'
import Peerada from '../../images/team/2.png'
import Saranporn from '../../images/team/3.png'
import Sombod from '../../images/team/4.png'
import Aroonrat from '../../images/team/5.png'
import Jirapron from '../../images/team/6.png'

export default function People() {

  const teamList = [
    {
      name: "Patteera Sunatrai",
      title: "CEO",
      id: 1,
      image: Patteera,
    },
    {
      name: "Peerada Nunsombut",
      title: "GM",
      id: 2,
      image: Peerada,
    },
    {
      name: "Saranporn Krutkul",
      title: "Personnel manager",
      id: 3,
      image: Saranporn,
    },
    {
      name: "Sombod Sunatrai",
      title: "Customer",
      id: 4,
      image: Sombod,
    },
    {
      name: "Aroonrat Thongpo",
      title: "Maintenance department",
      id: 5,
      image: Aroonrat,
    },
    {
      name: "Jirapron Choovichot",
      title: "Marketing manager",
      id: 6,
      image: Jirapron,
    },
  ]

  return (
    <section className='people-grid-section'>
      <div className='people-grid-section__container'>

        {teamList.map(person => {
          return (
            <div className='people-card' key={person.id}>
              <div className='image-container'>
                <img src={person.image} alt={person.name} />
              </div>

              <div className='person-detail'>
                <h3>{person.name}</h3>
                <span>{person.title}</span>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}
