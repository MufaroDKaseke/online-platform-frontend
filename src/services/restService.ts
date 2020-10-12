
import axios, { } from 'axios'
import Dto from '../Models/dto'

class RestService<T extends Dto> {

    private axiosInstance = axios.create({
        headers: {
            "Content-Type": "application/json",
        }
    });
    constructor() {
        this.axiosInstance.interceptors.request.use(request => {
            request.headers.authorization = `Bearer ${process.env.AUTH_KEY}`;
            return request
        })
    }

    public async get(resource: string, id: string): Promise<T> {
        const response = await this.axiosInstance.get<T>(`${process.env.SERVER_URL}/${resource}/${id}`);
        return response.data
    }

}

export default RestService