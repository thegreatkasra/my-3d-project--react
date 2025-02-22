import React from 'react'
import Header from '../Header/Header'
import ThreeModel from '../ThreeModel/ThreeModel'
import './Home.css'

const Home = () => {
  return (
    <section className='home' id="home" style={{ height: '100vh' }}>

      <div>
      <div className="home--header">
        <Header />
      </div>

      <div className='home--3dframe'>
        <ThreeModel />
      </div>

      <div className="home--text">
        <div className="home--text-slogan">
          <p>Fresh</p>
          <p>modern</p>
          <p>Quility</p>
        </div>
        <div className="home--text-posation">
          <h1>Ui Designer Ux Researcher</h1>
        </div>
      </div>
      </div>

    </section>
  )
}

export default Home
