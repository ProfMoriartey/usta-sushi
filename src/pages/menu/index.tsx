import type { FC } from "react";
import Menu from "~/components/Menu";

const menu: FC = () => {
  return <Menu selectedTime={""} addToCart={function (id: string, quantity: number): void {
    throw new Error("Function not implemented.");
  } } />;
};

export default menu;
