'use client'

import { formatPrice } from '@/utils/formatPrice'
import { truncateText } from '@/utils/truncate'
import { Rating } from '@mui/material'
import Image from 'next/image'

interface IProduct {
  id: string
  name: string
  description: string
  price: number
  brand: string
  category: string
  inStock: boolean
  images: Image[]
  reviews: Review[]
}
interface Review {
  id: string
  userId: string
  productId: string
  rating: number
  comment: string
  createdDate: string
  user: User
}
interface User {
  id: string
  name: string
  email: string
  emailVerified?: any
  image: string
  hashedPassword?: any
  createdAt: string
  updatedAt: string
  role: string
}
interface Image {
  color: string
  colorCode: string
  image: string
}

interface ProductCardProps {
  data: IProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length
  return (
    <div
      className='col-span-1
        cursor-pointer
        border-[1.2px]
      border-slate-200
      bg-slate-50
        rounded-sm
        p-2
        transition
        hover:scale-105
        text-center
        text-sm
    '
    >
      <div
        className='
        flex
        flex-col
        items-center
        w-full
        gap-1
    '
      >
        <div className='aspect-square overflow-hidden relative w-full'>
          <Image
            fill
            className='w-full h-full object-contain'
            src={data.images[0].image}
            alt={data.name}
          />
        </div>
        <div className='mt-4'>{truncateText(data.name)}</div>
        <div className=''>
          <Rating value={productRating} readOnly />
        </div>
        <div className=''>{data.reviews.length} reviews</div>
        <div className='font-semibold'>{formatPrice(data.price)}</div>
      </div>
    </div>
  )
}

export default ProductCard
