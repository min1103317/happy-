function login(user, pass) {
    if (!user || !pass) {
        console.error(Invalid credentials);
        return false;
    }
    console.log(Logging in...);
    return true;
}

function register(user, pass, email) {
    console.log(Registering...);
    return true;
}

function resetPassword(email) {
    console.log(Sending reset email...);
    return true;
}

