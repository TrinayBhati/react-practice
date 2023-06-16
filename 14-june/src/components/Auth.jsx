import { Button } from "@mantine/core";

const Auth = () => {
  return (
    <div>
      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
      >
        LOG IN
      </Button>
    </div>
  );
};

export default Auth;
