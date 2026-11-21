const url = 'https://timpuente1119-del.github.io/wdd231/chamber/data/members.json';
const spotlightCards = document.querySelector("#spotlights");

async function getBusinessData(){
    const response = await fetch(url);
    const data = await response.json();

    const filteredMembers = (data.members).filter(member => member.membershiplevel >= 2);
    // console.table(data.prophets);
    displaySpotlight(filteredMembers);
};

getBusinessData();



const displaySpotlight = (members) => {
    let count = 0;
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