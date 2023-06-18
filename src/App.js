import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./components/Home";
import { LiquidityProvider } from "./context/Context";
import React, { useState, useEffect } from "react";
import { useChain, useAddress, useChainId, useTokenBalance, useUser, useWallet } from "@thirdweb-dev/react";
import { DotLoader } from "react-spinners";


import Navbar from "./components/Navbar";






export default function App() {


  let [correctChain, setCorrectChain] = useState(false);

  let [isLoading, setIsLoading] = useState(true);

  // thirdweb method to get current connected wallet 
  const wallet = useAddress();


  // method to get current chain
  // arbitrum goerli ID 421613
  const activeChain = useChain()




  let offLoad = () => {

    setIsLoading(false)

  }


  useEffect(() => {

    setTimeout(() => {
      offLoad()
    }, 3000)




  }, [])



  useEffect(() => {

    if (window.ethereum.chainId === "0x66eed") {
      setCorrectChain(true)
    } else {
      setCorrectChain(false)
    }

  }, [wallet, activeChain, window.ethereum.chainId])


  return (
    <BrowserRouter>
      <LiquidityProvider>
        <Navbar wallet={wallet} activeChain={activeChain} />
        <Routes>
          <Route path="/" element={<Home correctChain={correctChain} wallet={wallet} />} />


        </Routes>
      </LiquidityProvider>
    </BrowserRouter>
  );
}



