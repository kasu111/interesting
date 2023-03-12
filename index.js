
const url = 
'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=1EYq8V9rjdFwVdk7mhQz7rqNYwTxttUVSalH2D5t'
const request = new Request(url)

async function getData(){
    try{
        const response = await fetch(request)
        const json = await response.json()
        if(response.status === 200){
            console.log('Fetching Success',json);
            return json.photos;
        }else{
            console.log('Request rejected', json.error);
        }
    }catch(error){
        console.log('Fetching fail',error);
    }
    
}

// getData();

async function showPhotos(){
    const photos = await getData();
    const photoContainer = document.querySelector('.nasa')
    
    photos.forEach(photo=>{
        photoContainer.innerHTML += `<div><img src=${photo.img_src}></div>`
    })
    
}

showPhotos()

if (typeof window !== 'undefined'){
    window.onload=async()=>{
        await getData()
       await showPhotos()
    };
}

  


