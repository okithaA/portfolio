import React from 'react'

export default function Qualifications() {
  const certs = [
    { title: 'Front-End Web Development E-Certificate',
      issuedBy : 'Department of Information Technology, Faculty of Information Technology, University of Moratuwa'
    },
    { title: 'Web Design for Beginners E-Certificate',
      issuedBy : 'Department of Information Technology, Faculty of Information Technology, University of Moratuwa '
    },
    { title: 'Python for Beginners E-Certificate',
      issuedBy : 'Department of Information Technology, Faculty of Information Technology, University of Moratuwa'
    },
    { title: 'Web development Certificate',
      issuedBy : 'Viduhala.lk'
    },
    { title: 'Python Essentials 1 E-Certificate',
      issuedBy : 'Networking Academy through the Cisco Networking Academy'
    }
  ]

  return (
    <div className="min-h-screen relative bg-white bg-cover bg-center bg-no-repeat px-6 py-12">
      <h1 className="text-6xl font-sans text-black font-light p-8 mb-4">Qualifications</h1>

      <p className="p-4 font-mono max-w-3xl text-black">
        Below are a few certificates and documents showcasing coursework and achievements. 
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
