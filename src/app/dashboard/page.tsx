"use client";
import React, { useState, useEffect } from 'react';
import {
  useAccount,
  // useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
  type BaseError,
} from 'wagmi';
import { ConnectWallet } from '@/components/ConnectWallet';
import { Account } from '../../components/account';
// import abi from '../artifacts/EssentialToken_metadata.json';
import proxy from '../artifacts/MinimalProxy_metadata.json';
import { ethers } from 'ethers';

const Home = () => {
  const { isConnected, address } = useAccount();
  const [mounted, setMounted] = useState(false);

  // const abi1 = abi.output.abi;
  const abi2 = proxy.output.abi;

  // Addresses of your deployed contracts
  const minimalProxyAddress = '0xBD68774359b1bD7f066B825E451148FD8700446E'; // Replace with your Minimal Proxy contract address
  const tokenContractAddress = '0xE5883D231dA72f1B66C0c54903E19194609C4514'; // Replace with your Token contract address

  // Read the fee from the contract
  // const { data: fee } = useReadContract({
  //   address: minimalProxyAddress,
  //   abi: abi2,
  //   functionName: 'fee',
  // });

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
  const [pausable, setPausable] = useState(false);

  // Set up useWriteContract hook
  const {
    data: txHash,
    error,
    isPending,
    writeContract,
  } = useWriteContract();

  // Use useWaitForTransactionReceipt to wait for the transaction to be mined
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: txHash,
    });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const tokenNameInput = formData.get('tokenName') as string;
    const tokenSymbolInput = formData.get('tokenSymbol') as string;
    const decimalsToUse = customDecimals ? decimals : 18;
    const initialSupplyInput = formData.get('initialSupply') as string;
    const maxSupplyInput = formData.get('maxSupply') as string;

    const initialSupplyParsed = ethers.parseUnits(
      initialSupplyInput,
      decimalsToUse
    );
    const maxSupplyParsed = ethers.parseUnits(
      maxSupplyInput,
      decimalsToUse
    );

    // Fee amount
    // const feeAmount = fee ? fee.toString() : '0';

    writeContract({
      address: minimalProxyAddress,
      abi: abi2,
      functionName: 'cloneAndInitialize',
      args: [
        tokenContractAddress,
        address,
        tokenNameInput,
        tokenSymbolInput,
        decimalsToUse,
        initialSupplyParsed,
        maxSupplyParsed,
        burnable,
        pausable,
      ],
      value: BigInt(2),
     
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
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'
        >
          <h2 className='text-2xl font-bold mb-6 text-center text-gray-700'>
            Token Information
          </h2>
          <div className='mb-4'>
            <label
              htmlFor='tokenName'
              className='block text-gray-700 font-semibold mb-2'
            >
              Token Name*
            </label>
            <input
              type='text'
              id='tokenName'
              name='tokenName'
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              placeholder='My awesome token'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='tokenSymbol'
              className='block text-gray-700 font-semibold mb-2'
            >
              Token Symbol*
            </label>
            <input
              type='text'
              id='tokenSymbol'
              name='tokenSymbol'
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              placeholder='AWESOME'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='flex items-center text-gray-700 font-semibold'>
              <input
                type='checkbox'
                checked={customDecimals}
                onChange={() => setCustomDecimals(!customDecimals)}
                className='mr-2'
              />
              Custom Decimals
            </label>
            {customDecimals && (
              <input
                type='number'
                value={decimals}
                onChange={(e) => setDecimals(parseInt(e.target.value))}
                placeholder='18'
                className='w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            )}
          </div>

          <div className='mb-4'>
            <label
              htmlFor='initialSupply'
              className='block text-gray-700 font-semibold mb-2'
            >
              Initial supply*
            </label>
            <input
              type='number'
              id='initialSupply'
              name='initialSupply'
              value={initialSupply}
              onChange={(e) => setInitialSupply(e.target.value)}
              placeholder='1000000000'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='maxSupply'
              className='block text-gray-700 font-semibold mb-2'
            >
              Max supply*
            </label>
            <input
              type='number'
              id='maxSupply'
              name='maxSupply'
              value={maxSupply}
              onChange={(e) => setMaxSupply(e.target.value)}
              placeholder='1000000000'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='flex items-center text-gray-700 font-semibold'>
              <input
                type='checkbox'
                checked={burnable}
                onChange={() => setBurnable(!burnable)}
                className='mr-2'
              />
              Burnable
            </label>
            <p className='text-gray-500 text-sm mt-1'>
              The Token can be manually burned to reduce circulating supply
            </p>
          </div>

          <div className='mb-4'>
            <label className='flex items-center text-gray-700 font-semibold'>
              <input
                type='checkbox'
                checked={pausable}
                onChange={() => setPausable(!pausable)}
                className='mr-2'
              />
              Pausable
            </label>
            <p className='text-gray-500 text-sm mt-1'>
              The Token can be paused and unpaused
            </p>
          </div>

          <button
            type='submit'
            disabled={isPending}
            className='w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300'
          >
            {isPending ? 'Processing...' : 'Create token'}
          </button>

          {txHash && (
            <div className='mt-4 text-gray-700'>
              Transaction Hash:{' '}
              <a
                href={`https://sepolia.etherscan.io/tx/${txHash}`}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 underline'
              >
                {txHash}
              </a>
            </div>
          )}
          {isConfirming && (
            <div className='mt-2 text-gray-700'>Waiting for confirmation...</div>
          )}
          {isConfirmed && (
            <div className='mt-2 text-green-500'>Transaction confirmed.</div>
          )}
          {error && (
            <div className='mt-2 text-red-500'>
              Error: {(error as BaseError).shortMessage || error.message}
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default Home;