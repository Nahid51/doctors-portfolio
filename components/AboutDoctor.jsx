import Image from 'next/image';
import doctor from "../public/photos/female-doctor.jpg"

const AboutDoctor = () => {
    return (
        <div className='md:w-1/2 w-full mx-auto p-5'>
            <div className='bg-[#025E74]'>
                <div className='p-4'>
                    <div className='border border-[#49D5A7]'>
                        <div className='p-4 text-white'>
                            <h2 className='text-center text-3xl font-bold mb-5'>About Dr. Maisha Sultana</h2>
                            <div className='flex md:flex-row flex-col items-center justify-center md:gap-x-5 gap-x-0 md:gap-y-0 gap-y-5'>
                                <Image src={doctor} alt='doctor' width={300} />
                                <div>
                                    <p className='text-justify'>Dr. Maisha Sultana, is a board-certified internist and rheumatologist in Katy, Texas. Dr. Maisha has been practicing for more than a decade. Dr. Maisha is a graduate of the University of Texas Medical Branch at Galveston. She completed her residency in internal medicine and a fellowship in rheumatology at the University of Texas Health Science Center at Houston. She trained under leading experts and conducted cutting edge research on ankylosing spondylitis. She also served as an Assistant Professor of Rheumatology and Clinical Immunogenetics for five years before starting her own practice.</p>
                                    <p className='my-5 text-justify'>Dr. Maisha thinks of learning as a continuous process, believing that each patient experience is unique. Her philosophy is that the physician’s role is to provide guidance and assist the patient in achieving the best results possible. As a mother, daughter, wife, and sister herself, her goal is to practice medicine effectively by drawing from her personal experiences and extend them to connect with each patient empathetically as a person, not just a condition.</p>
                                </div>
                            </div>
                            <p className='text-justify'>As a rheumatologist, she understands that chronic diseases can impact every aspect of a person’s life, both physically and emotionally, and this is why Dr. Maisha tries to work with each patient under her care to feel their best with care tailored to their individual needs. Dr. Maisha is currently accepting new patients.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutDoctor;