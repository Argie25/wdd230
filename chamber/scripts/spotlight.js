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

    card.innerHTML = `
      <img src="${baseURL}${member.image}" alt="Logo of ${member.name}">
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    spotlightContainer.appendChild(card);
  });
}

// Kick it off
getMembers();