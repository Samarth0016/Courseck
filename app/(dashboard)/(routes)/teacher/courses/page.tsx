import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const CourcesPage = () => {
  return (
    <div className='p-6'>
      <Link href='/teacher/create'>
        <Button>
          New Cource
        </Button>
      </Link>
    </div>
  )
}

export default CourcesPage
