import { useState } from "react";
import './Review.css'
import { FaStar } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useAlert from "../../../Hooks/useAlert";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Review() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [message, setMessage] = useState("");
  const stars = Array(5).fill(0);
  const {user} = useAuth();
  const { reviewSent } = useAlert();
  // useEffect(() => {
  //   fetch('', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       rating: currentValue,
  //     }),

  //   })
  // }, [])

  
  const handleOnBlur = (e) => {
    setMessage(e.target.value);
    e.target.value = "";
  }

  const handleReviewSubmit = () => {
    const review = { message, rating: currentValue, user: user.displayName };
    
    fetch("https://obscure-peak-86560.herokuapp.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reviewSent();
        }
      });

  }



  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={styles.container}>
      <h2 className="text-success my-5"> Give Us Your Review </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <textarea
        onBlur={handleOnBlur}
        placeholder="What's your experience?"
        style={styles.textarea}
      />

      <button
        onClick={handleReviewSubmit}
        className="btn btn-success mb-5"
        style={styles.button}
      >
        Submit
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default Review;
