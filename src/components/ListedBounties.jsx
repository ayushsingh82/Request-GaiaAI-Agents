import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardHeader, CardBody } from "@nextui-org/card";

function CardComp({ name, contact, aiAgent, bountyPrize }) {
  return (
    <Card className="py-4 bg-gray-800 text-white border-2 border-purple-500">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-purple-400">Name: {name}</p>
        <p className="text-tiny uppercase font-bold text-purple-400 mt-[10px]">Contact: {contact}</p>
        <h4 className="font-semibold text-lg">AI Agent Needed: {aiAgent}</h4>
        <h4 className="font-semibold text-lg">Bounty Prize: {bountyPrize}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2"></CardBody>
    </Card>
  );
}

const ListedBounties = () => {
  const location = useLocation();
  const { name, contact, aiAgent, bountyPrize } = location.state || {};  // Extract form data from location state

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex space-x-4">
        {name && contact && aiAgent && bountyPrize ? (
          <CardComp name={name} contact={contact} aiAgent={aiAgent} bountyPrize={bountyPrize} />
        ) : (
          <p className="text-white">No bounties listed yet.</p>
        )}
      </div>
    </div>
  );
};

export default ListedBounties;
