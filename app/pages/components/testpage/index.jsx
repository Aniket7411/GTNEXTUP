"use client";

import Test2 from "./index2"

const Testpage = () => {


    function printHello() {
        console.log("jhjhjhjjhj")
    }

    return (
        <>
            <div className="h-[50vh] bg-amber-300">
                <h1 className="mt-[90px] text-[#000] text-2xl md:text-4xl lg:text-7xl">Aniket</h1>
                <p className="text-red-800 md:text-white">Mern stack developer</p>

                <div className="flex justify-between items-center">
                    <div>
                        <h1>aniket</h1>
                        <p>developer</p>
                    </div>
                    <div>
                        <img src="./ahrefs.png" alt="" />
                    </div>
                </div>

                <button onClick={printHello}>hghghhh</button>

            </div>
            <Test2 />

        </>
    )
}


export default Testpage