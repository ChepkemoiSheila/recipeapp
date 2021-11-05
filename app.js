//select all items

const recipeContainer = document.querySelector(".recipeContainer");
const searchForm  = document.querySelector(".searchForm");
const resultsDiv = document.querySelector(".resultsRecipe");
let inputVal= "";
const APP_ID = "0799e8f5";
const APP_Key = "3d70713e147143145fd1c2009ec5f470";



searchForm.addEventListener("submit", (e)=>{
e.preventDefault();
inputVal = e.target.querySelector("input").value;
fetchAPI();
});

async function fetchAPI() {
    const base_URL = `https://api.edamam.com/search?q=${inputVal}&app_id=${APP_ID}&app_key=${APP_Key}&to=30`;
    const response = await fetch(base_URL);
    const data = await response.json();
    generatehtml(data.hits);
    console.log(data);
    
}
function generatehtml(results) {
    let resultsHtml = "";
    results.map(result =>{
        resultsHtml += 
        `
        <div class="resultsItem">
            <img src="${result.recipe.image}">
                <div class="description">
                 <h2 class= "title">${result.recipe.label}</h2>
                 <a class = "view" href="${result.recipe.url}" target= "_blank">View Recipe</a>
                </div>
                 <p>Meal Type: ${result.recipe.mealType}</p>
                 <p>Dish Type: ${result.recipe.dishType}</p>
                 <p>Cuisine Type: ${result.recipe.cuisineType}</p>
                        

        </div>
        `
    })
    resultsDiv.innerHTML = resultsHtml;

}