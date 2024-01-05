class ApiError extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        error=[],
        stock=""

    ){
        super(message)
            this.statusCode =statusCode,
            this.data = null,
            this.message = message,
            this.success = false,
            this.error = error
            if(stock){
                this.stack = stack
            }else{
                Error.captureStackTrace(this.constructor) 
            }
        }
    } 

    export {ApiError}
