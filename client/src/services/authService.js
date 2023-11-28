
export const register = async(email,password) => {
    const result = request.post(`${baseUrl}/register`, {
        email,
        password
    });
    return result
}