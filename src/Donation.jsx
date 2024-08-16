import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const Donation = () => {
    const cards = useLoaderData();
    console.log(cards);
    
    return (
        <div>
            <h4 className="text-4xl text-center mb-7">Favourite Players List</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                cards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
            }
            </div>
        </div>
    );
};

export default Donation;