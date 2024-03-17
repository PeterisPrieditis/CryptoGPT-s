import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  useEnsAvatar,
  useEnsAddress,
  useReadContract,
} from 'wagmi';

export const Name = () => {
  const { data: ensName } = useEnsAddress({
    address: 'luc.eth', // The name to lookup
    chainId: 1, // The chainId to lookup on
  });

  console.log(ensName);

  return (
    <>
      <h1>herro</h1>
    </>
  );

  // return <div>{ensName || address}</div>;
};

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div>
        <Name />
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  );
}

export default App;
