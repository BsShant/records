import React from 'react'
import GirlSinging from '../../assets/images/girlSinging.png'
import TeamProfile from '../teamProfile/TeamProfile'
import HeadRight from '../../assets/images/faceRight.png'
import './styles.css'
const AboutUs = () => {
    return (
        <section
            class="section"
            style={{

                color: "white",
                backgroundColor: "black",
            }}
        >

            <div className="container" style={{
                height: "100%", marginTop: "40px"
            }}>
                <div className="about-us-inner-container">
                    <div className="row" style={{ height: "100%", marginBottom: "60px", alignItems: "flex-end" }} >
                        <div className="col-12 col-md-5">
                            <div className="box-container">
                                <div className="box-inner-container">think outside</div>
                                <span>the box</span>
                            </div>
                        </div>
                        <div className="col-sm-0 col-md-1">
                            <div className="line"></div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="text-container"></div>
                            <div className="upper-text">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's

                            </div>
                            <div className="lower-text">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                            </div>
                        </div>
                    </div>
                    <div className="team-section">
                        <div className="row">
                            <div className="col-md-3">
                                <TeamProfile name="Samuel" role="ceo" image={HeadRight} />
                            </div>
                            <div className="col-md-3">
                                <TeamProfile name="Caroline" role="ceo" image={HeadRight} />
                            </div>
                            <div className="col-md-3">
                                <TeamProfile name="Julien" role="ceo" image={HeadRight} />
                            </div>
                            <div className="col-md-3">
                                <TeamProfile name="Quintein" role="ceo" image={HeadRight} />
                            </div>
                            <div className="col-md-3">
                                <TeamProfile name="Dimitri" role="ceo" image={HeadRight} />
                            </div>
                            <div className="col-md-3">
                                <TeamProfile name="Camille" role="ceo" image={HeadRight} />
                            </div>
                            <div className="col-md-3">
                                <TeamProfile name="Quentein P" role="ceo" image={HeadRight} />
                            </div>
                            <div className="col-md-3">
                                <TeamProfile name="Densi" role="ceo" image={HeadRight} />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default AboutUs;