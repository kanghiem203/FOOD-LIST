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