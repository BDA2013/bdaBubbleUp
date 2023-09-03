const { connect, connection } = require('mongoose');
const serverName = 'bdaBubbleUp'

connect(`mongodb://127.0.0.1:27017/${serverName}`);

module.exports = connection;