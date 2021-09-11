const getfetch =async url=>{
    const res = await fetch(url);
    const data = await res.json()
    return data.meals[0];
}
const getSerch=()=>{
    const searchInput = document.getElementById('search-box');
    const searchInputValue = searchInput.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`;
    displayResult(url)
}

const displayResult = details =>{
    getfetch(details).then(data=>{
    const veiwDetail = document.getElementById('search-result');
    veiwDetail.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${data.strMealThumb}" class="card-img-top h-50 img-fluid" alt="Image">
    <div class="card-body">
      <h5 class="card-title">${data.strMeal}</h5>
      <p class="card-text">${data.strInstructions.slice(0,200)}.</p>
      <a href="${data.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    veiwDetail.appendChild(div);
    })
}


    /* const veiwDetail = document.getElementById('details-view');
    veiwDetail.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${details.strMealThumb}" class="card-img-top h-50 img-fluid" alt="Image">
    <div class="card-body">
      <h5 class="card-title">${details.strMeal}</h5>
      <p class="card-text">${details.strInstructions.slice(0,200)}.</p>
      <a href="${details.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    veiwDetail.appendChild(div); */
    