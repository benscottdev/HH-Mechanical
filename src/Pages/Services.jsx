import NavBar from "../Components/NavBar";
import services from "../services.json";
import HomePageImage from "../Assets/HomePageImage.jpg";
import NavToggleButton from "../Components/NavToggleButton";
import { motion } from "framer-motion";

function Services({ handleActive, active }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="servicesPage"
    >
      <NavToggleButton handleActive={handleActive} />
      <NavBar handleActive={handleActive} active={active} />
      {services.map((service, index) => {
        return (
          <div className="servicesItem" key={index}>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <img src={HomePageImage} alt={`${services.title}`} />
          </div>
        );
      })}
    </motion.div>
  );
}
export default Services;
