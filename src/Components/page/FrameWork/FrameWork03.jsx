import React from 'react'
import Footer from '../../Footer'
import '../../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_03_Body from '../../FrameWorkBody/FrameWork_03_Body'
import TOpbar from '../../Topbar';
import CoverFrame_03 from '../../FrameWorkBody/CoverFramework/CoverFrame_03';

const FrameWork03 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <TOpbar />
      <CoverFrame_03 />
      <FrameWork_03_Body />
      <Footer />
    </div>
  )
}

export default FrameWork03