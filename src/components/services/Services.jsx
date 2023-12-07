import React, { useState } from 'react'
import "./Services.css"
import img from "../../assets/renewable.webp"
import elecimg from "../../assets/elec.jpg"
import elecp from "../../assets/electricvehicleproject.zip"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className=" services section" id="services">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle"></span>
            <div className="services_container container grid">
                {/* service content container */}
                <div className="services_content">
                    <div onClick={() => toggleTab(1)}>
                        <img src={img} alt="" />
                        {/* <i className="uil uil-web-grid services_icon"></i> */}
                        <h3 className="services_title">Data analytics for renewable energy consulting firm</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View more  <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                    <div className={toggleState === 1 ? "services_modal  active-modal" :
                        "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">Data analytics for renewable energy consulting firm</h3>
                            <p className="services_modal-description">
                                I am representing our renewable energy consulting firm, where data analytics plays a pivotal role. My mission is to assist corporations and governments in maximizing renewable energy benefits through rigorous data analysis. I was engaged by Calgary to examine their solar energy data, obtained from the Open Data portal, using advanced analytics techniques. Notably, I found that Whitehorn had the highest monthly production and Richmond had the lowest, leading me to recommend strategic solar infrastructure investments. My data-driven insights, including average monthly production, daily output analysis, and total production, underscore Calgary's growing solar energy market's potential, emphasizing its role in addressing energy needs through data-informed decision-making.
                            </p>
                            <a href="https://linkedin.com/in/nobrega-davi" className='button button-flex'>Contact me</a>

                            {/* <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I develop the user interface
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Web page development
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I create ux element interactions.
                                </p>
                            </li>


                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I position your company brand
                                </p>
                            </li>


                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies
                                </p>
                            </li>
                        </ul> */}
                        </div>
                    </div>
                </div>



                {/* service content container */}
                <div className="services_content">
                    <div onClick={() => toggleTab(2)}>
                        <img src={elecimg} alt="" />
                        {/* <i className="uil uil-web-grid services_icon"></i> */}
                        <h3 className="services_title">Investigating Electric Vehicle Data: Data Detectives</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>View more  <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                    <div className={toggleState === 2 ? "services_modal  active-modal" :
                        "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">Investigating Electric Vehicle Data: Data Detectives</h3>
                            <p className="services_modal-description">
                                Exploring the world of electric vehicles with Data Detectives, our team analyzes real-world data using Power BI. From electric range averages to state-wise EV distribution, our findings reveal insights into the evolving landscape of sustainable transportation. Stay tuned for a data-driven journey into the future of mobility!
                            </p>
                            <div className='bottom_buttons'>
                                <a href="https://linkedin.com/in/nobrega-davi" className='button button-flex'>Contact me</a>
                                <a download href={elecp} className='button button-flex'>Download project</a>
                            </div>
                            {/* <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I develop the user interface
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Web page development
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I create ux element interactions.
                                </p>
                            </li>


                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I position your company brand
                                </p>
                            </li>


                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies
                                </p>
                            </li>
                        </ul> */}
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div onClick={() => toggleTab(3)}>
                        <img src={elecimg} alt="" />
                        {/* <i className="uil uil-web-grid services_icon"></i> */}
                        <h3 className="services_title">Olympus BI Solution</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>View more  <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                    <div className={toggleState === 3 ? "services_modal  active-modal" :
                        "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">Olympus BI Solution</h3>
                            <p className="services_modal-description">
                                We developed a BI solution for Olympus Manufacturing, a multinational computer equipment manufacturer. The solution integrates data from their SAP system, uses Microsoft Azure for data integration and storage, and utilizes Power BI for dynamic data visualization. The main challenges are tracking shipments, supplier efficiency, and the need for unified performance metrics. The goal is to reduce lead time by 30%. A detailed cost estimate has been prepared, highlighting the Azure services chosen. Olympus Manufacturing is embracing data-driven decision-making to enhance its supply chain efficiency and overall performance with a comprehensive BI solution, leveraging Microsoft Azure's tools.
                            </p>
                            <div className='bottom_buttons'>
                                <a href="https://linkedin.com/in/nobrega-davi" className='button button-flex'>Contact me</a>
                                <a download href={elecp} className='button button-flex'>Download project</a>
                            </div>
                            {/* <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I develop the user interface
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Web page development
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I create ux element interactions.
                                </p>
                            </li>


                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I position your company brand
                                </p>
                            </li>


                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies
                                </p>
                            </li>
                        </ul> */}
                        </div>
                    </div>
                </div>





                {/* 
                 <div className="services_content">
                    <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">Ui/Ux <br/> Designer</h3>
                </div>

                <span onClick={()=>toggleTab(2)} className="services_button">View more <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                <div className={toggleState===2 ? "services_modal  active-modal":
                    "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Ui/Ux designer</h3>
                        <p className="services_modal-description">
                            Service with more 
                        than 3 years of
                         experience.Providing quality work 
                        to clients and companies.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I develop the user interface
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Web page development
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I create ux element interactions.
                                </p>
                            </li>


                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I position your company brand
                                </p>
                            </li>


                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                 </div>  */}



                {/* <div className="services_content">
                    <div>
                    <i className="uil uil-edit services_icon"></i>
                    <h3 className="services_title">Visual <br/> Designer</h3>
                </div>

                <span  onClick={()=> toggleTab(3)} className="services_button">View more <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                <div className={toggleState===3 ? "services_modal  active-modal":
                    "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Visual Designer</h3>
                        <p className="services_modal-description">
                            Service with more 
                        than 3 years of
                         experience.Providing quality work 
                        to clients and companies.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I develop the user interface
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Web page development
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I create ux element interactions.
                                </p>
                            </li>


                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I position your company brand
                                </p>
                            </li>


                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                 </div>  */}
            </div>
        </section>
    )
}

export default Services
