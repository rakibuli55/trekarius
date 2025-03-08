import React, {useState} from 'react';
import UnderConstructionImg from "../assets/images/UnderConstruction.png"


const UnderConstruction = () => {

    return (
        <section className='min-h-screen max-md:py-[100px] min-h-auto'>
            <img className='mx-auto mt-[150px] max-md:mt-[80px] custom-sm:mt-[60px] w-[60%] h-[60%] max-md:w-full max-md:h-[430px] custom-xs:!h-[300px]' src={UnderConstructionImg} alt="" />
        </section>
    )
};

export default UnderConstruction;