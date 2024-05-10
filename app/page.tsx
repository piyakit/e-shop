import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/utils/product'

export default function Home() {
  return (
    <div className='p-8'>
      <Container>
        <div className=''>
          <HomeBanner />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xs:grid-cols-1 gap-8'>
          {products.map((product) => (
            <ProductCard data={product} />
          ))}
        </div>
      </Container>
    </div>
  )
}
