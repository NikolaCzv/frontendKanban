import history from "./history";

const userLogin = user => {
    return {
        type: "USER_LOGIN",
        user
    }
}

export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}


export const login = user => {
    return function(dispatch){
        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }

        fetch("https://still-bayou-02941.herokuapp.com/api/v1/login", reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                alert("Invalid Password or Username");
            } else {
                localStorage.setItem("token", data.token);
                dispatch(userLogin(data));
                history.push("/dashboard");
            }
        })
    }
}

export const checkUser = token => {
    return function(dispatch){
        const reqObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        fetch("https://still-bayou-02941.herokuapp.com/api/v1/current_user", reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                history.push("/login");
            } else {
                dispatch(userLogin(data));
            }
        })
    }
}

export const signUp = user => {
    return function(dispatch){
        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }

        fetch("https://still-bayou-02941.herokuapp.com/api/v1/signup", reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                alert("Invalid Input.");
            } else {
                localStorage.setItem("token", data.token);
                dispatch(userLogin(user));
                history.push("/dashboard");
            }
        })
    }
}