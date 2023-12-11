import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import AboutImage from '../../public/images/profile/Seb.jpg'

const about = () => {
  return (
    <>
      <Head>
        <title>Sebby | About Me</title>
        <meta name='description' content='web design, web development, graphics design, 3D animator, Motion graphics'/>
      </Head>
      <main className='w-full flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Ignites Purpose!" className='mb-16'/>
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'> 
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
              <p className='font-medium'>
                Hi, I am <em>Sebby</em>  but you can just call me Seb. I am a web developer, 3D Artist and UI/UX designer. I craft aesthetically pleasing, intuitive digital experiences, driven by a three-year expertise. Eager to transform clients' ideas into compelling realities, I'm here to redefine your digital presence.
              </p>
              <p className='my-4 font-medium'>
                I hold the belief that design surpasses mere aesthetics; it's the art of problem-solving  and crafting user experiences that are intuitive and delightful.
              </p>
              <p className='font-medium'>
                Be it a website, mobile app, digital graphic, or 3D model, I infuse every project with a dedication to exceptional design and user-focused mindset. I eagerly anticipate the chance to contribute my expertise and enthusiasm to your upcoming endeavor.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8
            '>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
              <Image src={AboutImage} alt='Sebby Apudo' className='w-full h-auto rounded-2xl'/>
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inliine-block text-7xl font-bold'>
                  50+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inliine-block text-7xl font-bold'>
                  30+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inliine-block text-7xl font-bold'>
                  3+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
              </div>

            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about