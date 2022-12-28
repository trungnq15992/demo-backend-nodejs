const {uploadSingleFile} = require('../services/fileService');
const {createCustomerService, createArrayCustomerService, getCustomersAPI} = require('../services/customerService');

module.exports = {
    postCreateCustomer : async (req,res) => {
        let {name, address, phone, email, description} = req.body;

        let imageUrl = "";

        if(!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        }else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }
        let customerData = {
            name, 
            address, 
            phone,
            email, 
            description, 
            image: imageUrl
        };
        let user = await createCustomerService(customerData);
        return res.status(200).json({
            errorCode: 0,
            data: user
        })
    },

    postCreateArrayCustomer: async (req, res) => {
        let customers = await getCustomersAPI(req.body.customers); 
        if(customers){
            return res.status(200).json({
                errorCode: 0,
                data: customers
            })
        }else {
            return res.status(200).json({
                errorCode: -1,
                data: customers
            })
        }
        
    },
    getCustomersAPI: async (req, res) => {
        let customers = await getCustomersAPI();
        //console.log(">> customers: ", customers);
        return res.status(200).json({
            errorCode: 0,
            data: customers
        })        
    }
    
}