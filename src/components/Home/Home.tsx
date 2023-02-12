import { Link } from 'wouter'



const Home = () => {
  return (
    <div className="home-container">
        <h1 className="home-title">Bienvenide</h1>
        <h2 className="home-subtitle">App para hacer ejercicios</h2>
        <Link href="/main"><button className="home-button-start">Empezar</button></Link>
    </div>
  )
}

export default Home