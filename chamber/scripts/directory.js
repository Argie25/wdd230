const baseURL = "https://argie25.github.io/wdd230/";
const membersURL = "https://argie25.github.io/wdd230/chamber/data/links.json";

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
  
      const img = document.createElement("img");
      img.src = baseURL + "images/" + member.image;
      img.alt = `${member.name} logo`;
      img.loading = "lazy";
  
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
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(level);
      card.appendChild(hours);
      card.appendChild(description);
  
      container.appendChild(card);
    });
  }
  
  getMembers();
