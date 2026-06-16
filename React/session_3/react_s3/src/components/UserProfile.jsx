import React from 'react'
import "../assets/css/UserProfile.css"

const UserProfile = ({img="https://img.magnific.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80", name, followers=0}) => {
  return (
    <div className='profile_main'>
        <div className="img_div">
            <img src={img} alt={`${name} image`} />
        </div>
        <div className="info">
            <p className="u_name">{name}</p>
            <p className="u_followers"> <span> {followers}</span> <span>Followers</span> </p>
        </div>
    </div>
  )
}



export default UserProfile

