export const checkImage = (file) => {
    let err = "";
    if(!file){
        return err = "File does not exist.";
    }
//?1 mb
    if(file.size > 1024 * 1024){
         return (err = "File size must be less than 1 Mb.");
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      return (err = "Image must be jpeg or png.");
    }

    return err;
}

export const imageUpload = async (images) => {
    let imgArr = [];
    for(const item of images){
        const formData = new FormData();

        if(item.camera){
            formData.append("file", item.camera);
        }else{
            formData.append("file", item);  
        }

        
        formData.append("upload_preset", "chat-app");
        formData.append("cloud_name", "nitesh9609");

        const res = await fetch("https://api.cloudinary.com/v1_1/nitesh9609/image/upload", {
            method: "POST",
            body: formData
        })

        const data = await res.json();
        imgArr.push({ public_id: data.public_id, url: data.secure_url });
        
      
    }
    return imgArr;
}