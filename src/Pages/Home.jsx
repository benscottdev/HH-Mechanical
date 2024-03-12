import NavBar from "../Components/NavBar";
import homePageImage from "../Assets/HomePageImage.jpg";
import NavToggleButton from "../Components/NavToggleButton";

function Home({ handleActive, active }) {
  return (
    <div className="homePage">
      <NavToggleButton handleActive={handleActive} />
      <NavBar active={active} handleActive={handleActive} />

      <h1>About HH Mechanical</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero porro
        nisi corporis quas! Odit fuga nemo libero quidem. Voluptates autem ea,
        velit quia eveniet in quasi molestias iure suscipit minima. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. <br />
        <br /> Neque quibusdam velit veniam earum obcaecati ipsam, ratione quis.
        Dolore perferendis, corrupti autem iure, quaerat cumque odio, voluptatum
        odit officia facere aspernatur!
      </p>
      <img id="homePageImage" src={homePageImage} alt="Mechanic working" />
    </div>
  );
}
export default Home;
