const path = require('path');

const uploadSingleFile = async (fileObject) => {
    
    //let uploadPath = __dirname + fileObject.name;
    let uploadPath = path.resolve(__dirname,"../public/images/upload");

    //get image extension
    let extName = path.extname(fileObject.name);

    //get image's name
    let baseName = path.basename(fileObject.name, extName);

    //create final path , eg: /upload/test.png
    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;

    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            path: finalName
        }
    } catch (err) {
        console.log(">>check err: ", err);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }
    }
}

const uploadMultipleFiles = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname,"../public/images/upload");
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArr.length; i++){
            //get image extension
            let extName = path.extname(filesArr[i].name);

            //get image's name
            let baseName = path.basename(filesArr[i].name, extName);

            //create final path , eg: /upload/test.png
            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = `${uploadPath}/${finalName}`;

            try {
                await filesArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: filesArr[i].name,
                    error: null
                });
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err)
                });
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultArr
        }
    } catch (error) {
        console.log(error);      
    }
}

module.exports = {
    uploadSingleFile, uploadMultipleFiles
}