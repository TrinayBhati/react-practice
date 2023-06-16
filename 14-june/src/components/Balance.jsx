import { Title } from "@mantine/core";
import { useSelector } from "react-redux";

const Balance = () => {
  const state = useSelector((storeState) => {
    return storeState;
  });
  return (
    <div>
      <Title order={1}>Balance : Rs {state}</Title>
    </div>
  );
};

export default Balance;
