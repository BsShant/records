import React from 'react'
import './styles.css'

const TeamProfile = (props) => {
    const {name, role, image} = props
    return (
        <div className='team-profile'>
            <div className="row">
                <div className="col-md-4">
                    <div className="team-image">
                        <img src={image} alt="Team Image" style={{width:"90px"}}/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="team-info">
                        <div className="team-name">{name}</div>
                        <div className="team-position">{role}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamProfile