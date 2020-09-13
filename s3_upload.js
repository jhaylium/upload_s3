
function getFile() {
    let sub_btn = document.getElementById('myFiles')
    let file = document.getElementById('uploadInput').files;
    console.log(file);
    // file_type = file[0]['type']
    file_name = file[0]['name'];
    get_presigned_url(file_name).then(
        data =>{
            console.log(data)
            upload_file(file, data)
        }
    )
    
}


async function get_presigned_url(file_name){
    console.log('Get Pre-signed url')
    let settings = {
        method: 'GET',
        mode: 'cors',
    };
    let url = _config.api.baseurl + 's3?key=' + file_name;
    let presigned_post = await fetch(url, settings);
    let data = await presigned_post.json()
    return data;


}


// function upload_file(files, signed_url){
//     console.log('Uploading File')
//     fetch(signed_url, {method:'PUT', 
//         body: files,
//         headers:{'Content-Type': files.type}
//     }).then((res) =>{
//         console.log('fetch sent')
//         if (!res.ok){
//             throw new Error(res.statusText);
//         }
//         return res.headers.get('ETag');
//     })
// }

function post_request(files, signed_url){
    settings = {method:'POST', 
        mode: 'cors'
    };

    url = signed_url['url'];
    fields = signed_url['fields'];
    console.log(url);
    console.log(fields);
    
}
