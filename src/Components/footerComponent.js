import React from 'react'
import "./Style/footer.css"
function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='address'>
            <h3>Address</h3>
                IBEKA electronics <br/>
                New Jersy<br/>
                United States<br/>
        </div>  
        <div className='Support'>
            <h3>Support</h3>
        Online Help <br/>
        Track Repair Status<br/>
        ocate Service Centres<br/>
        </div>
        <div className='contactus'>
            <h3>Contuct us</h3>
        Live chat<br/>
        Newsletter Subscriptions<br/>
        Contact Us<br/>
        </div>
    </div>
    <div className='tc'>
        <div className='hr'></div>
        <div>
            <h4>TERMS AND CONDITIONS OF WEBSITE USE PRIVACY POLICY</h4>
            <span>Copyright © 2022 IBEKA India. All rights reserved</span>
        </div>
    </div>
    </>
  )
}

export default Footer