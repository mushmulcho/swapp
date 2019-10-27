export const authHeader = () =>{
    let user = JSON.parse(localStorage.getItem('user'));
    
    if(user && user.token)
        return {'Athorization': 'Bearer ' + user.token};
    else
        return {};
}