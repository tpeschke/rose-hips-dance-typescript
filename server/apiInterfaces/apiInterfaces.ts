export interface Request {
    app: App,
    status: Function
}

export interface BasicParamsRequest extends Request {
    params: Parameters
}

interface App {
    get: Function
}

interface Parameters {
}

export interface Response {
    get: Function,
    send: Function,
    sendFile: Function
}

export interface Error {
    message: string
}