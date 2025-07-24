import CompanionForms from '@/components/CompanionForms'
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const NewCompanion = async () => {

  const {userId} = await auth();
  if(!userId) redirect('/sign-in');

  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      <article className='flex flex-col gap-4 w-full'>
        <h1>Companion Builder</h1>
        <CompanionForms />
      </article>
    </main>
  )
}

export default NewCompanion
