import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";

function CardComp() {
  return (
    <Card className="py-4 bg-gray-800 text-white">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-purple-400">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}

const ListedBounties = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex space-x-4">
        <CardComp />
        <CardComp />
      </div>
    </div>
  );
}

export default ListedBounties;
