const initialFacts = [
  // These are old facts from my previous idea but I changed this to a cat website later
  {
    id: 1,
    text: "Kimi no Na Wa is the third highest-grossing anime film of all time!",
    source: "https://www.nihongomaster.com/blog/14-fun-facts-about-anime",
    category: "Kimi no Na Wa",
    votesInteresting: 32,
    votesMindblowing: 41,
    votesFalse: 56,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "The famous anime known as Death Note is banned in China.",
    source: "https://www.nihongomaster.com/blog/14-fun-facts-about-anime",
    category: "Death Note",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "The ramen shop ‘Ichiraku’ in Naruto really exists!",
    source: "https://www.nihongomaster.com/blog/14-fun-facts-about-anime",
    category: "Naruto",
    votesInteresting: 21,
    votesMindblowing: 67,
    votesFalse: 15,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "Ragdoll", color: "#fca5a5" },
  { name: "Scottish Fold", color: "#c4b5fd" },
  { name: "Munchkin", color: "#fdba74" },
  { name: "Persian", color: "#fcd34d" },
  { name: "Siamese", color: "#67e8f9" },
  { name: "British Shorthair", color: "#e4759a" },
  { name: "Sphynx", color: "#86efac" },
  { name: "Maine Coon", color: "#bef264" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://jtyabnauvxotdvpynfcj.supabase.co/rest/v1/Facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0eWFibmF1dnhvdGR2cHluZmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MzA3MzcsImV4cCI6MjAxMzQwNjczN30.SbQnCs5beLXfLhT7-rYUP-mN4mXkDce2CG3EPCbo7nk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0eWFibmF1dnhvdGR2cHluZmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MzA3MzcsImV4cCI6MjAxMzQwNjczN30.SbQnCs5beLXfLhT7-rYUP-mN4mXkDce2CG3EPCbo7nk",
      },
    }
  );
  const data = await res.json();
  // console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "Ragdoll");

  createFactsList(data);
}

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Arvindeep</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));
