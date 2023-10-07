"use client";

import { Fragment } from "react";
import { signOut } from "next-auth/react";
import { ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import { Menu, Transition } from '@headlessui/react'
import { Session } from "next-auth";
import cx from 'classnames'

export default function UserDropdown() {

  return (
    <div className="relative inline-block text-left">
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex rounded-full text-sm focus:outline-none ">
            <span className="sr-only">Open user menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={cx(active ? 'bg-gray-100' : '', 'relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-sm text-gray-700')}
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4" />
                  <p className="text-sm">Sign out</p>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={cx(active ? 'bg-gray-100' : '', 'relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-sm text-gray-700')}
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4" />
                  <p className="text-sm">Sign out</p>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
