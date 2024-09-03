import React from "react";
import cardImage from "../img/bolupic.jpg"

function InfoCont(){
    return (
        <section className="card-cont">
            <img src={cardImage}></img>

            <div className="card-details">
                <h1>Boluwatife Suyi-Ajayi</h1>
                <p className="role-desc">Frond-End Development</p>
                <p className="card-email">bsuyiajayi@gmail.com</p>
            </div>

            <div className="btn-cont">
                <a href="mailto:bsuyiajayi@gmail.com"><i class="ri-mail-fill"></i>Email</a>
                <a href="#"><i class="ri-linkedin-box-fill"></i>Linkeden</a>
            </div>
        </section>
    )
}

export default InfoCont