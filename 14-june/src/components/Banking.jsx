import { Button, Input, Flex } from "@mantine/core";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const createDeposit = (amount) => {
  return {
    type: "DEPOSIT",
    amount: Number(amount),
  };
};
const createWithdraw = (amount) => {
  return {
    type: "WITHDRAW",
    amount: Number(amount),
  };
};
const deleteAccount = (amount) => {
  return {
    type: "DELETE_ACOUNT",
  };
};
const collectInterest = (amount) => {
  return {
    type: "COLLECT_INTEREST",
  };
};

const Banking = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleDeposit = () => {
    dispatch(createDeposit(inputRef.current.value));
  };
  const handleWithdraw = () => {
    dispatch(createWithdraw(inputRef.current.value));
  };
  const handleDeleteAccount = () => {
    dispatch(deleteAccount(inputRef.current.value));
  };
  const handleCollectInterest = () => {
    dispatch(collectInterest(inputRef.current.value));
  };

  return (
    <div>
      <div>
        <Input ref={inputRef} style={{ maxWidth: "50%" }} />
      </div>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
        style={{ marginTop: "2rem" }}
      >
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          onClick={handleDeposit}
        >
          Deposit
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          onClick={handleWithdraw}
        >
          Withdraw
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
          onClick={handleDeleteAccount}
        >
          Delete Account
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          onClick={handleCollectInterest}
        >
          Collect Interest
        </Button>
      </Flex>
    </div>
  );
};

export default Banking;
