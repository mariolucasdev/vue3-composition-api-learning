<template>
    <h1> Lista de Tarefas </h1>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.title }}
        </li>
    </ul>

    <input type="text" v-model="name">
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Todos',
    setup() {
        const todos = [
            { id: 1, title: 'Tarefa 1' },
            { id: 2, title: 'Tarefa 2' },
            { id: 3, title: 'Tarefa 3' },
            { id: 4, title: 'Tarefa 4' },
            { id: 5, title: 'Tarefa 5' },
        ]

        const name = ref('default value')

        return {
            todos,
            name
        }
    }
}
</script>