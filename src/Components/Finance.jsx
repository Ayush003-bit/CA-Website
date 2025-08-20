
import React from "react"
import Testi from '../assets/Testimonial Card.png'

export function Finance() {
    return (
        <div className="financeSection">

            <p className="financePara">Loved by finance teams all around</p>

            <div className="financeContent">

                <div className="textContent">
                    <p>We saw an exceptional increase in efficiency of 800% after subscribing to the Clear Invoicing solution. We are extremely happy as Clear simplified our business operations! We now enjoy automated invoicing across our customer and supplier journey. It has directly impacted our unit economics by eliminating all manual invoicing processes.</p>
                </div>

                <div className="videoContent">
                    <p>Video</p>
                </div>

            </div>

            <div className="testimonial">
                   <img src={Testi} alt="" /> 
            </div>



        </div>
    )
}

export default Finance