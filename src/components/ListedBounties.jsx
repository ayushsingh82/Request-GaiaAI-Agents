/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { useReadContract } from 'wagmi'; // Make sure you import from the correct library
import { useAccount } from 'wagmi'
import { wagmiAbi } from '../abi';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrumGoerli, optimismGoerli, polygonMumbai, sepolia } from 'viem/chains';
import { readContract } from '@wagmi/core';

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

const ListedBounties = async () => {

  const {address} = useAccount()

  const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'e7fa7d19fd057ecd9403a0e89bd62b8b',
    chains: [sepolia, optimismGoerli, arbitrumGoerli, polygonMumbai],
    ssr: false
  });

  // Destructure data from useReadContract
  const data = await readContract(config,{
    abi: wagmiAbi,
    address: '0xE336a92632fA2529F1D2dC5856D0cE713d31e463',
    functionName: 'getForm',
    args: [address],
  });

  console.log(data.toString())




  // Loading and Error Handling
  // if (isLoading) return <div className="text-white">Loading bounties...</div>;
  // if (isError) return <div className="text-red-500">Error fetching bounties</div>;

  // Assuming data has properties for name, contact, aiAgent, and bountyPrize
  const { name, contact, aiAgent, bountyPrize } = data || {};
  

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
