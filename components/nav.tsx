import { NextPage } from 'next';
import React from 'react'

const Nav: NextPage = () => {
  return (
          <div
        className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent"
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
            <a href="index.html" className="navbar-logo">
                <img
                  src="/assets/images/birdWayLogo.png"
                  alt="logo"
                className="header-logo h-[120px] md:rounded-[20px] md:bg-white text-center md:mt-6"
                />
              </a>
            </div>
              <div className=''>
                <button
                  id="navbarToggler"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                  ></span>
                  <span
                    className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                  ></span>
                  <span
                    className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                  ></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
                >
                  <ul className="blcok lg:flex">
                    <li className="group relative">
                      <a
                        href="#home"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                      >
                        Home
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#about"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        About
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#mission"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Mission
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#team"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Services
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#team"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Values
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#faq"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#form"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <a
                  href="#form"
                  className="signUpBtn rounded-lg  py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                >
                  {/* Apply for Membership */}
                </a>
              </div>

          </div>
        </div>
      </div>
  )
}

export default Nav;