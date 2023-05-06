import React, { useState} from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { AiOutlineUserAdd, AiOutlineMessage, AiOutlineFileAdd } from 'react-icons/ai'
import { MdOutlineDashboard } from 'react-icons/md'
import { BsCartCheck } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'

function Home() {
    const menus = [
        {name: 'Dashboard', id: 1, link: '/', icon: MdOutlineDashboard},
        {name: 'User', id: 2, link: '/', icon: AiOutlineUserAdd},
        {name: 'Message', id: 3, link: '/', icon: AiOutlineMessage},
        {name: 'File Manager', id: 4, link: '/', icon: AiOutlineFileAdd},
        {name: 'Cart', id: 5, link: '/', icon: BsCartCheck},
        {name: 'Settings', id: 6, link: '/', icon: FiSettings},
        {name: 'Profile', id: 7, link: '/', icon: CgProfile},
    ]
    const [open, setOpen] = useState(false)
  return (
    <section className="flex gap-6">
        <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72': 'w-16' } duration-500 text-gray-100 px-4`}>
            <div className="py-3 flex justify-end">
                <HiMenuAlt1 size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
            </div>
            <div className='mt-4 flex flex-col gap-4 relative '>
                
                {
                    menus.map(( menu, i)  => {
                        return(
                            <a to={menu?.link} href={menu?.link} key={menu.id} className='group flex items-center text-md gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md '>
                                <div>
                                    { React.createElement( menu?.icon, {width:'20'})}
                                </div>
                                <h2 style={{transitionDelay: `${i + 3}00ms`}} className={` whitespace-pre duration-300 ${!open && 'opacity-0 translate-y-28 overflow-hidden'}`}>{menu?.name}</h2>
                                <h2 
                                    className={`
                                    ${open && 'hidden'} absolute left-48 bg-white whitespace-pre font-semibold 
                                    text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2
                                     group-hover:py-2 group-hover:left-14 group-hover:duration-300  group-hover:w-fit `}>

                                    {menu.name}
                                </h2>
                            </a>
                        )
                    })
                }
                
            </div>
        </div>
       <div className="m-3 text-xl text-gray-900 font-semibold">
        tailwindCss, React.js, useState hook & Map function 
       </div>
    </section>
  )
}

export default Home