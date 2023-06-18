import { ConnectWallet, useDisconnect } from "@thirdweb-dev/react"

import { useState, useEffect, useContext } from "react";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { ContextLiquidity } from "../context/Context";
import beraLogo from "../images/gary-token.png"


import dexscreener from "../images/dexscreener.webp"
import twitter from "../images/twitter.png"
import tiktok from "../images/tiktok.png"
import medium from "../images/medium.png"
import telegram from "../images/telegram.png"



export default function Navbar({ correctChain, setPage, isConnected, setIsConnected, wallet }) {


    let [abbreviate, setAbbreviate] = useState();


    const [open, setOpen] = useState(false);
    const [size, setSize] = useState('default');

    let [lp, setLp] = useContext(ContextLiquidity)





    let navigate = useNavigate();




    let goBuy = () => {


        window.open(`https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a`, '_blank')
        // navigate(`https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a`)


    }


    let goHome = () => {
        navigate("/")
    }





    const onClose = () => {

        setOpen(false);
    };



    const showDefaultDrawer = () => {
        setOpen(true);

    };





    // changing chains
    let handleChainChanged = () => {
        // console.log(`Chain changed to : ${window.ethereum.chainId}`);
    }

    window.ethereum.on("chainChanged", handleChainChanged)






    useEffect(() => {
        // console.log(wallet);
        // console.log(lp);

    }, [lp])



    return (
        <div className="flex flex-col ">
            <Marquee className="bg-[#051325] text-slate-100 text-xs md:text-md lg:text-xl" pauseOnHover={true} gradientWidth={50} speed={50} delay={1} gradient={false} gradientColor={[255, 255, 255]}>
                <p ><span className="text-green-300"></span>  PRESALE LAUNCH ON DD:MM AT 00:00</p>

                {/* <p className="ml-[5vh]">Collection market cap: <span className="text-green-300">$</span></p> */}
            </Marquee>
            {/* <Marquee className="bg-green-400 text-slate-900 text-xs md:text-md lg:text-xl" pauseOnHover={true} gradientWidth={50} speed={10} delay={1} gradient={false} gradientColor={[255, 255, 255]}>
                <p className="ml-[10vh]">YOU A WISE GUY!</p>
                <p className="ml-[10vh]">DON`T LET YOURSELF FOOLED!</p>
                {
                    lp && <p className="ml-[5vh]">Token address: {lp.baseToken.address}</p>
                }
                <p className="ml-[5vh]">BUY <span onClick={goBuy} className="text-white cursor-pointer">here</span> !</p>
            </Marquee> */}
            <div className=" w-full h-[100px] px-4 py-4 flex justify-start bg-amber-500 shadow-[5px_5px_rgba(251,_191,_36,_0.4),_10px_10px_rgba(251,_191,_36,_0.3),_15px_15px_rgba(251,_191,_36,_0.2),_20px_20px_rgba(251,_191,_36,_0.1),_25px_25px_rgba(251,_191,_36,_0.05)]">

                <div className=" flex justify-center relative items-center gap-2  mr-4 lg:min-w-[150px]">
                    <img className="w-20 rounded-full border-2 -border-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" src={beraLogo}></img>
                    <p className="text-white absolute text-md px-1 bottom-0 w-24 text-center rounded-sm bg-[#122e52] bg-opacity-60 sm:block">Bera Gary </p>
                </div>
                {/* 
                <div className="  justify-center items-center w-20 rounded-lg px-4 hidden md:flex    bg-black bg-opacity-80">
                    {
                        lp && <p className="text-lg text-white">${lp.priceUsd}</p>
                    }
                </div> */}





                <div className=" hidden w-full  px-12 mr-4  gap-4 lg:flex font-extrabold  ml-auto text-center justify-end items-center">

                    {/* <img src={dexscreener} className="w-12 rounded-md cursor-pointer"></img> */}
                    <img src={twitter} className="w-12 rounded-md bg-black p-2 cursor-pointer"></img>
                    <img src={telegram} className="w-12 rounded-md bg-white cursor-pointer"></img>
                    {/* <img src={tiktok} className="w-12 rounded-md cursor-pointer"></img> */}
                    {/* <img src={medium} className="w-12 rounded-md cursor-pointer"></img> */}

                </div>

                {/* <>
                    {
                        wallet && window.ethereum.chainId === "0x66eed"
                            ?
                            <div className=" hidden w-full px-12 mr-4  lg:flex font-extrabold  ml-auto text-center justify-start items-center">

                                <p className="cursor-pointer text-2xl px-4 py-2  rounded-sm hover:scale-110 ease-in-out duration-300">Home</p>

                                <p className="cursor-pointer text-2xl px-4 py-2 rounded-sm hover:scale-110 ease-in-out duration-300">Swap</p>

                                <p className="cursor-pointer text-2xl px-4 py-2 rounded-sm hover:scale-110 ease-in-out duration-300">Earn</p>
                                <p className="cursor-pointer text-2xl px-4 py-2 rounded-sm hover:scale-110 ease-in-out duration-300">Genesis</p>

                            </div>
                            :
                            <></>
                    }
                </> */}



                <div className=" h-full ml-auto min-w-[200px] flex justify-center items-center">
                    <ConnectWallet theme="dark" className="connect" />
                </div>



                {/* 
                <div className="">
                    {
                        window.ethereum.chainId === "0x66eed" && wallet

                            ?
                            <div className="h-full w-16 ml-4 flex justify-center items-center lg:hidden">
                                <p onClick={showDefaultDrawer} className="text-[40px] cursor-pointer">🍔</p>
                            </div>
                            :
                            <></>
                    }
                </div> */}

                <div className="h-full w-16 ml-4 flex justify-center items-center lg:hidden">
                    <p onClick={showDefaultDrawer} className="text-[40px] cursor-pointer">🍔</p>
                </div>


            </div>


            <Menu open={open} size={size} onClose={onClose} />

        </div>
    )


}