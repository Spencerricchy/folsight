import React, { useEffect, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img6 from "../../assets/Images/gea-01.png"
import img7 from "../../assets/Images/gea-02.png"
import img8 from "../../assets/Images/gea-03.png"
import img9 from "../../assets/Images/fea-4.png"
import img10 from "../../assets/Images/fea-41.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const FrameWork_06_Body = () => {
  useEffect(() => {
    AOS.init({initClassName: true})
},[])
  return (
    <div className='frameworkBody'>
      <div className="container">
      <div className="learnMore">
    <div className="container">
      <div className="learnMoreTittle row">
       <div className="col-lg-12">
    <h1>Making Great Things Possible</h1>
    <p>Land from day very fill that midst stars one dominion. Itself was let that divided itself god don't subdue wherein let behold over he whose of sea moved called.</p>
    </div>
    {/*********************** PCIDSS ************************/}
            </div>  
             <div className="learnMoreProductContainer row">
                <div className="learnMoreProductContainerParent col-lg-6 topDisplay">
                    <div className="learnMoreProductContainerFristChild" data-aos="fade-in-left" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img9} style={{width:"100%"}} alt="" />
                    </div>
                </div>
                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerChild">
                        <div className="learnMoreProductContainerChildTop">
                        <h1>Control Implementation</h1>
                        <p>maintaining secure network architecture by configuring firewalls, restricting network access, and securing wireless connections. It also ensures that cardholder data is encrypted both at rest and in transit, protecting sensitive information from unauthorized access.</p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>PCI DSS Implementation</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Network and Data Encryption</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Access Control Measures</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreProductContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                        </div>
                    </div>
                </div>
                <div className="learnMoreProductContainerParent col-lg-6 buttomDisplay">
                    <div className="learnMoreProductContainerFristChild" data-aos="fade-in-left" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img9} style={{width:"100%"}} alt="" />
                    </div>
                </div>
             </div>
             <div className="learnMoreCategoryContainer row">

                <div className="learnMoreCategoryContainerParent col-lg-6">
                    <div className="learnMoreCategoryContainerChild">
                        <div className="learnMoreCategoryContainerChildTop">
                        <h1>Automated Compliance Monitoring</h1>
                        <p>Folsight continuously monitors systems to ensure compliance with PCI DSS standards, identifying any gaps or vulnerabilities in the protection of cardholder data.</p>
                        </div>
                        <div className="learnMoreCategoryContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Continuous System Monitoring</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Identifying Gaps in Compliance</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Vulnerability Management</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreCategoryContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                        </div>
                    </div>
                </div>

                <div className="learnMoreCategoryContainerParent col-lg-6">
                    <div className="learnMoreCategoryContainerFristChild" data-aos="fade-in-right" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img10} style={{width:"100%"}} alt="" />
                    </div>
                </div>
             </div>
             <div className="learnMoreProductContainer row">
                <div className="learnMoreProductContainerParent col-lg-6 topDisplay">
                    <div className="learnMoreProductContainerFristChild" data-aos="fade-in-left" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img9} style={{width:"100%"}} alt="" />
                    </div>
                </div>
                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerChild">
                        <div className="learnMoreProductContainerChildTop">
                        <h1>Risk Assessment and Remediation</h1>
                        <p>Folsight conducts regular risk assessments to identify potential fraud risks, prioritizing remediation efforts to address vulnerabilities in the payment environment.</p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>	Regular Risk Assessments</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>Identifying Fraud Risks</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p>  Prioritized Remediation Efforts</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreProductContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                        </div>
                    </div>
                </div>
                <div className="learnMoreProductContainerParent col-lg-6 buttomDisplay">
                    <div className="learnMoreProductContainerFristChild" data-aos="fade-in-left" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img9} style={{width:"100%"}} alt="" />
                    </div>
                </div>
             </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default FrameWork_06_Body