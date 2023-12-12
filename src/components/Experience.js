import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const Details = ({position, company, companyLink, time, work, address}) => {
  return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <div>
      <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize'>@{company}</a></h3>
      <span className='capitalize font-medium text-dark/75'>
        {time} | {address}
      </span>
      <p className='font-medium w-full'>
        {work}
      </p>
    </div>
  </li>
}

const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className='my-64'>
      <h2 className='w-full text-center text-8xl font-bold mb-32'>Experience</h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
        style={{scaleY: scrollYProgress}}
        className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>
        <ul className='w-full flex flex-col items-center justify-between ml-4'>
          <Details 
            position={"Creative developer"} company={"Freelancer"}
            companyLink={"https://github.com/sebbyapudo"}
            time={"2021-Present"} address={"Nairobi"}
            work={"Worked the creation of dynamic and engaging websites for a diverse range of clients. Additionally, worked on creating visually compelling 3D ads and graphics, breathing life into promotional campaigns for various businesses. Through meticulous attention to detail and a keen understanding of design principles, I've contributed to enhancing the visual identity and market presence of these enterprises, fostering a lasting impact in the digital realm."}
          
          />

          <Details 
            position={"ICT officer"} company={"IEBC Kenya"}
            companyLink={"https://www.iebc.or.ke/"}
            time={"2021-2022"} address={"Nairobi"}
            work={"Worked on a team responsible for handling issues in IT for the independent Electoral and boundaries commission of Kenya. My role included trouble shooting equipment failure and networking. Whilst there, I gained a ton of experience in networking."}
          
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience