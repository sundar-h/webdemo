import { CallReply } from '@/gen/invoke'
import request from '@/utils/request'

export const invoke = () => {
    return request.get<CallReply>('/v1/example/invoke', {
        params: {
            name: 'hello World',
        },
    })
}

export const invoke2 = async () => {
    try {
        console.log("request.get...")
        const { data } = await request.get<CallReply>("/api/invoke", {
            params: {
                name: 'Hello Web',
            },
        })
        console.log("received: ", data)
        return data.message
    } catch (err) {
        console.log("catch error:", err)
    }
}
