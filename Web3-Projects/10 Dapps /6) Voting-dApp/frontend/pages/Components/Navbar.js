import React from "react";
import Head from "next/head";
import { CgSun } from "react-icons/cg";
import { BsMoon } from "react-icons/bs";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = (props) => {
  const { toggleDarkMode, darkMode } = props;

  return (
    <main className=" w-full">
      <Head>
        <title>Voting dApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@400;500;700&family=Roboto:wght@300;900&display=swap');
        </style>
      </Head>
      <nav
        className={`py-4  ${
          darkMode
            ? `bg-orange-400`
            : `bg-[#1d2132] shadow-lg`
        } `}
      >
        <div className=" px-16 flex items-center justify-between text-[#fff] text-xl md:text-2xl">
          {darkMode ? (
            <BsMoon
              className="cursor-pointer"
              onClick={toggleDarkMode}
            />
          ) : (
            <CgSun
              className="cursor-pointer"
              onClick={toggleDarkMode}
            />
          )}
          <h3 className="font-bold text-3xl text-center">Decentralized Voting App</h3>
          <ConnectButton
            showBalance={false}
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
          />
        </div>
      </nav>
    </main>
  );
};
export default Navbar;