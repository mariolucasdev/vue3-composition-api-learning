<template>
    <h1> Lista de Tarefas </h1>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.name }} - {{ todo.description }}
        </li>
    </ul>

    <input type="text" v-model="name">
</template>

<script>
import { onMounted, ref } from 'vue'

import TodosServices from '@/services/todos.service'

export default {
    name: 'Todos',

    setup() {
        const todos = ref([])

        onMounted(() => {
            TodosServices.getAll()
                .then(response => todos.value = response.data)
                .catch(error => console.log(error))
        })

        return {
            todos
        }
    }
}
</script>