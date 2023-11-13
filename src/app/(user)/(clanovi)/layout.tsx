import { IComponentWithChildren } from "@/types/types";

const RootLayout = ({ children }: IComponentWithChildren) => {
  return (
    <div className=" mt-[100px] lg:mt-[150px] mb-[60px]  "> {children}</div>
  );
};

export default RootLayout;
