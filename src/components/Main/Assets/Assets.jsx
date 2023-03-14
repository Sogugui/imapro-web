import React, { useState } from 'react'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
const Assets = () => {
  const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '/', current: window.location.pathname },
    { name: 'Team', icon: UsersIcon, href: '/about', current: window.location.pathname },
    { name: 'Projects', icon: FolderIcon, href: '/ourwork', current: window.location.pathname },
    { name: 'Calendar', icon: CalendarIcon, href: '/clients', current: window.location.pathname },
    { name: 'Documents', icon: InboxIcon, href: '/assets', current: window.location.pathname },
    { name: 'Reports', icon: ChartBarIcon, href: '#', current: window.location.pathname },
  ]
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleBar = () => {
    showSidebar
      ? setShowSidebar(false)
      : setShowSidebar(true)
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
      <div className="flex flex-shrink-0 items-center space-y-5 px-4">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 bg-white" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-50 border-indigo-600 text-red-600 '
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-3 py-2 text-sm font-medium border-l-4'
              )}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>

  )
}

export default Assets




