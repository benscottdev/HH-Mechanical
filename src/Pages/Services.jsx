import NavBar from "../Components/NavBar";
import services from "../services.json";
import HomePageImage from "../Assets/HomePageImage.jpg";
import NavToggleButton from "../Components/NavToggleButton";

function Services({ handleActive, active }) {
  return (
    <div className="servicesPage">
      <NavToggleButton handleActive={handleActive} />
      <NavBar handleActive={handleActive} active={active} />
      {services.map((service, index) => {
        return (
          <div className="servicesItem" key={index}>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <img src={HomePageImage} alt={`Image of ${services.title}`} />
          </div>
        );
      })}
    </div>
  );
}
export default Services;
