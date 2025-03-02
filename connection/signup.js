const mongoose = require('mongoose')

async function connectsignupdb(url) {
    return mongoose.connect(url)
}

module.exports = { connectsignupdb }