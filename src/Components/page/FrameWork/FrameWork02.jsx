import React from 'react'
import Footer from '../../Footer'
import '../../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_02_Body from '../../FrameWorkBody/FrameWork_02_Body'
import TOpbar from '../../Topbar';
import CoverFrame_02 from '../../FrameWorkBody/CoverFramework/CoverFrame_02';
import FrameWorkForm from './FrameWorkForm';
import Navbar from '../../Navbar';

const FrameWork02 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <Navbar />
      <CoverFrame_02 />
      <FrameWorkForm />
      <FrameWork_02_Body />
      <Footer />
    </div>
  )
}

export default FrameWork02
