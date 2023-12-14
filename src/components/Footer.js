import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light
    dark:border-light
    ' >
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear() } &copy; All rights reserved</span>
        <div className='flex items-center'>
          Built with  <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by&nbsp;
          <Link href="https://github.com/sebbyapudo" target={"-blank"}
          className='underline underline-offset-2'> 
            <em>Sebby Apudo</em>
          </Link>
        </div>
        
        <Link href="https://www.linkedin.com/in/sebby-oluoch-48ba76218/"
        target={"_blank"} className='underline underline-offset-2'
        > <em>Say hello</em></Link>
      </Layout>
    </footer>
  )
}

export default Footer