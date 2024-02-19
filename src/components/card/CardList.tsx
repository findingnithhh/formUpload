import React from "react";
import { Card } from "./Card";
interface CardListProps {
  items: User[];
}
const CardList = ({ items }: CardListProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <Card
          name={item.username}
          key={item.id || index}
          image={item.profile}
        ></Card>
      ))}
    </div>
  );
};

export { CardList };
