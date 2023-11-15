import Motion from "@/components/Motion";
import Reviews from "@/components/Reviews";
import dynamic from "next/dynamic";
const AboutDoctor = dynamic(() => import("@/components/AboutDoctor"));
const Carousel = dynamic(() => import("@/components/Carousel"));
const HeroBottom = dynamic(() => import("@/components/HeroBottom"));
const MyTeam = dynamic(() => import("@/components/MyTeam"));
const Services = dynamic(() => import("@/components/Services"));

export default function Home() {
  return (
    <main>
      <section>
        <Carousel />
      </section>
      <section>
        <HeroBottom />
      </section>
      <section id="about">
        <AboutDoctor />
      </section>
      <section id="team">
        <MyTeam />
      </section>
      <section id="services">
        <div className='md:h-[90vh] h-full flex items-center'>
          <div className='container mx-auto'>
            <div className='md:mx-0 mx-3'>
              <div className='flex items-center justify-center'>
                <div className='text-center md:py-0 py-20'>
                  <h4 className='text-[#49D5A7] text-lg font-bold'>Services</h4>
                  <p className='text-3xl text-[#025E74] mb-6'>Dr. Maisha Sultana Assistance in Various Fields</p>
                  <Services />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#49D5A7] text-center py-10 text-white">
          <Motion motion1={"-translate-x-0 duration-500 ease-in-out"} motion2={"-translate-x-40 duration-500 ease-in-out"}>
            <div className="md:w-1/3 w-full mx-auto">
              <h2 className="text-3xl font-semibold mb-5">YOUR Feedback MATTERS!</h2>
              <p>Dr. Maisha Sultana always appreciates feedback from her valued patients. Please read what others are saying about Dr. Maisha Sultana below, and as always, we would love to collect your feedback.</p>
            </div>
          </Motion>
        </div>
        <div className="bg-[#025E74]">
          <Reviews />
        </div>
      </section>
    </main>
  )
}
