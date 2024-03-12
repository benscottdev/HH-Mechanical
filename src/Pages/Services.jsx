import NavBar from "../Components/NavBar";
import NavToggleButton from "../Components/NavToggleButton";
import { motion } from "framer-motion";
import serviceImg from "../Assets/Service.jpeg";
import suspensionImg from "../Assets/Suspension.jpeg";
import upgradesImg from "../Assets/Upgrades.jpeg";

function Services({ handleActive, active }) {
  const services = [
    {
      title: "General Servicing",
      description:
        "At HH Mechanical, we pride ourselves on delivering comprehensive and meticulous general servicing for all types of vehicles. Our dedication to maintaining the health and longevity of your car is evident in every aspect of our work. When you bring your vehicle to us for servicing, you can expect a thorough inspection of all essential components, including engine fluids, brakes, belts, and more. We believe in proactive maintenance to catch potential issues before they escalate, ensuring your safety and peace of mind on the road. With our attention to detail and commitment to quality, you can trust HH Mechanical to keep your vehicle running smoothly mile after mile.",
      image: serviceImg,
    },
    {
      title: "Suspension",
      description:
        "At HH Mechanical, we understand the crucial role that a well-functioning suspension system plays in your vehicle's performance and ride comfort. Whether you're experiencing bumpy rides, unusual noises, or uneven tire wear, our expert technicians have the knowledge and expertise to diagnose and address suspension issues effectively. From inspecting shocks and struts to replacing worn-out components, we prioritize precision and accuracy in every suspension repair or maintenance task. With HH Mechanical, you can rest assured that your vehicle's suspension will be restored to optimal condition, providing you with a smooth and safe driving experience on Adelaide's roads.",
      image: suspensionImg,
    },
    {
      title: "Upgrades",
      description:
        "At HH Mechanical, we're passionate about helping our clients enhance the performance, appearance, and functionality of their vehicles through our range of upgrade services. Whether you're looking to boost horsepower, improve handling, or customize your ride to reflect your unique style, we've got you covered. From installing performance exhaust systems and cold air intakes to upgrading suspension components and brake systems, our skilled technicians have the expertise to handle all types of upgrades with precision and care. We take the time to understand your goals and preferences, offering tailored solutions that meet your needs and exceed your expectations. Trust HH Mechanical to take your vehicle to the next level with our professional upgrade services.",
      image: upgradesImg,
    },
  ];

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
            <img src={service.image} alt={`${services.title}`} />
          </div>
        );
      })}
    </motion.div>
  );
}
export default Services;
