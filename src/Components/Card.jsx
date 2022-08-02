import React from "react";
import Buy from "./Buy";
import CardImage from "./CardImage";
import CardItem from "./CardItem";
import UnitsStates from "./UnitsStates";

export default function Card({hero}) {
  return (
    <div className="clash-card barbarian">
      <CardImage src={hero.img} name={hero.name}/>
      <CardItem type="clash-card__level clash-card__level--barbarian">
        {hero.level}
      </CardItem>
      <CardItem type="clash-card__unit-name">The {hero.name}</CardItem>
      <CardItem type="clash-card__unit-description">
        {hero.description}
      </CardItem>
      <Buy name={hero.name}/>
      <UnitsStates units={hero.units} name={hero.name}/>
    </div>
  );
}
