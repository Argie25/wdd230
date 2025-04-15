const baseURL = "https://argie25.github.io/wdd230/";
const membersURL = "https://argie25.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
  try {
    const response = await fetch(membersURL);
    const data = await response.json();
    spotlightDisplay(data);
  } catch (error) {
    console.error("Error fetching member data:", error);
  }
}

function spotlightDisplay(members) {
    const spotlightContainer = document.querySelector("#spotlight");
  
    // Filter only Silver and Gold members
    const qualified = members.filter(member => 
      member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );
  
    // Shuffle and select 2–3 random members
    const randomCount = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const selected = qualified.sort(() => 0.5 - Math.random()).slice(0, randomCount);
  
    selected.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("spotlight-card");
  
      const name = document.createElement("h3");
      name.textContent = member.name;
  
      const description = document.createElement("p");
      description.textContent = member.description;
  
      const link = document.createElement("a");
      link.setAttribute("href", member.website);
      link.setAttribute("target", "_blank");
      link.textContent = "Visit Website";
  
      const portrait = document.createElement("img");
      portrait.setAttribute("src", member.image);
      portrait.setAttribute("alt", `${member.name} - logo`);
      portrait.setAttribute("loading", "lazy");
      portrait.setAttribute("width", "240");
      portrait.setAttribute("height", "340");
  
      // Append elements to card
      card.appendChild(portrait);
      card.appendChild(name);
      card.appendChild(description);
      card.appendChild(link);
  
      // Add card to the spotlight container
      spotlightContainer.appendChild(card);
    });
  }
  

// Kick it off
getMembers();