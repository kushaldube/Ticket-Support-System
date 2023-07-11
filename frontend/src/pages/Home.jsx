import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import Intro from "../components/Intro"

function Home() {
  return (
    <>
    <Intro />
    <Hero />
      <section className="heading">
        <h1>VIT Bhopal Support Ticket System</h1>
        <p><em>Have a problem with factilities at VIT Bhopal? Create a support ticket now!</em></p>
      </section>
      <div className="home--buttons">
        <Link to="/new-ticket" className="btn-nt">
            Raise new ticket
        </Link>

        <Link to="/tickets" className="btn-nt">
          View all tickets
        </Link>
      </div>


    </>
  )
}

export default Home
