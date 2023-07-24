import React from 'react'
import binance from "../navbar/assets/Binance_logo.svg"
import blockchain from "../navbar/assets/Logo_of_Blockchain.io.svg"
import ethereum from "../navbar/assets/Ethereum.svg"
import Image from 'next/image'

const Hero = () => {
    const formtext = "w-[25em] h-[3em] bg-inherit rounded-lg pl-5 bg-black bg-opacity-10"
  return (
    <div>
    <div className='w-[1100px] h-[450px] flex justify-between items-center my-[2em]'>
        <div className='w-[35em] '>
            <h1 className='text-white font-poppins text-5xl font-bold '>Become Our Client and Unlock the full potential of Web3</h1>
            <p className='text-slate-300 text-xl pt-5'>Embrace the Decentralized Future: Partner with coinKlub for Web3 Development, Smart Contracts, and Blockchain Expertise.</p>
            <button className='p-3 border mt-10 border-2 rounded-lg'>Get a Proposal</button>

        </div>
        <form className='flex flex-col gap-6 backdrop-filter backdrop-blur-lg rounded-lg '>
            <h1 className='text-[20px] font-bold'>request a call</h1>
            <input className={formtext} type="text" placeholder='Name'/>
            <input className={formtext} type="text" placeholder='Email'/>
            <input className={formtext} type="text" placeholder="Company/Project's Name/link to website"/>
            <p className='text-slate-600'>coinklub's minimum budget is $3,000</p>
            <button  className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-900 p-3" type="submit">Request Free Consultation</button>
        </form>
    </div>
        <div className='flex justify-between'>
            <Image src={binance} width={300} height={300} alt='binance'/>
            <Image src={blockchain} width={300} height={300} alt='blockchain'/>
            <Image src={ethereum} width={300} height={300} alt='ethereum'/>
        </div>
    </div>
  )
}

export default Hero