import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-[#11111f] text-white flex justify-center items-center px-10 py-1'>
        <p className="">Copyright &copy; {currentYear} TeaBreeze - All Rights Reserved</p>
    </footer>
  )
}

export default Footer
