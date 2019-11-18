var configValues = require('./config')

module.exports = {
    getDbConnectionString: function(){
        return `mongodb+srv://${configValues.username}:${configValues.password}@cluster0-yojrs.mongodb.net/test?retryWrites=true&w=majority`
    }
}