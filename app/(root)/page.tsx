import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Collection from '@/components/shared/Collection'
import { getAllEvents } from '@/lib/actions/event.actions'

export default async function Home() {

  const events = await getAllEvents({

    query: '',
    category: '',
    page: 1,
    limit: 6
  });


  return (
    <>
    <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>

      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">

        <div className="flex flex-col gap-8 justify-center">

          <h1 className="h1-bold">Host, Learn, Share: Your Events... Your Way!</h1>
          <p className="p-regular-20 md:p-regular-24">
            Search and Host events across the country with
            over 1000+ Venues to choose from including 100s of topics such as <br />  </p>
            <div className='hero-list'>
            
            <ul className='ul-list p-regular-20 md:p-regular-24'>
            <li>Religous Studies</li>
            <li>Educational Seminars</li> 
            <li>Cooking Events</li>
            <li>Gaming Tournements</li>
            <li>And Many More!!</li>
            
            </ul>
            
            </div>
            
            
            <Button size='lg' asChild className='button w-full md:w-fit'>

              <Link href='#events'>
                Explore Now
              </Link>


            </Button>
        </div>
        <Image
        src='/assets/images/hero1.png'
        alt='Hero Image'
        width={1000} 
        height={1000}
        className='hero-img max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
        />


      </div>
    </section>

    <section id='events' className='wrapper my-8 flex flex-col gap-8'>

      <h2 className="h2-bold">Thousands of Events <br/>Hundreds of Topics </h2>

      <div className="flex w-full flex-col gap-5 md:flex-row">
     Search 
     CategoryFilter 
      </div>

      <Collection 
      data={events?.data} 
      emptyTitle={'No Events Found'} 
      emptyStateSubtext={'Come Back Later'} 
      collectionType='All_Events' 
      limit={6} 
      page={1} 
      totalPages={2}   
      />
    </section>
    </>
  )
}
