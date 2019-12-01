
let insertTagIframe = (n, video)=>{
    console.log(document.getElementById("containerVideo"));
    let tag =
    `   <iframe id="player${n}" class="card-img col-3" type="text/html" width="100%" height="200rem" 
    src="http://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1&origin=http://example.com"
    frameborder="0"></iframe>   `
    return insertTagCard(tag, video.snippet.title, video.snippet.description);
}

let insertTagCard = (iframe, videoTitle, videoDescrip)=>{
    let tagTitle, tagDescrip;
    if(videoTitle==undefined){
        videoTitle = '';
        tagTitle = '';
    }else{
        tagTitle = `<h5 class="card-title">${videoTitle}</h5>`
    }
    if(videoDescrip==undefined){
        videoDescrip = "";
        tagDescrip = ''
    }else{
        tagDescrip = `<p class="card-text">${videoDescrip}</p>`
    }
    let tag = `<div id="videoList" class="card-body row">
    ${iframe}
    <div class="col-9">
      ${tagTitle}
      ${tagDescrip}
    </div>
  </div>`
  return tag;
}

let insertSingleVideo = (n, video)=>{
           /*
           https://www.youtube.com/watch?v=UXAdlaUhrlE
            */
    console.log(video);
    document.getElementById("containerVideo").style.display = "block";
    let tag = `
    <div id="downloadVideo" class="container">
            <div class="row">
                <div class="col-1">
                </div>  
                <div class="col-10 text-start">
                    <p><h1 id="file_name" class="file_name text_shadow align-items-start">Titulo:${video.items[0].snippet.title}</h1></p>
                </div>
                <div class="col-1">
                </div> 
            </div>
        </div>
        <div class="container">
            <div class="row ">
                <div class="col-1"></div>
                <div class="col-7">
                    <iframe id="player" class="card-img img-fluid" type="text/html" style="width:50%; height:13rem"
src="http://www.youtube.com/embed/${video.items[0].id}?enablejsapi=1&origin=http://example.com"
frameborder="0"></iframe>
                </div>
                <div class="col-4 text-center">
                    <form action="" class="pb-3">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1" class="h2 text_shadow" style="font-family: 'Righteous', cursive;">
                                Formato de descarga:
                            </label>
                            <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>

                            </select>
                        </div>
                    </form>
                    <button class="btn btn-danger">Descargar</button>
                    <button class="btn btn-danger">convertir otro video</button>
                </div>
            </div>   
        </div> `
        return tag;
}

/*
<div class="container card mt-2" style="width: 60rem;">
        <div class="card-body row">
            <img src="./img1.jpg" class="card-img col-3" alt="...">
            <div class="col-9">
                <h5 class="card-title">Titulo:</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
         </div>
    </div>
*/
