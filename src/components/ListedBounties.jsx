
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { useReadContract } from 'wagmi'; // Make sure you import from the correct library
import { useAccount } from 'wagmi'
import { wagmiAbi } from '../abi';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrumGoerli, baseSepolia, optimismGoerli, polygonMumbai, sepolia } from 'viem/chains';
import { readContract } from '@wagmi/core';
import { publicClient } from '../config';
import { colgroup } from 'framer-motion/client';

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

  const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'e7fa7d19fd057ecd9403a0e89bd62b8b',
    chains: [baseSepolia],
    ssr: false
  });

  // Destructure data from useReadContract
  // const data = await publicClient.readContract({address: "0xB7CdDE1b9064885D32411A87b06318Bbba5b5aFA", abi: wagmiAbi, functionName: "getForm", args: [address]});

  // console.log(data)

  const [data, setData] = useState();

  useEffect(()=>{
    const getData = async()=>{
      const contractData = await publicClient.readContract({address: "0xB7CdDE1b9064885D32411A87b06318Bbba5b5aFA", abi: wagmiAbi, functionName: "getForm", args: [address]});
      console.log(contractData)
      setData(contractData);
    }
    if(!data){
      getData()
    }
  },[data])



  // Loading and Error Handling
  // if (isLoading) return <div className="text-white">Loading bounties...</div>;
  // if (isError) return <div className="text-red-500">Error fetching bounties</div>;

  // Assuming data has properties for name, contact, aiAgent, and bountyPrize
  // const { name, contact, aiAgent, bountyPrize } = data || {};
  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {data && 
        <CardComp name={data[0]} contact={data[1]} aiAgent={data[2]} bountyPrize={Number(data[3])}/>
      }
    </div>
  );
};

export default ListedBounties;

// import React from 'react';
// import { Card, CardHeader, CardBody } from "@nextui-org/card";

// // The Card Component for displaying Bounties
// function CardComp({ name, contact, aiAgent, bountyPrize }) {
//   return (
//     <Card className="py-4 bg-gray-800 text-white border-2 border-purple-500">
//       <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//         <p className="text-tiny uppercase font-bold text-purple-400">Name: {name}</p>
//         <p className="text-tiny uppercase font-bold text-purple-400 mt-[10px]">Contact: {contact}</p>
//         <h4 className="font-semibold text-lg">AI Agent Needed: {aiAgent}</h4>
//         <h4 className="font-semibold text-lg">Bounty Prize: {bountyPrize}</h4>
//       </CardHeader>
//       <CardBody className="overflow-visible py-2"></CardBody>
//     </Card>
//   );
// }

// const ListedBounties = () => {
//   // Hardcoded data for 2 bounties
//   const bounties = [
//     {
//       name: "John",
//       contact: "john@example.com",
//       aiAgent: "NLP Chatbot for Customer Service",
//       bountyPrize: "$200"
//     },
//     {
//       name: "Joe",
//       contact: "joe@example.com",
//       aiAgent: "Computer Vision Model for Image Classification",
//       bountyPrize: "$200"
//     },
//     {
//       name: "Auro",
//       contact: "auro@example.com",
//       aiAgent: "AI Model for Predictive Analytics",
//       bountyPrize: "$250"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center justify-center">
//       <h1 className="text-white text-2xl font-semibold mb-10 text-center">
//         Make AI agents and earn from listed bounties
//       </h1>
//       <div className="flex space-x-4">
//         {bounties.map((bounty, index) => (
//           <CardComp
//             key={index}
//             name={bounty.name}
//             contact={bounty.contact}
//             aiAgent={bounty.aiAgent}
//             bountyPrize={bounty.bountyPrize}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListedBounties;


 

