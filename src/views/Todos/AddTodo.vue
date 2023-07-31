<template>
    <div>
        <h1> Adicionar Tarefa </h1>

        <form action="#" method="post" @submit.prevent="addTodo">
            <label for="">Habilidade</label>
            <input type="text" name="name" v-model="todo.name" placeholder="name">
            <br>
            <br>
            
            <label for="">Descrição</label>
            <input type="text" name="description" v-model="todo.description" placeholder="description">
            <br>
            <br>
            
            <label for="">Tempo de Experiência</label>
            <input type="number" name="experience_time" v-model="todo.experience_time" placeholder="experience_time">
            <br>
            <br>
            
            <label for="">Tempo em</label>
            <select name="type_time" v-model="todo.type_time">
                <option value="years">Anos</option>
                <option value="months">Meses</option>
            </select>
            <br>
            <br>
            
            <input type="text" name="user_id" v-model="todo.user_id" placeholder="user_id">
            <br>
            <br>

            <button type="submit" :disabled="todo.loading">
                <span v-if="todo.loading"> Enviando </span>
                <span v-else> Enviar </span>
            </button>
        
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue';
import TodoService from '@/services/todos.service';

import router from '@/router';

export default {
    name: 'AddTodo',

    setup() {

        const todo = reactive({
            name: '',
            description: '',
            experience_time: '',
            type_time: '',
            user_id: 1,
            loading: false,
        })

        const addTodo = () => {
            todo.loading = true

            TodoService.addTodo({...todo})
                .then(() => router.push({ name: 'todos.index' }))
                .catch(error => console.log(error))
                .finally(() => todo.loading = false)
        }

        return {
            todo,
            addTodo,
        }
    }
}
</script>