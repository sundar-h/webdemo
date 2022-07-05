import axios, {AxiosError} from 'axios'

const request = axios.create({
    // baseURL: 'http://127.0.0.1:8101',
    // baseURL: '/api',
    timeout: 1000,
})

// 错误分为两种:
// 1. 4xx 5xx 错误
// 2. 业务错误

// 在拦截器里面 抽取data, 有一个不友好的地方:
// 实际使用的时候，编译器不能推倒出来 使用泛型指定精确的类型，编译器会报错: Property 'message' does not exist on type 'AxiosResponse '.
request.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response
        }
        throw new Error(response.statusText)
    },
    (err) => {
        // not 2XX
        if (axios.isAxiosError(err)) {
            // 2xx
            const e = err as  AxiosError<GrpcStatus>
            const message = e.response?.data.message || e.message

            return Promise.reject(message)
        } else {
            // 暂时不清楚什么流程会走到这个分支
            console.log('unexpected error: ', err)
            return 'An unexpected error occurred';
        }
    }
)

export interface GrpcStatus <T = any> {
    code: number
    data: T
    message: string
}

export default request
