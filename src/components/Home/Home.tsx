import { Link } from 'wouter'
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Bienvenide</h1>
          <h2 className="home-subtitle">App para hacer ejercicios</h2>
          <Link href="/main"><button className="home-button-start">Empezar</button></Link>
        </div>
    </div>
  )
}

export default Home