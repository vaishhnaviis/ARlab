import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header className="bg-white dark:bg-gray-900">
  <div className="mx-auto 
  max-w-screen-xl shadow-small
  px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <Image src= '/logo.svg' alt= 'logo' 
        width={50} height={40} />
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Search
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Store
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Contact Us 
              </a>
            </li>

            


          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-blue-600"
              href="/"
            >
              Login
            </a>

            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm 
                font-medium text-primary dark:bg-gray-800 dark:text-white dark:hover:text-blue-600/75"
                href="/"
              >
                Register
              </a>
            </div>
          </div>

          <div className="block md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header

