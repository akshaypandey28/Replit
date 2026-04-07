import axios from '../config/axiosConfig';

export const createProjectApi = async() =>{ //arrow function
    try{
        const response = await axios.post('/api/v1/projects'); //response is coming from backend
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(`error`);
        throw error;
    }
}


export const getProjectTree = async(projectId) => {
    try{
        const response = await axios.get(`/api/v1/projects/${projectId}/tree`); //response is coming from backend
        console.log(response.data);
        return response?.data?.data; //returning only the tree data from the response
    }
    catch(error){
        console.log(error);
        throw error;
    }
}