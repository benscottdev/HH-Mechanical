import NavBar from "../Components/NavBar";
import homePageImage from "../Assets/HomePageImage.jpg";
import NavToggleButton from "../Components/NavToggleButton";
import { motion } from "framer-motion";

function Home({ handleActive, active }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="homePage"
    >
      <NavToggleButton handleActive={handleActive} />
      <NavBar active={active} handleActive={handleActive} />

      <h1>About HH Mechanical</h1>
      <p>
        HH Mechanical is your trusted choice for mobile mechanical services in
        Adelaide. As a sole trader, we take pride in offering professional and
        reliable automotive solutions right to your doorstep. With years of
        experience and expertise in the field, we specialize in diagnosing,
        repairing, and maintaining a wide range of vehicles, ensuring optimal
        performance and safety on the road. Our commitment to customer
        satisfaction drives us to deliver top-notch service with transparency
        and integrity.
        <br />
        <br />
        Whether it's routine maintenance, complex repairs, or emergency
        assistance, you can count on HH Mechanical to keep you moving smoothly.
        Experience convenience and quality with our mobile mechanic services,
        tailored to meet your automotive needs.
      </p>
      <img id="homePageImage" src={homePageImage} alt="Mechanic working" />
    </motion.div>
  );
}
export default Home;
