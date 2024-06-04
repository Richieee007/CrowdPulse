import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import instagram_icon from '../../public/assets/icons/instagram.svg'
import linkedIn_icon from '../../public/assets/icons/linkedin.svg'
import github_icon from '../../public/assets/icons/github.svg'
import twitter_icon from '../../public/assets/icons/twitter.svg'

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

// // const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />

// // ReactDOM.render(element, document.body)

const Footer = () => {
  return (
    <footer className='border-t'>

      <div className='flex-center wrapper flex-between flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
        <Image src="/assets/images/logo2.png" width={128} height={38} alt='CrowdPulse Logo' className='navimg'/>
        </Link>
        <div className='footer-icons flex gap-7'>

          <a href=''><Image src={instagram_icon} className='ft-icon' alt="Instagram" /></a>
          <a href=''><Image src={linkedIn_icon} className='ft-icon' alt="LinkedIn" /></a> 
         <a href=''><Image src={github_icon} className='ft-icon' alt="GitHub" /></a> 
          <a href=''><Image src={twitter_icon} className='ft-icon' alt="Twitter" /></a> 

        


        </div>

        <p>2024 &#169;CrowdPulse All Rights Reserved</p>
      </div>




    </footer>
  )
}

export default Footer