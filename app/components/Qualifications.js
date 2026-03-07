import React from 'react'
import { useTranslations } from 'next-intl';

export default function Qualifications() {
  const t = useTranslations('qualifications');

  const certs = [
    { title: t('certificates.frontend.title'),
      issuedBy : t('certificates.frontend.issuer')
    },
    { title: t('certificates.webdesign.title'),
      issuedBy : t('certificates.webdesign.issuer')
    },
    { title: t('certificates.python.title'),
      issuedBy : t('certificates.python.issuer')
    },
    { title: t('certificates.webdev.title'),
      issuedBy : t('certificates.webdev.issuer')
    },
    { title: t('certificates.pythonEssentials.title'),
      issuedBy : t('certificates.pythonEssentials.issuer')
    },
    { title: t('certificates.aiIntro.title'),
      issuedBy : t('certificates.aiIntro.issuer')
    }
  ]

  return (
    <div className="min-h-screen relative bg-white bg-cover bg-center bg-no-repeat px-6 py-12">
      <h1 className="text-6xl font-sans text-black font-light p-8 mb-4">{t('Qualifications')}</h1>

      <p className="p-4 font-mono max-w-3xl text-black">
        {t('Below are some of the certifications I have obtained, showcasing my commitment to continuous learning and professional development in the field of technology.')}
      </p>

      <div className="max-w-3xl p-4 grid gap-4">
        {certs.map((c) => (
          <div
            key={c.title}
            className="block bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg p-4 shadow-sm text-slate-800 transition-colors"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-sm mt-1">{c.issuedBy}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
