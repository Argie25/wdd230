const baseURL = "https://argie25.github.io/wdd230/";
const membersURL = "https://argie25.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data);
  }
  
  function displayMembers(members) {
    const container = document.querySelector("#members");
  
    members.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("member-card");
  
      const portrait = document.createElement("img");
      portrait.setAttribute('src', member.image);
      portrait.setAttribute('alt', `${member.name} - logo`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '240');
      portrait.setAttribute('height', '340');
  
      const name = document.createElement("h3");
      name.textContent = member.name;
  
      const address = document.createElement("p");
      address.innerHTML = `<strong>Address:</strong> ${member.address}`;
  
      const phone = document.createElement("p");
      phone.innerHTML = `<strong>Phone:</strong> ${member.phone}`;
  
      const website = document.createElement("p");
      website.innerHTML = `<strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a>`;
  
      const level = document.createElement("p");
      level.innerHTML = `<strong>Membership:</strong> ${member.membershipLevel}`;
  
      const hours = document.createElement("p");
      hours.innerHTML = `<strong>Hours:</strong> ${member.hours}`;
  
      const description = document.createElement("p");
      description.textContent = member.description;
  
      // Append elements to card
      card.appendChild(portrait);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(level);
      card.appendChild(hours);
      card.appendChild(description);
  
      // Append card to container
      container.appendChild(card);
    });
  }

  
  getMembers();


