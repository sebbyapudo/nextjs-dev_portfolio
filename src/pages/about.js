import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import AboutImage from '../../public/images/profile/seb.jpg'
import { spring, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000})
  const isInView = useInView(ref, {once:true})

  useEffect(() => {
    if(isInView){
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])
  


  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Sebby | About Me</title>
        <meta name='description' content='web design, web development, graphics design, 3D animator, Motion graphics'/>
      </Head>
      <TransitionEffect />
      <main className='w-full flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Ignites Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 '/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'> 
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
              <p className='font-medium'>
                Hi, I am <em>Sebby</em>  but you can just call me Seb. I am a web developer, 3D Artist and UI/UX designer. I craft aesthetically pleasing, intuitive digital experiences, driven by a three-year expertise. Eager to transform clients&apos; ideas into compelling realities, I am here to redefine your digital presence.
              </p>
              <p className='my-4 font-medium'>
                I hold the belief that design surpasses mere aesthetics; it&apos;s the art of problem-solving  and crafting user experiences that are intuitive and delightful.
              </p>
              <p className='font-medium'>
                Be it a website, mobile app, digital graphic, or 3D model, I infuse every project with a dedication to exceptional design and user-focused mindset. I eagerly anticipate the chance to contribute my expertise and enthusiasm to your upcoming endeavor.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
            '>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
              <Image src={AboutImage} alt='Sebby Apudo' className='w-full h-auto rounded-2xl'
              priority 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inliine-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={50}/> {`+`}
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm
                '>satisfied clients</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inliine-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={30}/> {`+`}
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm
                '>projects completed</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inliine-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={3}/> {`+`}
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm
                '>years of experience</h2>
              </div>

            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about