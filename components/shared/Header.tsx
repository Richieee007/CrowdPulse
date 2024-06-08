import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignedOut,
          SignInButton,
          SignedIn,
          UserButton
 } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { Sign } from 'crypto'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className="wrapper flex items-center justify-between">

        <Link href='/' className='w-36'>
        <Image src="/assets/images/logo2.png" width={128} height={38} alt='CrowdPulse Logo' className='navimg'/>

        </Link>

        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs '> <NavItems /></nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">

          <SignedIn>
            <UserButton afterSignOutUrl= '/' />
            <MobileNav />
          </SignedIn>

          <SignedOut>
          <Button asChild className='rounded-full' size='lg'>
             <SignInButton><Link href='/sign-in'>Login</Link></SignInButton>
          </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header 