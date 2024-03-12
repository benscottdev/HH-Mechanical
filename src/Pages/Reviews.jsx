import reviews from "../reviews.json";
import NavBar from "../Components/NavBar";
import NavToggleButton from "../Components/NavToggleButton";

function Reviews({ handleActive, active }) {
  return (
    <div className="reviewsPage">
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
    </div>
  );
}
export default Reviews;
