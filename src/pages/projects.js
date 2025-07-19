import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Felo from 'public/images/projects/felo.png';
import Drink from 'public/images/projects/drinksasa.png';
import Shirini from 'public/images/projects/shirini.png';
import Redefining from 'public/images/projects/redefiningafrica.png';
import Tandacn from 'public/images/projects/tandacn.png';
import Recipe from 'public/images/projects/recipe.jpg';
import Premier from 'public/images/projects/premieranalytics.png';
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({type, title, summary, img, link, github}) => {

  return(
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'/>
      <Link href={link} target='_blank'
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10' > <GithubIcon /></Link>
          <Link href={link} target='_blank'
          className='ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'
          > visit project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title, type, img, link, github}) => {

  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
      <Link href={link} target='_blank'
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
        </Link>
        

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank'
            className=' text-lg font-semibold'
          > <em className='underline underline-offset-2 md:text-base'> 
            visit
          </em>
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6' > 
            <GithubIcon />
          </Link>
    
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Sebby | projects page</title>
        <meta name='description' content='web design, web development, graphics design, 3D animator, Motion graphics'/>
      </Head>
      <TransitionEffect />
      <main className='w-full  flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Innovative Endeavors Showcase" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title="Felix Omondi Photography"
                summary="What if I could tell your story for you? This is a portfolio website aesthetically crafted with custom page animations, a grid system and typography that emphasizes on creativity."
                link="https://sebbyapudo.github.io/Felo-Photography-Portfolio/"
                github="https://github.com/sebbyapudo/Felo-Photography-Portfolio.git"
                type="Featured Project"
                img={Felo}
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                  title="PACD"
                  link="https://redefiningafrica.org"
                  github="https://github.com/sebbyapudo/"
                  type="Featured Project"
                  img={Redefining}
                />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                    title="Shirini Exp"
                    link="https://shirini.co.ke"
                    github="https://github.com/sebbyapudo/"
                    type="Featured Project"
                    img={Shirini}

              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                  title="Drink Sasa"
                  summary="The meticulous planning and execution of a multifaceted endeavor. Drink Sasa, an online platform for ordering beverages with Mpesa integration, boasts cross-device compatibility, being fully responsive and developed using WordPress"
                  link="https://drinksasa.com"
                  github="https://github.com/sebbyapudo/"
                  type="Featured Project"
                  img={Drink}

              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                    title="Tandacn"
                    link="https://tandacn.org"
                    github="https://github.com/sebbyapudo/"
                    type="Featured Project"
                    img={Tandacn}

                />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                    title="Premier Analytics"
                    link="https://premieranalytics.co"
                    github="https://github.com/sebbyapudo/"
                    type="Featured Project"
                    img={Premier}

              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects