import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Felo from '../../public/images/projects/felo.jpg'

const FeaturedProject = ({type, title, summary, img, link, github}) => {

  return(
    <article className='w-full flex items-center justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
    '>
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

          <div className='grid grid-cols-12 gap-24 '>
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
              Project 1
            </div>

            <div className='col-span-6'>
              project 2
            </div>

            <div className='col-span-12'>
              Featured project
            </div>

            <div className='col-span-6'>
              Project 3
            </div>

            <div className='col-span-6'>
              project 4
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects