import React from 'react'

const Profile = () => {
  return (
    <div>
        <div className="prof_image" style={{width:"200px", height:"200px", border:"none", borderRadius:"50%" }}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/060/843/811/small/close-up-of-raindrops-on-leaves-hd-background-luxury-hd-wallpaper-image-trendy-background-illustration-free-photo.jpg" alt="profile image" style={{width:"200px", height:"200px", borderRadius:"50% "}}/>
        </div>
        <p className="name">aryan198_ahir</p>
        <p className="status">
            I am a React js developer.
        </p>
    </div>
  )
}

export default Profile