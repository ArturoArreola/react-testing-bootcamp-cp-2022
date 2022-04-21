export const getApiData = async(picDate) => {

    const url = `https://api.nasa.gov/planetary/apod?api_key=aQrMhIowQW5VUCncTjHP3jwfGzXBENByixh1xkce&date=${picDate}`;
    const response = await fetch(url);

    const data = await response.json();
    return {
        title: data.title,
        url: data.url,
        date: data.date,
        explanation: data.explanation
    };
}