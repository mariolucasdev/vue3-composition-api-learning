import axios from 'axios'

export default class TodoService {

    static async getOne(id) {
        return axios.get(`/skills/${id}`)
    }

    static async getAll() {
        return axios.get('/skills')
    }

    static async addTodo(data) {
        return axios.post('/skills', data)
    }

    static async editTodo(id, data) {
        return axios.put(`/skills/${id}`, data)
    }

    static async delete(id) {
        return axios.delete(`/skills/${id}`)
    }
}