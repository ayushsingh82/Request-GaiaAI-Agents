import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { useReadContract } from 'wagmi'; // Make sure you import from the correct library
import { useAccount } from 'wagmi'

// The Card Component for displaying Bounties
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

  const {address} = useAccount()

  // Destructure data from useReadContract
  const { data, isLoading, isError } = useReadContract({
    address: '0x78217d908BD4deD90CE2aE0Bf986447BDFd21B76',
    functionName: 'getForm',
    args: [address],
    // ...wagmiContractConfig, 
  });


  // Loading and Error Handling
  if (isLoading) return <div className="text-white">Loading bounties...</div>;
  if (isError) return <div className="text-red-500">Error fetching bounties</div>;

  // Assuming data has properties for name, contact, aiAgent, and bountyPrize
  // const { name, contact, aiAgent, bountyPrize } = data || {};
  

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
