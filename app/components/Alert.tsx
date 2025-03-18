"use client"
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function Alert() {
  let [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>      
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none font-[family-name:var(--font-noto-sans)]" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-xl"
            >
              <DialogTitle as="h3" className="text-base font-medium text-neutral-900">
                Staging Environment Page
              </DialogTitle>
              <p className="mt-2 text-sm text-neutral-900/50">
                This page is pre-production page if you want to see the production page please go <a href='https://xn--72ca6bng5c5ell7l.com/' target='_blank' className='link font-medium text-black'>ระแนงบังตา.com</a>
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-neutral-900 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
