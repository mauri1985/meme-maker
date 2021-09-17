const baseUrl = 'https://api.imgflip.com/get_memes';

export async function getMemesFromInternet(){
    const response = await fetch(baseUrl);
    const responseJSON = await response.json();
    return responseJSON;           
}

export default {
    getMemesFromInternet
}