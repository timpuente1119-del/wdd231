const memberURL = 'https://timpuente1119-del.github.io/wdd231/chamber/data/members.json';
const spotlightCards = document.querySelector("#spotlights");

async function getBusinessData(){
    const response = await fetch(memberURL);
    const data = await response.json();

    const filteredMembers = (data.members).filter(member => member.membershiplevel >= 2);
    const shuffledMembers = getShuffled(filteredMembers);

    // To limit the number of spotlights, .slice was suggested by AI. 
    // Decided to go for 3 spot lights
    const slicedMembers = shuffledMembers.slice(0, 3)
    // console.table(data.prophets);
    displaySpotlight(slicedMembers);
};

getBusinessData();

// to try to randomize the spot lights, I've looked up something 
// called the Fisher-Yates shuffle function. Giving that a shot

function getShuffled(array){
    // using spread operator (...) to make a shallow copy of the 
    // original array. This helps keep the original untouched. Had to look up how it works. It unpacks
    // individual elements of an array or object and puts them in a new container
    const shuffled = [...array];
    for (let i = shuffled.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        
    }
    return shuffled;
}



const displaySpotlight = (members) => {
    
    members.forEach((member) => {
        

        
            let spotlightCard = document.createElement("section");
            let businessName = document.createElement('h2');
            let portrait = document.createElement('img');
            let phone = document.createElement('p');
            let address = document.createElement('p');
            let website = document.createElement('a');
            let level = document.createElement('p');

            businessName.innerHTML = `${member.companyname}`;
            
            portrait.setAttribute('src' , member.image);
            portrait.setAttribute('alt', `Logo of ${member.companyname}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '100');
            portrait.setAttribute('height', '85');

             phone.innerHTML = `Phone: ${member.phone}`;
             address.innerHTML = `Address: ${member.address}`;
             website.innerHTML = `Website: ${member.website}`;
             if(member.membershiplevel === 2){
                level.innerHTML = `Membership Level: Silver`;
             }else if(member.membershiplevel === 3){
                level.innerHTML = `Membership Level: Gold`;
             }

            spotlightCard.appendChild(businessName);
            spotlightCard.appendChild(portrait);
            spotlightCard.appendChild(phone);
            spotlightCard.appendChild(address);
            spotlightCard.appendChild(website);
            spotlightCard.appendChild(level);

            spotlightCards.appendChild(spotlightCard);
             
        
            
        
    });
};