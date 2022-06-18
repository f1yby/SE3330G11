import config from "./config";

export const getAllPost = () => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/post/findAll`,
            {
                method: 'POST',
            },
        )
            .then(result => {
                console.log('SUCCESS GET POST FOR USER', result);
                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN GETALLPOST ', error);
                reject(error);
            });
    });
};


export const setLike = (uid, pid) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/post/like?uid=${uid}&pid=${pid}`,
            {
                method: 'POST',
            },
        )
            .then(result => {
                console.log('SUCCESS GET POST FOR USER', result);
                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN GETALLPOST ', error);
                reject(error);
            });
    });
}