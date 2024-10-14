import React from "react";

type Props = {
  value: number;
};

const toMoney = (value: number) =>
  value.toLocaleString(undefined, {
    style: "currency",
    currency: "ETH",
    // currencySign: "Ξ",
  });

export const MoneyFormat: React.FC<Props> = ({ value }) => {
  return <>{toMoney(value)}</>;
};