function login(user, pass) {
<<<<<<< HEAD
    console.log('Logging in...');
    return true;
}
=======
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
>>>>>>> d648b2a (Feature: 비밀번호 재설정 기능 추가)
