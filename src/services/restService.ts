
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


    public async post<T extends Dto>(resource: string, data: T) {
        const response = await this.axiosInstance.post<T>(`${process.env.REACT_APP_SERVER_URL}/${resource}`, data);
        return response.data;
    }

    public async put<T extends Dto>(resource: string, data: T) {
        const response = await this.axiosInstance.put<T>(`${process.env.REACT_APP_SERVER_URL}/${resource}/${data.id}`, data);
        return response.data;
    }

    public async delete<T extends Dto>(resource: string, id: string) {
        const response = await this.axiosInstance.delete<T>(`${process.env.REACT_APP_SERVER_URL}/${resource}/${id}`);
        return response.data;
    }

    public async query<T extends Dto>(resource: string, params={}) {
        const response = await this.axiosInstance.get<T[]>(`${process.env.REACT_APP_SERVER_URL}/${resource}`);
        return response.data;
    }

}

export default RestService