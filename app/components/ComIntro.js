import React from 'react'
import { useTranslations } from 'next-intl';

export default function ComIntro() {
  const t = useTranslations('comintro');

  return (
    <div className="min-h-screen relative bg-white bg-cover bg-center bg-no-repeat  px-6">
      <h1 className='text-6xl font-sans font-light p-8 mb-4 text-black'>
      {t('title')} <span className="text-6xl font-sans font-bold p-8 mb-4 text-blue-500">{t('brand')}</span>
      </h1>
      <p className='p-4 font-mono text-black'>
       {t('description')}
      </p>
    </div>
  )
}
