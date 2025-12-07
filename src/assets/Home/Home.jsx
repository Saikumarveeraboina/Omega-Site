import Header from "../Header/Header";
import './Home.css'


const Home = () => {
  return (
    <div>
        <Header />
        <div className="home-container">
            <h1 className="home-title">Welcome to Nxt Trendz</h1>   
            <p className="home-subtitle">Your one-stop destination for the latest fashion trends!</p>
        </div>

    </div>
  )
}

export default Home