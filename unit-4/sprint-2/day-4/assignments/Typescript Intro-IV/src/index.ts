interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function user ({type, name, age, occupation}: User): object {

    let userData = {
        type,
        name,
        age,
        occupation
    }

    return userData;
}

function admin ({type, name, age, role}: Admin): object {
    let adminData = {
        type,
        name,
        age,
        role
    }

    return adminData;
}