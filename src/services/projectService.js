const Project = require('../models/project');
module.exports = {
    createProject: async (data) => {
        // if (data.type === "EMPTY-PROJECT") {
        //     console.log(">>connected");
        //     let result = await Project.create(data);
        //     //console.log(">>data: ");
        //     return result;
        // }
        if (data.type === "ADD-USERS") {
            let myProject = await Project.findById(data.projectId).exec();
            console.log(myProject);
            return "ok";
        }
    }
}