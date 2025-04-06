const baseURL = "https://argie25.github.io/wdd230/";
const linksURL = "https://argie25.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
};

function displayLinks(weeks) {
  const ul = document.querySelector("#card1 ul");

  weeks.forEach(week => {
    const li = document.createElement("li");

    // Capitalize the week label (e.g., Week 1)
    const weekTitle = week.week.charAt(0).toUpperCase() + week.week.slice(1);
    li.textContent = `${weekTitle}: `;

    week.links.forEach((link, index) => {
      const a = document.createElement("a");
      a.href = link.url.startsWith("http") ? link.url : baseURL + link.url;
      a.textContent = link.title;
      a.target = "_blank";
      li.appendChild(a);

      if (index < week.links.length - 1) {
        li.appendChild(document.createTextNode(" | "));
      }
    });

    ul.appendChild(li);
  });
}

getLinks();