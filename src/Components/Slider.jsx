import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import Card from "./Card";

export default function Slider() {
  const [heroes, setHeroes] = useState([]);
  const[curser, setCurser] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/heroes")
      .then((response) => response.json())
      .then((heroes) => setHeroes(heroes));
  }, []);

  function handelNext() {
    const current = curser + 1 < heroes.length ? curser + 1 : 0;
    setCurser(current)
  }

  function handelprev() {
    const current = curser - 1 < 0 ? heroes.length - 1 : curser - 1;
    setCurser(current)
  }

  return (
    <div className="slide-container">
      <div className="wrapper">
        {!heroes.length ? (
          <div>Loading...</div>
        ) : (
          <>
            <Arrow direction="prev" handelClick={handelprev} />
            <Card hero={heroes[curser]} />
            <Arrow direction="next" handelClick={handelNext} />
          </>
        )}
      </div>
    </div>
  );
}
