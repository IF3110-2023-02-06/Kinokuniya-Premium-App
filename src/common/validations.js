export const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/; // Alphanumeric and underscore
    return usernameRegex.test(username);
}

export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
}