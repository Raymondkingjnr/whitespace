import React from "react";
import Slider from "react-slick";

export default function Sliders() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          bottom: 0,
          left: 10,
          zIndex: 1,
        }}
        onClick={onClick}
      >
        Previous
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          bottom: 0,

          right: 10,
          zIndex: 1,
        }}
        onClick={onClick}
      >
        Next
      </div>
    );
  }

  return (
    <div
      style={{
        background: "green",
        maxWidth: "1000px",
        margin: "auto",
        position: "relative",
      }}
    >
      {/* <h2>FocusOnSelect</h2>
      <div>Click on any slide to select and make it the current slide</div> */}
      <Slider {...settings}></Slider>
    </div>
  );
}
