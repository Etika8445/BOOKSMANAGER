import axios from "axios";
async function getdata({titlename}){
    const URL=`https://openlibrary.org/search.json?q=${titlename}&limit=10&page=1`;
    const response= await axios.get(URL);
    console.log(response.data.docs);
    return response.data.docs;
}
export {getdata};