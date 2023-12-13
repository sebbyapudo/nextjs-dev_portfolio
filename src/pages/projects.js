import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Felo from '../../public/images/projects/felo.jpg'
import Recipe from '../../public/images/projects/recipe.jpg'
import Kiongozi from '../../public/images/projects/kiongozi.jpg'
import Logistics from '../../public/images/projects/logistics.jpg'
import FoodStore from '../../public/images/projects/food-store.jpg'
import Loruki from '../../public/images/projects/loruki.jpg'

const FeaturedProject = ({type, title, summary, img, link, github}) => {

  return(
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
      <Link href={link} target='_blank'
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold '>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>{summary}</p>

        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10' > <GithubIcon /></Link>
          <Link href={link} target='_blank'
          className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
          > visit project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title, type, img, link, github}) => {

  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
      <Link href={link} target='_blank'
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold '>{title}</h2>
        </Link>
        

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank'
            className=' text-lg font-semibold'
          > <em className='underline underline-offset-2'> 
            visit
          </em>
          </Link>
          <Link href={github} target='_blank' className='w-8' > 
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
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Innovative Endeavors Showcase" className='mb-16' />

          <div className='grid grid-cols-12 gap-24 gap-y-32'>
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

            <div className='col-span-6'>
              <Project
                  title="Simply Recipes"
                  link="https://sebbyapudo.github.io/SimplyRecipes/index.html"
                  github="https://github.com/sebbyapudo/SimplyRecipes.git"
                  type="Featured Project"
                  img={Recipe}
                />
            </div>

            <div className='col-span-6'>
              <Project
                    title="Skiongozi team building"
                    link="https://sebbyapudo.github.io/SKiongozi_team-building/"
                    github="https://github.com/sebbyapudo/SKiongozi_team-building.git"
                    type="Featured Project"
                    img={Kiongozi}

              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                  title="Nathan Kayo Logistics"
                  summary="The detailed organization and implementation of a complex operation. NKG a web app for a Logistics company in Nairobi, has multiple compatibilities on different screen devices as it fully responsive and it's built in plain old vanilla js "
                  link="https://sebbyapudo.github.io/NKG-Logistics/"
                  github="https://github.com/sebbyapudo/NKG-Logistics.git"
                  type="Featured Project"
                  img={Logistics}

              />
            </div>

            <div className='col-span-6'>
              <Project
                    title="Foodmart Ecommerce"
                    link="https://www.figma.com/community/file/1271365468968017828/food-store-e-commerce"
                    github="https://www.figma.com/file/gPWLVq0drcSpsuqoRTznRo/Food-Store-e-commerce?type=design&node-id=0%3A1&mode=design&t=N2k6Ss3H5nm9BsFD-1"
                    type="Featured Project"
                    img={FoodStore}

                />
            </div>

            <div className='col-span-6'>
              <Project
                    title="Loruki CloudHosting"
                    link="https://sebbyapudo.github.io/CloudHosting-Loruki/"
                    github="https://github.com/sebbyapudo/CloudHosting-Loruki.git"
                    type="Featured Project"
                    img={Loruki}

              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects