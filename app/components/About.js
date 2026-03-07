import React from 'react'
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen relative bg-white bg-cover bg-center bg-no-repeat  px-6">
      <h1 className='text-6xl font-sans font-light p-8 mb-4 text-black'>
      {t('title')}
      </h1>
      <p className='p-4 font-mono text-black'>
        {t('description')}
      </p>
    </div>
  )
}
