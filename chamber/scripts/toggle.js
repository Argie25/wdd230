
  // Toggle View Functions
  const gridBtn = document.getElementById("gridBtn");
  const listBtn = document.getElementById("listBtn");
  const membersContainer = document.querySelector("#members");
  
  gridBtn.addEventListener("click", () => {
      membersContainer.classList.remove("member-list");
      membersContainer.classList.add("member-grid");
  });
  
  listBtn.addEventListener("click", () => {
      membersContainer.classList.remove("member-grid");
      membersContainer.classList.add("member-list");
  });
    