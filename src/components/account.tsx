import { useAccount, useDisconnect,  useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })


  return (
    <div className="flex flex-col items-center">
      <div className="text-gray-700">Connected Account:</div>
      <div className="text-black ">
      {address && <div>{ensName ? `${ensName}` : ensName}</div>}
      <button className='className="bg-red-500 text-black py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300' onClick={() => disconnect()}>Disconnect</button>
    </div>
    </div>
  )
}