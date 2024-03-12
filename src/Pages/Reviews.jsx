import reviews from "../reviews.json";
import NavBar from "../Components/NavBar";
import NavToggleButton from "../Components/NavToggleButton";
import { motion } from "framer-motion";

function Reviews({ handleActive, active }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="reviewsPage"
    >
      <NavToggleButton handleActive={handleActive} />
      <NavBar handleActive={handleActive} active={active} />
      {reviews.map((review, index) => {
        return (
          <div className="reviewItem" key={index}>
            <h1>{review.title}</h1>
            <h3>{review.customer}</h3>
            <p>{review.description}</p>
          </div>
        );
      })}
    </motion.div>
  );
}
export default Reviews;
