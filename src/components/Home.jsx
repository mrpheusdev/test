import React, { useState, useEffect } from "react";
import { useChain, useAddress, useChainId, useTokenBalance, useUser, useWallet, Token } from "@thirdweb-dev/react";

import uniswap from "../images/uniswap.png"

import bags from "../images/crowdsale.png"
import coming from "../images/coming.png"

import beraLlogo from "../images/gary-token.png"


import dexscreener from "../images/dexscreener.webp"
import twitter from "../images/twitter.png"
import tiktok from "../images/tiktok.png"
import medium from "../images/medium.png"
import telegram from "../images/telegram.png"
import bera from "../images/gary.png"




export default function Home({ correctChain, wallet, activeChain }) {





    let [isConnected, setIsConnected] = useState(false);






    const callouts = [
        {
            name: 'crowdsale',
            description: 'INCEPTION',
            imageSrc: bags,


        },
        {
            name: 'liquidity',
            description: 'SETUP',
            imageSrc: coming

        }
    ]




    const posts = [
        {
            id: 1,
            title: 'Crowdsale',

            description:
                "",
            date: 'Jun 01, 2023',
            datetime: '2023-06-01',
            category: { title: 'GENESIS LP' },
            author: {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },

        },
        // {
        //     id: 2,
        //     title: 'Boost your conversion rate',
        //     href: '#',
        //     description:
        //         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        //     date: 'Mar 16, 2020',
        //     datetime: '2020-03-16',
        //     category: { title: 'Marketing' },
        //     author: {
        //         name: 'Michael Foster',
        //         role: 'Co-Founder / CTO',
        //         href: '#',
        //         imageUrl:
        //             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },

        // }

    ]




    // thirdweb token events 







    useEffect(() => {

    }, [wallet, activeChain])





    return (
        <>

            <div className="w-full relative flex flex-col justify-center items-center">

                <div className="relative  z-10 mt-16 px-6 text-lg md:px-24 md:text-xl pt-8 pb-12 lg:flex lg:px-60 lg:gap-8">

                    <div className="flex flex-col justify-self-center items-center gap-4 mb-8">
                        <p className="text-5xl w-full text-center text-white mb-6 ease-in-out duration-300">Episode 1: Allegations</p>

                        <p className="lg:text-3xl ">
                            Bera Gary, renowned as the father of all Beras, embarked on a relentless mission to bring justice to the world.
                        </p>

                        <p className="lg:text-3xl">
                            In an unexpected twist, he accused the notorious superhero, a samurai, of heinous crimes.
                        </p>

                        <p className="lg:text-3xl">
                            As allegations spread like wildfire, a dramatic trial unfolded, captivating the masses. The clash of noble and mythical figures left the world divided, questioning the true nature of heroes.
                        </p>


                        <p className="lg:text-3xl">
                            Only the courtroom held the key to unmasking the truth and shaping the fate of all.
                        </p>


                    </div>



                    <img alt="Gary" className=" w-full max-w-[1000px]  lg:max-h-[70vh] shadow-[rgba(20,_205,_200,_0.24)_0px_3px_8px] rounded-lg" src={bera}></img>

                </div>










                <div className="w-full  roadmap h-[1400px] md:h-[1300px] lg:h-[100vh] mt-24">
                    <div className=" w-full h-[1400px] md:h-[1300px] lg:h-[100vh] bg-black bg-opacity-60 flex flex-col justify-center">

                        <p className="text-4xl  text-center mt-24 lg:mt-24">ROADMAP</p>


                        <div className="h-full">

                            <div className=''>
                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:max-w-none lg:py-8">
                                        {/* <h2 className="text-2xl font-bold text-white">Setup</h2> */}

                                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                            {callouts.map((callout) => (
                                                <div className="group relative" key={callout.name}>
                                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                                        <img
                                                            src={callout.imageSrc}
                                                            alt={callout.imageAlt}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <h3 className="mt-6 text-sm text-white">
                                                        <a href={callout.href}>
                                                            <span className="absolute inset-0" />
                                                            {callout.name}
                                                        </a>
                                                    </h3>
                                                    <p className="text-base font-semibold text-white">{callout.description}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <h2 className="text-xl mt-20 md:mt-36 font-bold text-center text-slate-400">This section will be periodically updated and as the narrative evolves, more setup phases will lead to more episodes and will contribute to a new <span className="text-green-500">flying wheel</span>. The goal is to bond an unbreakable relationship with the community and create a synergy that will lead to the accomplishment of the purposes of this project.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <div className="w-full ">
                    <p className="text-4xl  text-center mt-12 lg:mt-24">TOKENOMICS</p>


                    <div className="px-3 md:lg:xl:px-40 pt-12 pb-8 bg-opacity-10 flex justify-center items-center">
                        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 w-[90%] group  ">


                            <div
                                className="p-10 flex flex-col items-center text-center group hover:bg-white hover:bg-opacity-5 cursor-pointer">

                                <p className="text-xl font-medium text-slate-400 mt-3">Max Supply</p>
                                <p className="mt-2 text-xl md:text-2xl lg:text-3xl text-slate-100">200,000,000</p>
                                <p className="text-md text-slate-500">100% minted</p>
                            </div>


                            <div
                                className="p-10 flex flex-col items-center text-center group hover:bg-white hover:bg-opacity-5 cursor-pointer">

                                <p className="text-xl font-medium text-slate-400 mt-3">Presale price</p>
                                <p className="mt-2 text-xl md:text-2xl lg:text-3xl text-slate-100">0,00003 BNB</p>
                                <p className="text-md text-slate-500">price in usd with dexscreener context</p>

                            </div>



                            <div
                                className="p-10 flex flex-col items-center text-center group hover:bg-white hover:bg-opacity-5 cursor-pointer">

                                <p className="text-xl font-medium text-slate-400 mt-3">Genesis LP price</p>
                                <p className="mt-2 text-xl md:text-2xl lg:text-3xl text-slate-100">0,00005 BNB</p>
                                <p className="text-md text-slate-500">something something</p>

                            </div>





                            <div
                                className="p-10 flex flex-col items-center text-center group hover:bg-white hover:bg-opacity-5 cursor-pointer">

                                <p className="text-xl font-medium text-slate-400 mt-3">Presale allocation</p>
                                <p className="mt-2 text-xl md:text-2xl lg:text-3xl text-slate-100">100,000,000 (~66%)</p>
                                <p className="text-md text-slate-500">hardcap 3k BNB , softcap 1k BNB , unclaimed will be burned</p>
                            </div>


                            <div
                                className="p-10 flex flex-col items-center text-center group hover:bg-white hover:bg-opacity-5 cursor-pointer">

                                <p className="text-xl font-medium text-slate-400 mt-3">LP allocation (BNB excluded)</p>
                                <p className="mt-2 text-xl md:text-2xl lg:text-3xl text-slate-100">30,600,000 BGT (~20%)</p>
                                <p className="text-md text-slate-500">all fees to holders in a next episode</p>
                            </div>



                            <div
                                className="p-10 flex flex-col items-center text-center group hover:bg-white hover:bg-opacity-5 cursor-pointer">

                                <p className="text-xl font-medium text-slate-400 mt-3">Marketing</p>
                                <p className="mt-2 text-xl md:text-2xl lg:text-3xl text-slate-100">7,500,000 (5%)</p>
                                <p className="text-md text-slate-500">calling all beras</p>
                            </div>

                            <div
                                className="p-10 flex flex-col items-center text-center group hover:bg-white hover:bg-opacity-5 cursor-pointer">

                                <p className="text-xl font-medium text-slate-400 mt-3">Future CEX listings</p>
                                <p className="mt-2 text-xl md:text-2xl lg:text-3xl text-slate-100">7,500,000 (~5%)</p>
                                <p className="text-md text-slate-500">foes and commitees</p>
                            </div>

                            <div
                                className="p-10 flex flex-col items-center text-center group hover:bg-white hover:bg-opacity-5 cursor-pointer">

                                <p className="text-xl font-medium text-slate-400 mt-3">Protocol incentives allocation</p>
                                <p className="mt-2 text-xl md:text-2xl lg:text-3xl text-slate-100">7,500,000 (~5%)</p>
                                <p className="text-md text-slate-500">foes and commitees</p>
                            </div>

                            <div
                                className="p-10 flex flex-col items-center text-center group hover:bg-white hover:bg-opacity-5 cursor-pointer">
                                <p className="text-xl font-medium text-slate-400 mt-3">Team</p>
                                <p className="mt-2 text-xl md:text-2xl lg:text-3xl text-slate-100">5,000,000 (~3%)</p>
                                <p className="text-md text-slate-500">vested, 50% 72h post launch , </p>
                            </div>




                        </div>



                    </div>


                    <p className="text-lg text-slate-500  text-center mt-8">Docs coming soon for more info on tokenomics and the ecosystem .</p>
                </div>



                <div className=" wall-str w-full mt-24   lg:h-[100vh] ">



                    <div className="flex flex-col w-full gap-4 bg-black bg-opacity-50 px-8 h-[100vh] justify-center items-center md:text-lg lg:text-2xl ease-in-out duration-300">

                        <p>Bera Gary, through astute observation, discerned that many market participants had overextended themselves, relying heavily on leveraged positions. Sensing an opportunity amid the chaos, he devised a daring scheme to seize cheap liquidity from perp DEXes.</p>

                        <p>He sought to accumulate this cheap liquidity through a crowd sale, wherein he would raise substantial funds from his believers. The twist lays in the currency chosen for this crowd sale, a digital token embodying the spirit of the valiant warriors of old.</p>

                        <p>As Bera Gary's treasury swelled with the heart of the samurai, an extraordinary phenomenon began to unfold. The samurai, once revered protectors of the market's equilibrium, had been weakened and dormant. However, the influx of the heart of the samurai breathed new life into their ethereal essence, rekindling their power and purpose.</p>

                        <p>The more individuals contributed to Bera Gary's treasury, the faster the samurai's revival gathered momentum. As the samurai regained strength, their noble mission became clear—to save the markets from impending doom and restore balance to the crypto realm. </p>
                        <p>In a grand display of fintech prowess, Bera Gary orchestrated a masterstroke. He utilized the acquired liquidity to stake it strategically, aligning himself with the imminent market liquidations. Through this audacious move, he aimed to earn substantial rewards, paid in the beloved currency of the digital realm, "EL MERHE".</p>
                        <p>He was a visionary who believed in the power of community and collaboration. Thus, he decided to share these rewards with those who had unwavering faith in his cause. The ones who had believed in him from the beginning would benefit from the revival of the samurai and the subsequent prosperity of the markets.</p>

                    </div>


                </div>




                <div className="w-full mt-24 ">
                    <div className="py-">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <h2 className="text-center text-xl md:text-2xl font-semibold leading-8 text-white">
                                Building on top of the world’s most innovative projects
                            </h2>
                            <div className="mx-auto flex mt-10 h-64 justify-center items-center   gap-x-12 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none">
                                <div className="flex flex-col items-center justify-center border px-5 rounded-full border-gray-700 bg-gray-950">
                                    <img
                                        className="col-span-2 w-32  object-contain lg:col-span-1 mt-4 mb-4"
                                        src="https://arbiscan.io/images/svg/brands/arbitrum.svg?v=1.5"
                                        alt="Transistor"
                                    // width={120}
                                    // height={120}
                                    />

                                </div>

                                <div className="flex flex-col items-center justify-center border rounded-full border-gray-700 bg-gray-950">
                                    <img
                                        className="col-span-2 w-40 object-contain lg:col-span-1"
                                        src={uniswap}
                                        alt="Transistor"

                                    />

                                </div>

                                <div className="flex flex-col items-center justify-center ">
                                    <img
                                        className="col-span-2 w-40 object-contain lg:col-span-1"
                                        src={"https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.a8cda9b2.png&w=640&q=75"}
                                        alt="Transistor"

                                    />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>




                <div className=" text-slate-400 py-6 text-[12px]  md:text-[14px] ">

                    <div className="w-full  mb-8 flex flex-col md:flex-row justify-center items-center bg-amber-500 bg-opacity-90 py-2">

                        <div className=" flex justify-center items-center gap-2 mt-4  mr-4 lg:min-w-[200px]">
                            <img alt="Gary" className="w-40 rounded-full border-2 -border-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" src={beraLlogo}></img>
                        </div>

                        <div className="text-xl flex flex-col justify-center items-center text-slate-200">
                            <p>® 2023 - Bera Gary</p>
                            <p>All rights reserved</p>

                        </div>

                        <div className="text-white flex justify-center items-center gap-2  mr-4 mt-6 mb-4 md:ml-10 md:grid md:grid-cols-2 md:gap-4">

                            {/* <img src={dexscreener} className="w-12 rounded-md cursor-pointer"></img> */}
                            <img src={twitter} className="w-12 rounded-md bg-black p-2 cursor-pointer"></img>
                            <img src={telegram} className="w-12 rounded-md bg-white cursor-pointer"></img>
                            {/* <img src={tiktok} className=" w-12 rounded-md cursor-pointer"></img> */}
                            {/* <img src={medium} className="w-12 rounded-md cursor-pointer"></img> */}


                        </div>

                    </div>


                    <p className="px-4">Disclaimer: We take Blockchain very seriously but Bera  Gary  and its associated project are intended for educational, entertainment, and experimental purposes only. The information provided in our content, communications, and any other materials should not be construed as financial, investment, legal, or any other form of professional advice. By engaging with the Bera Gary Token and project, you acknowledge that you are participating in a high-risk experiment and assume full responsibility for any decisions you make. We strongly encourage individuals to conduct their own research and consult with qualified professionals before participating in any blockchain, cryptocurrency, or token-related activities. Any character present in this saga is a purely fictional one and I was dreaming when I imagined this narrative.</p>
                </div>





            </div>


        </>
    )
}


