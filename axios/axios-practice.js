import axios from 'axios';

async function fetchData(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Data fetched successfully : axios', response.data);


    }
    catch(error){
        console.error('Error fetching data : axios',error);
    }
}
fetchData();