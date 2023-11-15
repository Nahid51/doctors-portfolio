import Motion from './Motion';

const HeroBottom = () => {
    return (
        <div className='bg-[#49D5A7] text-white'>
            <Motion motion1={"md:translate-x-0 -translate-x-0 duration-500 ease-in-out"} motion2={"md:translate-x-40 -translate-x-40 duration-500 ease-in-out"}>
                <div className='text-center py-5'>
                    <h4 className='text-2xl font-bold mb-1'>Dr. Maisha Sultana</h4>
                    <p>MBBS, MD, DM</p>
                    <p className='md:w-1/3 w-full mx-auto'>Board-Certified Rheumatologist & Internist located in Memorial Hermann Medical Plaza, Katy, TX Now providing Telehealth appointments</p>
                </div>
            </Motion>
        </div>
    );
};

export default HeroBottom;