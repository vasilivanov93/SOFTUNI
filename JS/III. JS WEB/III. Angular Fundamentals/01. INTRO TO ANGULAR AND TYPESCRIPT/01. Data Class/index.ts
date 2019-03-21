class Data {
    constructor(public method: string,
                public uri: string,
                public version: string,
                public message: string,
                public response: string,
                public fulfilled: boolean) {
        this.method = method;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

// @ts-ignore
let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);