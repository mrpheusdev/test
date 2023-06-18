import { Button, Drawer, Space, Tooltip, message } from 'antd';
import dexscreener from "../images/dexscreener.webp"
import twitter from "../images/twitter.png"
import tiktok from "../images/tiktok.png"
import medium from "../images/medium.png"
import telegram from "../images/telegram.png"
import { ContextLiquidity } from "../context/Context";
import React, { useContext, useState, useEffect } from 'react';





export default function Menu({ onClose, open }) {



    let [lp, setLp] = useContext(ContextLiquidity)




    return (
        <div className="w-full">

            <Drawer
                className='relative shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] '

                title={

                    <div className='w-full '>
                        <button onClick={onClose} className='absolute z-20 left-4 top-[19px] bg-white bg-opacity-10 p-[6px] rounded-md text-sm text-slate-300 hover:text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-3dvm1v-4 jPdqkH"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                        </button>
                    </div>
                }
                placement="right"
                size='medium'
                onClose={onClose}
                open={open}
                style={{ background: 'black' }}
                closeIcon={""}
                extra={
                    <Space>
                        {/* other things  */}
                        <></>
                    </Space>

                }
            >


                <div className='w-full  mt-2'>
                    <p className='text-xl font-bold text-center'>Resources </p>


                    <div className=" w-full  flex flex-col border border-slate-700 rounded-md mt-4">

                        {/* <img src={dexscreener} className="w-10 rounded-md cursor-pointer"></img> */}
                        <div className='flex py-2 gap-2 text-center justify-start items-center cursor-pointer hover:bg-white hover:bg-opacity-10'>
                            <img src={twitter} className="w-10 rounded-md p-2"></img>
                            <p className=' text-lg'>Twitter</p>
                        </div>





                        <div className='flex gap-2 py-2 text-center justify-start items-center cursor-pointer hover:bg-white hover:bg-opacity-10'>
                            <img src={telegram} className="w-10 rounded-md bg-white cursor-pointer"></img>

                            <p className=' text-lg'>Telegram</p>
                        </div>




                        {/* <img src={tiktok} className="w-10 rounded-md cursor-pointer"></img> */}
                        {/* <img src={medium} className="w-12 rounded-md cursor-pointer"></img> */}

                    </div>

                </div>



            </Drawer>
        </div>
    )



}