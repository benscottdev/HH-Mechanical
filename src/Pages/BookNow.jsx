import NavBar from "../Components/NavBar";
import NavToggleButton from "../Components/NavToggleButton";

function BookNow({ handleActive, active }) {
  return (
    <div className="bookNow">
      <NavToggleButton handleActive={handleActive} />
      <NavBar handleActive={handleActive} active={active} />
      <h1>BOOK NOW</h1>
      <form className="bookNowForm">
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Phone" />
        <input type="text" placeholder="Email" />
        <textarea name="message" id="message" cols="35" rows="10"></textarea>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
export default BookNow;
