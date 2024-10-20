import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full md:w-2/4 m-5 p-4 bg-gray-100/10 rounded-lg border backdrop-blur-lg shadow-lg border-gray-100/50 text-slate-100">
      {children}
    </div>
  );
};

export default Layout;
