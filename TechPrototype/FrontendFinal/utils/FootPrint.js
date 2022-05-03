import config from "../config";

//根据用户id(uid)查询用户所有的足迹(返回trid数组)
export const getTridByUid = (uid) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/footprint/findByUid?uid=${uid}`,
            {
                method: 'POST',
            },
        )
            .then(response => response.json())
            .then(result => {
                console.log('SUCCESS IN getTridByUid ', result);

                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN getTridByUid ', error);
                reject(error);
            });
    });
};