
import axios, { } from 'axios'
import Dto from '../Models/dto'

class RestService {

    private axiosInstance = axios.create({
        headers: {
            "Content-Type": "application/json",
        }
    });
    constructor() {
        this.axiosInstance.interceptors.request.use(request => {
            request.headers.authorization = `Bearer ${process.env.REACT_APP_AUTH_KEY}`;
            return request
        })
    }

    public async get<T extends Dto>(resource: string, id: string): Promise<T> {
        const response = await this.axiosInstance.get<T>(`${process.env.REACT_APP_SERVER_URL}/${resource}/${id}`);
        return response.data
    }

}

export default RestService