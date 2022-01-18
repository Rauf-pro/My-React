import react from "react";

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src="../Images/Ayi.jpg"/>
            <h3>{props.name}</h3>
            <div className="info-group">
            <img src="../Images/Ayi.jpg"/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
            <img src="../Images/Ayi.jpg"/>
                <p>{props.email}</p>
            </div>
        </div>
    )
}