import React from 'react'
import FooterLinks from './FooterLinks'
import FooterLastLinks from './FooterLastLinks'

function Footer() {
  return (
    <div className='flex flex-col space-y-28 md:space-y-36 xl:space-y-48 text-white pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] xl:pl-[8vw] xl:pr-[8vw]'>
        <div className='text-xl font-extrabold cursor-pointer'>
            POPULOUS
        </div>
        <div className='hidden xl:grid xl:grid-cols-5 xl:gap-x-40'>
            <FooterLinks title='WHAT' links={['Explore', 'Projects', 'Disciplines']}/>
            <FooterLinks title='WHO' links={['About', 'Team', 'Careers']}/>
            <FooterLinks title='IMPACT' links={['Sustainability', 'Digital Future', 'News', 'Contact']}/>
            <FooterLinks title='SOCIAL' links={['LinkedIn', 'Facebook']}/>
            <FooterLinks links={['Instagram', 'X']}/>
        </div>
        <div className='hidden xl:grid xl:grid-cols-5 gap-x-40'>
            <FooterLastLinks links={['Privacy Policy', 'Copyright © 2025 Populous']}/>
            <FooterLastLinks links={['Terms of Use']}/>
            <FooterLastLinks links={['Transparency Statement']}/>
            <FooterLastLinks links={['Manage Cookies']}/>
        </div>
        <div className='grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0 xl:hidden'>
            <FooterLinks title='WHAT' links={['Explore', 'Projects', 'Disciplines']}/>
            <FooterLinks title='WHO' links={['About', 'Team', 'Careers']}/>
            <FooterLinks title='IMPACT' links={['Sustainability', 'Digital Future', 'News', 'Contact']}/>
            <FooterLinks title='SOCIAL' links={['LinkedIn', 'Instagram', 'Facebook', 'X']}/>
        </div>
        <div className='grid grid-cols-1 xl:hidden'>
            <FooterLastLinks links={['Privacy Policy']}/>
            <FooterLastLinks links={['Terms of Use']}/>
            <FooterLastLinks links={['Transparency Statement']}/>
            <FooterLastLinks links={['Manage Cookies']}/>
            <div className='mt-6'>
                <FooterLastLinks links={['Copyright © 2025 Populous']}/>
            </div>
        </div>
    </div>
  )
}

export default Footer