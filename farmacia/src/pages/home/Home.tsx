import React from 'react'
import image from "../../assets/farmacia.jpg"

function Home () {

    return (
        <>
            <div className="bg-green-400 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>A sua Farmácia</h2>
                        <p className='text-xl'>Veja nossos produtos</p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home