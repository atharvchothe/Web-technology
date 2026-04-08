const languages = {
  c: {
    title: "C Programming",
    description: "C is a low-level programming language used for system programming.",
    features: ["Fast", "Procedural", "Memory management"]
  },
  cpp: {
    title: "C++ Programming",
    description: "C++ is an extension of C with OOP features.",
    features: ["Object-Oriented", "Fast", "Used in game engines"]
  },
  csharp: {
    title: "C# Programming",
    description: "C# is used mainly for Windows apps and game development.",
    features: ["Modern", "OOP", "Used with Unity"]
  },
  js: {
    title: "JavaScript",
    description: "JavaScript is used for web development.",
    features: ["Runs in browser", "Event-based", "DOM manipulation"]
  }
};

const buttons = document.querySelectorAll("#languages button");
const title = document.getElementById("title");
const description = document.getElementById("description");
const featuresList = document.getElementById("features");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    const data = languages[lang];

    title.textContent = data.title;
    description.textContent = data.description;

    featuresList.innerHTML = "";
    data.features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  });
});