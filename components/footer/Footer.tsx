import Link from 'next/link'
import Container from '../Container'
import FooterList from './FooterList'
import { MdFacebook } from 'react-icons/md'
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai'

const shopCategories = [
  {
    id: 1,
    name: 'Phones',
    href: '#',
  },
  {
    id: 2,
    name: 'Laptops',
    href: '#',
  },
  {
    id: 3,
    name: 'Desktops',
    href: '#',
  },
  {
    id: 4,
    name: 'Watches',
    href: '#',
  },
  {
    id: 5,
    name: 'TVs',
    href: '#',
  },
  {
    id: 6,
    name: 'Accessories',
    href: '#',
  },
]

const customerService = [
  {
    id: 1,
    name: 'Contact Us',
    href: '#',
  },
  {
    id: 2,
    name: 'Shipping Policy',
    href: '#',
  },
  {
    id: 3,
    name: 'Returns & Exchanges',
    href: '#',
  },
  {
    id: 4,
    name: 'Watches',
    href: '#',
  },
  {
    id: 5,
    name: 'FAQs',
    href: '#',
  },
]

const followUs = [
  {
    id: 1,
    icon: <MdFacebook size={24} className='hover:text-amber-600' />,
    href: '#',
  },
  {
    id: 2,
    icon: <AiFillTwitterCircle size={24} />,
    href: '#',
  },
  {
    id: 3,
    icon: <AiFillInstagram size={24} />,
    href: '#',
  },
  {
    id: 4,
    icon: <AiFillYoutube size={24} />,
    href: '#',
  },
]

const Footer = () => {
  return (
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
            {shopCategories.map((e) => (
              <Link key={e.id} href={e.href}>
                {e.name}
              </Link>
            ))}
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Customer Service</h3>
            {customerService.map((e) => (
              <Link key={e.id} href={e.href}>
                {e.name}
              </Link>
            ))}
          </FooterList>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-base font-bold mb-2'>About Us</h3>
            <p className='mb-2'>
              At our electronics store, we are dedicated to providing the latest
              and greatest devices and accessories to our customers. With a wide
              selection of phones, TVs, laptops, watches and accessories
            </p>
            <p className=''>
              &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
            </p>
          </div>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Follow Us</h3>
            <div className='flex gap-2'>
              {followUs.map((e) => (
                <Link key={e.id} href={e.href} className=''>
                  {e.icon}
                </Link>
              ))}
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
