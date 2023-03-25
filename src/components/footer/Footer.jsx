import React from 'react'

import './footer.css'

const Footer = () => {
  return (
    <div className='netflix_footer'>
      <h5>Questions? Call  <u> 000-800-919-1694</u> </h5>
      <div className='netflix_footer-links'>
        <div className='netflix_footer-links-1'>
          <a href="https://help.netflix.com/en/node/412">FAQ</a>
          <a href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Account</a>
          <a href="https://jobs.netflix.com/">Jobs</a>
          <a href="https://help.netflix.com/legal/privacy">Privacy</a>
          <a href="https://help.netflix.com/en/contactus">Contactus</a>
          <a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a>
          <div className='netflix_footer-button'>
            <div className='netflix_navbar-button-lang'>
              <box-icon name='globe' color='white'></box-icon>
                <h6>English</h6>
              <box-icon type='solid' name='down-arrow' color='white'></box-icon>
            </div>
            <h6 className='netflix-text'>Netflix India</h6>
          </div>
        </div>
        <div className='netflix_footer-links-2'>
          <a href="https://help.netflix.com/legal/giftcardandbalanceterms">Gift Card Terms</a>
          <a href="https://media.netflix.com/en/">Media Centre</a>
          <a href="https://devices.netflix.com/en/">Ways to Watch</a>
          <a href="https://fast.com/">Speed Test</a>
        </div>
        <div className='netflix_footer-links-3'>
          <a href="https://help.netflix.com/en/">Help Centre</a>
          <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a>
          <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
          <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
          <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
