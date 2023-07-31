import axios from 'axios'

export default class TodoService {

    static async getAll() {
        return axios.get('/skills')
    }

    static async addTodo(data) {
        return axios.post('/skills', data)
    }
}