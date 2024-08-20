export const getListFoodApi = () =>{
    return axios({
        url: 'https://6645cc65b8925626f8933a82.mockapi.io/food',
        method: 'GET',
    
    });
}

export const deleteFoodApi = (id) =>{
    return axios({
        url: `https://6645cc65b8925626f8933a82.mockapi.io/food/${id}`,
        method: 'DELETE',
    
    });
}
export const createFoodApi = (foodData) =>{
    return axios({
        url: 'https://6645cc65b8925626f8933a82.mockapi.io/food',
        method: 'POST',
        data: foodData,
    
    });
}

export const getDetailFoodApi = (id) =>{
    return axios({
        url: `https://6645cc65b8925626f8933a82.mockapi.io/food/${id}`,
        method: 'GET',
        
    
    });
}

export const updateFoodApi = (foodData) =>{
    return axios({
        url: `https://6645cc65b8925626f8933a82.mockapi.io/food/${foodData.id}`,
        method: 'PUT',
        data: foodData,
    
    });

}