import { useLoaderData, useParams } from "react-router-dom";

const DonationCardDetails = () => {
    const donationCards = useLoaderData();
    const { donationId } = useParams();
    const idInt = parseInt(donationId);
    const card = donationCards.find(card => card.id === idInt)
    console.log(card);

    return (
        <div> 
             <div className="flex flex-col items-center justify-center">
             <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={card.picture} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{card.title}</h2>
                    <h2>Country: {card.country}</h2>
                    <h2>Age: {card.age}</h2>
                    <h2>Category: {card.category}</h2>
                    <p>{card.description}</p>
                </div>
            </div>
             </div>
        </div>
    );
};

export default DonationCardDetails;

