document.addEventListener("DOMContentLoaded", () => {

    var url_string =  window.location.href
    var url = new URL(url_string);
    var category_name = url.searchParams.get("categoryid");
    console.log(category_name);

  function getCategory (){
    var url_string =  window.location.href
    var url = new URL(url_string);
    var category_name = url.searchParams.get("categoryid");
    return category_name

  }

  console.log(getCategory());



    let shopGallery = document.querySelector(".CategoryImg");

    fetch("./js/shop.json")
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
      var category_name = getCategory()
      console.log(category_name)

       /*everything is showing up in html*/

       
      data.forEach((category) => {
        var category_name = getCategory()
        category.

            if (category.hasButom === true){
                shopGallery.innerHTML += `

       
                <div class="CategoryImg__gallery">
                
        
                <div class="CategoryImg__img">
                    <img src="images/cd_afspillere/${category.image}" alt="">
                
                    <p class="CategoryImg__text">yamaha R-N402 network <br> HiFI Receiver</p>
                    <p class="CategoryImg__price">£429.00 £329.00</p>
                
                <div class="CategoryImg__btn">
                    <button class="CategoryImg__gallery__add">Add to cart</button>
                </div>
                </div>
                </div>
        
                `;
            

}
  else{
    shopGallery.innerHTML += `

       
    <div class="CategoryImg__gallery">
    

    <div class="CategoryImg__img">
        <img src="images/cd_afspillere/${category.image}" alt="">
    
        <p class="CategoryImg__text">yamaha R-N402 network <br> HiFI Receiver</p>
        <p class="CategoryImg__price">£429.00 £329.00</p>
    
</div>



    </div>

    `;

  }     



        

    })

});

          // --------her finde jeg alle Arrays og skriver i innerHtml det hele

        
         













               
           





});
