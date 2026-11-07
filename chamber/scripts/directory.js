const url = 'https://timpuente1119-del.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#company-cards');

async function getBusinessData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayBusiness(data.members);
};

getBusinessData();

// making the buttons for grid and list view
const gridButton = document.querySelector("#grid-btn");
const listButton = document.querySelector("#list-btn");

gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});

const displayBusiness = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let businessName = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let portrait = document.createElement('img');

        businessName.innerHTML = `${member.companyname}`;
        address.innerHTML = `Address: ${member.address}`;
        phone.innerHTML = `Phone: ${member.phone}`;
        website.innerHTML = `Website: ${member.website}`;
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');

        portrait.setAttribute('src' , member.image);
        portrait.setAttribute('alt', `Logo of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};