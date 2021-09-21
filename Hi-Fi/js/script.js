document.addEventListener("DOMContentLoaded", () => {
  // ----------------her finde jeg Nav list

  let categoriesContainer = document.querySelector(".categoriesContainer");

  fetch("./js/shop.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // ----------------her finde alle Arrays og skriver i innerHtml det hele

      data.Categories.forEach((category) => {
        console.log(category.image);
        categoriesContainer.innerHTML += `
                <article class="" style="width: 255px; height: 255px; background-image: url('./Imagesshop/${category.image}')">
                    <a href="#" class="categoriesContainer__a ">${category.categoryName}</a>
                </article>
    `;
      });
    });
});
