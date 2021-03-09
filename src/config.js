module.exports = {
    serverPort: 3001,
    clientPort: 3000,
    server: 'http://localhost',
    developer: 'Yakubov Kirill',

    getServerPath: function() {
        return `${this.server}:${this.serverPort}`
    },

    getClientPath: function() {
        return `${this.server}:${this.clientPort}`
    }
}