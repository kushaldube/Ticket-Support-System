import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa"

function Home() {
  return (
    <>
      <section className="heading">
        <h1>VIT Hostel Support Ticket System</h1>
        <p><em>Have a problem with factilities at VIT Bhopal? Create a support ticket now!</em></p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create New Ticket
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> View My Tickets
      </Link>
    </>
  )
}

export default Home
