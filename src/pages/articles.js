import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const articles = () => {
  return (
    <>
      <Head>
        <title>Sebby | My articles</title>
        <meta name='description' content='web design, web development, graphics design, 3D animator, Motion graphics'/>
      </Head>
      <main>
        <Layout className='pt-16'>
          <AnimatedText text="Ideas unveiled, stories resonate. I will be writing soon enough😉" />
        </Layout>
        
      </main>
    </>
  )
}

export default articles