var search=document.getElementById("search");
search.addEventListener("keyup",e=>{
   // console.log(e.target.value);
    var searchText=e.target.value;
    getMovies(searchText);
});

function getMovies(searchText)
{
const imdbapi=`http://www.omdbapi.com/?s=${searchText}&apikey=34696847`;
window.fetch(imdbapi).then(movies=>{
    movies.json().then(data=>{
        //console.log(data.Search);
        const movieData=data.Search;
        var output=[];
        for(let movie of movieData){
            output +=`
            <div class="container">
                            <section id="movies">
                                <h1>${movie.Title}</h1>
                                <span class="badge badge-success">${movie.Year}</span>
                                <span class="badge badge-primary">${movie.Rated}</span>
                                <span class="badge badge-info">${movie.Released}</span>
                                <span class="badge badge-dark">${movie.Runtime}</span>
                                <span class="badge badge-danger">${movie.Genre}</span>
                                <p>
                                    <img src="${movie.Poster}" class="img-poster"/>
                                </p
                                <p>${movie.Director}</p>
                                <p>${movie.Language}</p>
                                <p>${movie.Plot}</p>                                
                                <p><button class="btn btn-dark btn-block">Go to Movie</button></p>                                

                            </section>
                        </div>`;
                        document.getElementById("template").innerHTML=output;
                        
        }
    })
.catch(err=>console.log(err));
})
.catch(err=>console.log(err));
}