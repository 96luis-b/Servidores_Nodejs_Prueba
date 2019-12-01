

// funcion que se activa con el boton de busqueda 
$(document).ready(function(){
    $(".alert").alert('close');

    $("#button-addon2").click(function(){

    let string = $("#inputSearch").val();  //variable que contiene el valor de la palabra clave que se quiere buscar
    if (string == "") {
        alert("Rellena el cuadro de texto");
        return
    }
    let url = scanValueSearch(string);

    if(url.check){
        request(url.url,createTagIframe,true);
        //createTagIframe(response.pageInfo.resultsPerPage, response.items, true);  //instacia del metodo createTagIframe para la creacion de los elementos que contendran los archivos
        return;
        }
    else{
        request(url.url.url, createContainerSingleVideo, false);
        }
    });
});

let request = (url, callback,check)=>{
    if ($("#containerVideo").find("div").length>0) {
        console.log($(containerVideo).find("div").length)
        $(containerVideo).empty();
        console.log($(containerVideo).find("div").length)
    }
    fetch(`${url}`, {mode: 'cors'})    //peticion con metodo fetch a url de youtube correrpondiente
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {  //promesa que procesa la respuesta obtenida 
        console.log('Request successful');
        let response = JSON.parse(data);    //parse a json la respuesta que viene en texto plano
        console.log(response);
        if (check) {
            callback(response.pageInfo.resultsPerPage,response.items);
        }else{
            callback(0, response);
        }

    })
    .catch(function(err) {  //capta cualquier error que se produca en el proceso
        console.error('Request failed', err)
    });
}

// se instancia idElementHTML y cargar los videos a los contenedores de videos(div.id = player)
let createTagIframe = (n,items)=>{
    document.getElementById("containerVideo").style.display = "block";
    for (let i = 0; i < n; i++) {   //loop de n resultados 
        let idElementHTML = createContainerVideo(i, items[i]);    // instancia de createContainerVideo para crear los contenedores donde se cagaran los videos
    }
}

let createContainerVideo = (n, video)=>{    //metodo para la creacion del contenedor del video y la etiqueda iframe para la reproduccion del archivo
    let containerVideo = document.getElementById("containerVideo")    //intancia de un contenedor padre donde estaran los contenedores hijos de los correspondientes videos
    if(video.id.videoId==undefined){    //validacion de existencia de videoId, donde se evita pasar un valor indefinido
        return;
    }else{
        containerVideo.innerHTML = `${containerVideo.innerHTML}<br>${insertTagIframe(n, video)}`   //insercion de script html para la creacion de los contenedores de videos     
    }
    return;
}

let createContainerSingleVideo = (n, video)=>{
    let containerVideo = document.getElementById("containerVideo");
    containerVideo.innerHTML = `${containerVideo.innerHTML}<br>${insertSingleVideo(n, video)}`
}

let checkListVideo = ()=>{
    // se chequea si hay elementos hijo dentro de container
    return Boolean;
}

let scanValueSearch = (string)=>{
    
    if (string.indexOf("http")>-1 && string.indexOf("youtube")>-1 &&string.indexOf("watch")>-1) {
        return {url:scanValue(string),check:false};
    }
    return {url:`${client.base_URL}search?part=snippet&q=${string}&key=${client.client_secret}`,check:true};
}


let scanValue = (string)=>{
        let chunks = string.split("=");
        let video = {id:{videoId:chunks[1]}}
        console.log(video)
        return {url:`${client.base_URL}videos?part=snippet&id=${video.id.videoId}&key=${client.client_secret}`,check:false};
    
}

let deleteChildren = ()=>{
    let containerVideo = document.getElementById("containerVideo");
    $(containerVideo).empty();
}

/*
    https://www.youtube.com/watch?v=ZY5QbEjAMFQ
    https://www.youtube.com/watch?v=dZNv9KMKO-E


    https://www.googleapis.com/youtube/v3/search?part=snippet&id=dZNv9KMKO-E&key=AIzaSyAEED7JtdhD4fPg-jWR2DlrZoK2Fj_JWNA
    https://www.googleapis.com/youtube/v3/search?part=snippet&id=dZNv9KMKO-E&key=AIzaSyAEED7JtdhD4fPg-jWR2DlrZoK2Fj_JWNA
    https://www.googleapis.com/youtube/v3/videos?part=snippet&id=dZNv9KMKO-E&key=AIzaSyAEED7JtdhD4fPg-jWR2DlrZoK2Fj_JWNA
    */
