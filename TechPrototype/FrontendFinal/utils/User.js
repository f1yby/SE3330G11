//注册后增加用户
export const addUser = (name, password, email, iconUrl) => {
    return new Promise(function (resolve, reject) {
        fetch(
            // TODO: 修改为本机 IP 地址
            `http://10.166.8.185:8080/user/add?name=${name}&password=${password}&email=${email}&iconUrl=${iconUrl}`,
            {
                method: 'POST',
            },
        )
            .then(response => response.json())
            .then(result => {
                console.log('SUCCESS IN ADD User ', result);
                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN ADD User ', error);
                reject(error);
            });
    });
};

//登录时验证用户信息
export const authUser = (name, password) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `http://10.166.8.185:8080/user/auth?name=${name}&password=${password}`,
            {
                method: 'POST',
            },
        )
            .then(response => response.json())
            .then(result => {
                console.log('SUCCESS IN AUTH User ', result);
                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN AUTH User ', error);
                reject(error);
            });
    });
};