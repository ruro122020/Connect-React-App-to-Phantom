function App() {
  const isPhantomInstalled = window.solana && window.solana.isPhantom;
  console.log("isphantominstalled", isPhantomInstalled);
  const checkPhantomInstallation = () => {
    console.log("checkphantom", isPhantomInstalled);
    if (isPhantomInstalled) {
      console.log("phantom installed");
      return true;
    } else {
      console.log("phantom not installed");
      return false;
    }
  };

  const installPhantom = () => {
    window.open("https://phantom.app/");
  };

  const connectToPhantomWallet = async () => {
    try {
      const resp = await window.solana.connect();
      const pubKey = resp.publicKey.toString();
      console.log("pubKey", pubKey);
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <div>
      {checkPhantomInstallation() ? (
        <button onClick={connectToPhantomWallet}>Connect Phantom</button>
      ) : (
        <button onClick={installPhantom}>install phantom</button>
      )}
    </div>
  );
}

export default App;
