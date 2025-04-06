const memberContainer = document.getElementById('member-cards');

fetch('data/members.json')
  .then((response) => response.json())
  .then((members) => {
    members.forEach((member) => {
      const card = document.createElement('div');
      card.classList.add('member-card');

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership:</strong> ${member.membershipLevel}</p>
        <p>${member.description}</p>
      `;

      memberContainer.appendChild(card);
    });
  })
  .catch((error) => console.error('Error loading member data:', error));
