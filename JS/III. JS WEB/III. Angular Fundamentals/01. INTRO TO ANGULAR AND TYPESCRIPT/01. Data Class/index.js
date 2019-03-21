var Data = /** @class */ (function () {
    function Data(method, uri, version, message, response, fulfilled) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfilled;
        this.method = method;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return Data;
}());
// @ts-ignore
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
