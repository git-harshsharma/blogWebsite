

const FetchService = async (URL: string) => {
  
    const res = await fetch(URL);
    const data = await res.json();
   
    return await data
}


export default FetchService;
