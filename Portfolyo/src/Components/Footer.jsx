import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        <div className='footer'>
            <div className="socialMedia">
                <a href="https://www.instagram.com/grbzemir/"><InstagramIcon /></a>
                <a href="https://www.linkedin.com/in/grbzemir/"><LinkedInIcon /></a>
                <a href="https://github.com/grbzemir"><GitHubIcon /></a>
                <a href="https://x.com/grbzemirr"><TwitterIcon /></a>
                <a href="https://www.facebook.com/emircan.gurbuz.3/"><FacebookIcon /></a>
            </div>
            <p>&copy; 2024 twitter.com/grbzemirr</p>
        </div>
    )
}

export default Footer
