// js/script.js

const newsItems = [
  {
    title: "Ghana's Economic Outlook 2025",
    image: "images/economy.jpg",
    content: "The Ghanaian economy is projected to grow by 5.8%, driven by investments in energy, agriculture, and digital infrastructure."
  },
  {
    title: "Top 10 Investment Opportunities in Ghana",
    image: "images/opportunities.jpg",
    content: "From tourism to fintech, Ghana remains an investment hotspot with high ROI potential in emerging sectors."
  },
  {
    title: "Political Landscape Post-2024 Elections",
    image: "images/politics.jpg",
    content: "A balanced Parliament and peaceful transition continue to define Ghana's democratic resilience in West Africa."
  },
  {
    title: "Ghana Shines at Africa Investment Forum",
    image: "images/forum.jpg",
    content: "President's call for continental unity and strategic collaboration draws high praise from international investors."
  }
];

//const newsGrid = document.getElementById("news-grid");

newsItems.forEach(news => {
  const card = document.createElement("div");
  card.className = "news-card";
  card.innerHTML = `
    <img src="${news.image}" alt="${news.title}">
    <h3>${news.title}</h3>
    <p>${news.content}</p>
  `;
  newsGrid.appendChild(card);
});
// Toggle mobile menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('show');
});

// Toggle dark mode
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
