import React from 'react'
import Alert from '../components/Alert'

const PreviewPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center mx-4 md:mx-36 font-[family-name:var(--font-noto-sans)] bg-neutral-900">          
      <div className="flex flex-col items-start">
      <p className="text-7xl font-medium text-neutral-100">ผลงาน</p>
      <p className="text-xl text-neutral-100">ศูนย์รวมระแนง ไม้ระแนงไวนิล AMIGO ระแนงบังตา และช่างทำระแนง โดย Iconroof</p>
        <Alert />
        </div>      
    </div>
  )
}

export default PreviewPage