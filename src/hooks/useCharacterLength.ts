import { useCallback } from "react";

const useCharacterLength = (amount: number) => {
  const total = useCallback(
    (value: string) => {
      return amount - value.length;
    },
    [amount],
  );

  return total;
};

export default useCharacterLength;
