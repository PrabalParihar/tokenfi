"use client";
import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { ConnectWallet } from '@/components/ConnectWallet';
import { Account } from '../../components/account';

const Home = () => {
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after the component has mounted
    setMounted(true);
  }, []);

  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [customDecimals, setCustomDecimals] = useState(false);
  const [decimals, setDecimals] = useState(18);
  const [initialSupply, setInitialSupply] = useState('');
  const [maxSupply, setMaxSupply] = useState('');
  const [burnable, setBurnable] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      tokenName,
      tokenSymbol,
      customDecimals,
      decimals,
      initialSupply,
      maxSupply,
      burnable,
    });
  };

  // Prevent rendering until the component has mounted
  if (!mounted) return null;

  return (
    <div className='relative flex justify-center items-center h-screen bg-gray-50'>
    {isConnected && (
      <div className='absolute top-4 right-4'>
        <Account />
      </div>
    )}
    {!isConnected ? (
      <div className='text-black'>
        <ConnectWallet />
      </div>) : 
    
      
      (
        

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Token Information</h2>
          <div className="mb-4">
            <label htmlFor="tokenName" className="block text-gray-700 font-semibold mb-2">Token Name*</label>
            <input
              type="text"
              id="tokenName"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              placeholder="My awesome token"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tokenSymbol" className="block text-gray-700 font-semibold mb-2">Token Symbol*</label>
            <input
              type="text"
              id="tokenSymbol"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              placeholder="AWESOME"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center text-gray-700 font-semibold">
              <input
                type="checkbox"
                checked={customDecimals}
                onChange={() => setCustomDecimals(!customDecimals)}
                className="mr-2"
              />
              Custom Decimals
            </label>
            {customDecimals && (
              <input
                type="number"
                value={decimals}
                onChange={(e) => setDecimals(parseInt(e.target.value))}
                placeholder="18"
                className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="initialSupply" className="block text-gray-700 font-semibold mb-2">Initial supply*</label>
            <input
              type="number"
              id="initialSupply"
              value={initialSupply}
              onChange={(e) => setInitialSupply(e.target.value)}
              placeholder="1000000000"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="maxSupply" className="block text-gray-700 font-semibold mb-2">Max supply*</label>
            <input
              type="number"
              id="maxSupply"
              value={maxSupply}
              onChange={(e) => setMaxSupply(e.target.value)}
              placeholder="1000000000"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center text-gray-700 font-semibold">
              <input
                type="checkbox"
                checked={burnable}
                onChange={() => setBurnable(!burnable)}
                className="mr-2"
              />
              Burnable
            </label>
            <p className="text-gray-500 text-sm mt-1">The Token can be manually burned to reduce circulating supply</p>
          </div>

          <button type="submit" className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300">
            Create token
          </button>
        </form>
      )}
    </div>
  );
};

export default Home;