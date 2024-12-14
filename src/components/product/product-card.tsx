import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

const ProductCard = ({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>{price}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
