import Auth from "./components/auth";
import Banking from "./components/Banking";
import Balance from "./components/balance";
import AccountStatus from "./components/AccountStatus";

function App() {
  return (
    <>
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </>
  );
}

export default App;
