import React from 'react'
import Image from 'next/image'
import nftimage from "../navbar/assets/nftimage.jpg"

const Become = () => {
  return (
    <div>
        <div className='flex flex-col gap-[5em] justify-center text-center mt-[10em]'>
            <h1 className='text-5xl font-bold'>Thrive in the Web3 Era with coinKlub: Your Catalyst for Blockchain Evolution</h1>
            <p className='text-xl text-slate-400 leading-loose'>Welcome to coinKlub - Your path to decentralized success. Unleash the power of blockchain with us. Let's make your crypto journey a triumph.</p>
            <div className='flex justify-between'>
                <Image src={nftimage} alt='nft image' width="" height="" className='w-[30em] h-[27em] rounded-md'/>
                <div className='flex flex-col gap-[2em]'>
                    <h1 className='text-4xl font-bold text-left'>Why Work With Us</h1>
                    <p className='text-xl text-slate-400 w-[20em] text-left leading-loose'>Joining forces with TokenMinds means more than just a partnership – it's a commitment to your success. Let us help you unlock a world of possibilities, accelerate your growth, and make a lasting impact in the ever-evolving Web3 ecosystem. Together, we'll shape a prosperous future for your project in the digital era.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Become
