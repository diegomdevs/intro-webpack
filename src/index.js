const $links = document.getElementById("links");
const $name = document.querySelector("h1");

const data = {
  name: "Diego Gonzalez",
  nickname: "thiegom",
  description: "...",
  avatar: "...",
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/",
      username: "thiegom",
    },
    {
      name: "instagram",
      url: "https://instagram.com/",
      username: "thiegom",
    },
  ],
  links: [
    {
      name: "GitHub",
      url: "https://example.com/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "podcast",
      url: "https://example.com/",
      color: "yellow",
      emoji: "💬",
    },
  ],
  footer: "Made with Love in Venezuela",
};
const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links
    .map((link) => {
      return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
    <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
      href="${link.url}" target="_blank">
      ${link.name}
    </a>
    <span>${link.emoji}</span>
  </div>`;
    })
    .join("");
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
};
main();
