
export const getGifs = async ( category ) => {
    const api_key = 'pJUI3oa3OLjRyN3dIU9CNzlAsOd4qQin';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=20`
    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map(img => ({
        id: img.id,
        title : img.title,
        url: img.images.downsized_medium.url, 
    }))
    return gifs;
}