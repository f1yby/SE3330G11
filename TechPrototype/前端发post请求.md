# 前端发post请求


### fetch->rn-blob-fetch
1. react-native 提供的网络功能是fetch函数，但是在Andriod上发post请求会出现Network Fail的错误
比较好的解决方式是用rn-blob-fetch

2. rn-blob-fetch的很详细的使用方法
https://www.npmjs.com/package/rn-fetch-blob?activeTab=readme#user-content-multipartform-data-example--post-form-data-with-file-and-data


3. 我们在Web上传文件时，`<Form>` 组件是创建了一个form表单，通过post请求将formdata传递到服务器。
formdata是一个键值对数组。fetch和rn-blob-fetch都支持自己构造formdata。

4. RNFetchBlob.fetch('Method', 'url', {header}, formdata)返回一个promise，可以调用.then, .catch方法
上面的Method是请求，包括post, get等。 url是服务器的url，包括端口，可以在这里写路径，也可以在header中的path属性里写路径。header是请求头，根据调用api的不同写不同的请求头，一个比较重要的属性是'Content-Type', 如果是formdata的话，是
'multipart/form-data'。formdata是一个数组，数组元素是一个键值对对象。
例子：
```java
[
    // element with property `filename` will be transformed into `file` in form data
    { name : 'avatar', filename : 'avatar.png', data: binaryDataInBase64},
    // custom content type
    { name : 'avatar-png', filename : 'avatar-png.png', type:'image/png', data: binaryDataInBase64},
    // part file from storage
    { name : 'avatar-foo', filename : 'avatar-foo.png', type:'image/foo', data: RNFetchBlob.wrap(path_to_a_file)},
    // elements without property `filename` will be sent as plain text
    { name : 'name', data : 'user'},
    { name : 'info', data : JSON.stringify({
      mail : 'example@example.com',
      tel : '12345678'
    })},
  ]
```
name后接的表示属性名，data后接的表示属性值，filename是可选项，如果有，会自动将data转换为file类型，否则data视作utf8string类型。

5. 例子
```java
RNFetchBlob.fetch('Post', 'https://sjtu.edu.cn/8080', {
    'path': '/login',
    'Content-Type': 'text/plain',
},
    [
        {name: 'username', data: 'admin'},
        {name: 'password', data: '123456'},
    ]
)
.then (
    (res) => {
        console.log(res.tojson());
    }
)
.catch(
    ()=> {
        console.log('error');
    }
)

```