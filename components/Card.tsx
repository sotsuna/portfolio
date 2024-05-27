"use client";
import {CardProps} from "@/types/CardProps";

const Card = ({ title, description }:CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;