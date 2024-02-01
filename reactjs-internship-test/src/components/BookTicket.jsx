import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function BookTicket() {
  const navigate = useNavigate();
  var movName = localStorage.getItem("movie-name");
  const dt = useRef(null);
  const time = useRef(null);
  const nOfTickets = useRef(null);
  const emailAdd = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user-movie-details", [
      movName,
      dt.current.value,
      time.current.value,
      nOfTickets.current.value,
      emailAdd.current.value,
    ]);
    alert(
      "Booking Confirmation Congratulations!\n\nYou have successfully booked tickets"
    );
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center py-4 bg-body-secondary">
      <div className="shadow-lg m-5 p-5">
        <form onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 fw-normal fw-bold"
            style={{
              border: "0.5px solid black",
              padding: "13px",
              borderRadius: "10px",
            }}
          >
            Book Your Movie Ticket
          </h1>
          <div className="my-2">
            <label htmlFor="movieName" className="fw-semibold">
              Movie Name
            </label>
            <input
              type="text"
              className="form-control bg-white"
              placeholder={movName !== "undefined" ? movName : "XYZ"}
              disabled
            />
          </div>
          <div className="my-2">
            <label htmlFor="date" className="fw-semibold">
              Select your Date
            </label>
            <input className="form-control" ref={dt} type="date" required />
          </div>
          <div className="my-2">
            <label htmlFor="time" className="fw-semibold">
              Select your Time Slot
            </label>
            <select className="form-select" ref={time} required>
              <option value="10:00 AM">10:00 AM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
              <option value="11:00 PM">11:00 PM</option>
            </select>
          </div>
          <div className="my-2">
            <label htmlFor="noOfTickets" className="fw-semibold">
              Select Number of Tickets
            </label>
            <input
              className="form-control"
              ref={nOfTickets}
              type="number"
              placeholder="0"
              required
            />
          </div>
          <div className="my-2">
            <label htmlFor="email" className="fw-semibold">
              Email Address
            </label>
            <input
              className="form-control"
              ref={emailAdd}
              type="email"
              placeholder="xyz@gmail.com"
              required
            />
          </div>
          <button
            className="btn btn-primary w-100 py-2 fs-5 rounded-5"
            type="submit"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookTicket;
