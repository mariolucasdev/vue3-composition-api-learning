<template>
    <h1> Lista de Tarefas </h1>

    <router-link :to="{ name: 'todos.create' }">Adicionar</router-link>

    <div v-show="loading">
        <p>Carregando...</p>
    </div>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <todo :todo="todo" @todoDeleted="removeTodoList"/>
        </li>
    </ul>
</template>

<script>
import { onMounted, ref } from 'vue'

import TodosServices from '@/services/todos.service'
import Todo from './Todo.vue'

export default {
    name: 'Todos',

    setup() {
        const todos = ref([])
        const loading = ref(false)

        onMounted(() => {
            loading.value = true

            TodosServices.getAll()
                .then(response => todos.value = response.data)
                .catch(error => console.log(error))
                .finally(() => loading.value = false)
        })

        const removeTodoList = (id) => {
            todos.value = todos.value.filter(todo => todo.id !== id)
        }

        return {
            loading,
            todos,
            removeTodoList
        }
    },
    components: {
        Todo,
    }
}
</script>