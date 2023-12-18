import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React from 'react'

const articles = () => {
  return (
    <>
      <Head>
        <title>Sebby | My articles</title>
        <meta name='description' content='web design, web development, graphics design, 3D animator, Motion graphics'/>
      </Head>
      <TransitionEffect />
      <main>
        <Layout className='pt-16'>
          <AnimatedText text="Ideas unveiled, stories resonate. I'll be writing soon enough😉" className='lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
        </Layout>
        
      </main>
    </>
  )
}

export default articles