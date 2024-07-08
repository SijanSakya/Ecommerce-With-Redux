import {ReactNode} from 'react'
import Navbar from '@/components/shared-components/master-layout/navbar/Navbar'
import Footer from '@/components/shared-components/master-layout/footer/Footer'

interface MasterLayoutProps {
  children?: ReactNode;
}
const MasterLayout = ({children}: MasterLayoutProps) => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MasterLayout