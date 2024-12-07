import { auth } from '@clerk/nextjs/server'
import React from 'react'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import IconBadge from '@/components/icon-badge'
import { LayoutDashboard } from 'lucide-react'
import TitleForm from './_components/title-form'

const CourceIdPage = async ({
    params
}:{
    params: {courseId:string}
}) => {
    const { userId } = await auth();
    if(!userId){
        return redirect("/");
    }

    const course = await db.course.findUnique({
        where:{
            id: params.courseId
        }
    });

    if(!course){
        return redirect("/");
    }

    const requireFields = [
        course.title,
        course.description,
        course.imageUrl,
        course.price,
        course.categoryId
    ];

    const totalFields = requireFields.length;
    const completedFields = requireFields.filter(Boolean).length;

    const completionText = '('+completedFields+'/'+totalFields+')'

  return (
    <div className='p-6'>
      <div className='flex items-center justify-between'>
        <div>
            <h1 className='text-2xl font-medium'>
                Course setup
            </h1>
            <span className='text-sm text-slate-700'>
                complete all fields
            </span>
        </div>
      </div>
      <div className='text-sm text-slate-700 flex items-center justify-between'>
            <span>
                completed fields {completionText}
            </span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
            <div>
            <div className='flex items-center gap-x-2'>
                <IconBadge size='sm' variant="success" icon={LayoutDashboard}></IconBadge>
                <h2 className='text-xl'>
                    Customize your course
                </h2>
            </div>
            <TitleForm 
                initialData={course}
                courseId={course.id}
            ></TitleForm>
            </div>    
        </div>
    </div>
  )
}

export default CourceIdPage
