import Hero from '../component/Hero'
import Categories from '../component/Categories'
import OurProduct from '../component/OurProduct'
import { useShop } from '../context/ShopContext'
import Error from '../component/Error'

function Homepage() {
  const { isError } = useShop()


  return (
   isError ? <Error/> :  <>
    <Hero/>
    <Categories/>
    <OurProduct/>
    </>
  )
}

export default Homepage