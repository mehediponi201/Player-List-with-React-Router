import { NavLink } from "react-router-dom";

const DonationCard = ({ card }) => {
    const { id, picture, title, category,country } = card;
    
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img src={picture} style={{width:'400px', height:'400px'}} alt="Net problem" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Name: {title}</h2>
            <p>{country}</p>
            <div className="card-actions justify-end"> 
                <NavLink to={`/donation/${id}`}> <button className="btn btn-primary">Details</button></NavLink>
            </div>
        </div>
    </div>
    );
};

export default DonationCard;