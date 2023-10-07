import React, { useState } from 'react'
import "./Qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab= (index)=>{
        setToggleState(index);
    }

  return (
    <section id="qualification" className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div 
                className={toggleState ===1 ? 
                "qualification_button qualification_active button--flex":
                      "qualification_button  button--flex"  }
                      onClick={()=> toggleTab(1)}
                      >
                    <i className="uil uil-graduation-cap qualification_icon"></i>Education
                </div>

                <div className={toggleState ===2 ? 
                "qualification_button qualification_active button--flex":
                      "qualification_button  button--flex"  }
                      onClick={()=> toggleTab(2)}
                      >
                    <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                </div>
            </div>
                <div className="qualification_sections">
                    <div 
                    className={toggleState ===1?
                    "qualification_content qualification_content-active":
                    "qualification_content "
                    }
                    >
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Business Intelligence</h3>
                                <span className="qualification_subtitle">Southern Alberta Institute of Technology</span>
                                <div className="qualification_calender">
                                    <i class="uil uil-calender-alt"></i>2023 -present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>


                        <div className="qualification_data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Data Analysis and Reporting</h3>
                                <span className="qualification_subtitle">Southern Alberta Institute of Technology (SAIT), Calgary AB</span>
                                <div className="qualification_calender">
                                    <i class="uil uil-calender-alt"></i>2023 -present
                                </div>
                            </div>
                        </div>




                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Information Technology</h3>
                                <span className="qualification_subtitle">Southern Alberta Institute of Technology (SAIT), Calgary AB
</span>
                                <div className="qualification_calender">
                                    <i class="uil uil-calender-alt"></i>Awarded 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>


                        <div className="qualification_data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title"> Computer Systems </h3>
                                <span className="qualification_subtitle">Southern Alberta Institute of Technology (SAIT), Calgary AB
</span>
                                <div className="qualification_calender">
                                    <i class="uil uil-calender-alt"></i>Awarded -2022
                                </div>
                            </div>
                        </div>
                    </div>














                    <div   className={toggleState ===2?
                    "qualification_content qualification_content-active":
                    "qualification_content "
                    }>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Systems Consultant (Contract) </h3>
                                <span className="qualification_subtitle">Long View Systems | Calgary, AB</span>
                                <div className="qualification_calender">
                                    <i class="uil uil-calender-alt"></i>Oct/2022 – Mar/2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>


                        <div className="qualification_data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Server (Permanent Part-Time) </h3>
                                <span className="qualification_subtitle">Great Events Catering | Calgary, AB
</span>
                                <div className="qualification_calender">
                                    <i class="uil uil-calender-alt"></i>2023 – present
                                </div>
                            </div>
                        </div>




                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Computer Support Technician (Internship)</h3>
                                <span className="qualification_subtitle">Iron Oak IT | Calgary, AB
</span>
                                <div className="qualification_calender">
                                    <i class="uil uil-calender-alt"></i>May/2022 – Aug/2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>


                       
                    </div>
                </div>
            </div> 
    </section>
  )
}

export default Qualification