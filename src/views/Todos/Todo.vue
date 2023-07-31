<template>
    <div>
        {{ todo.name }} - {{ todo.description }} <br>
        Tempo de experiência {{ todo.experience_time }} {{ todo.type_time }}
        
        <router-link :to="{ name: 'todos.edit', params: { id: todo.id } }">Editar</router-link>
        <a href="#" @click.prevent="deleteTodo"> Deletar</a>
    </div>
    <hr>
</template>

<script>
import TodosServices from '@/services/todos.service'

export default {
    name: 'Todo',
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    setup(props, { emit }) {
        const deleteTodo = () => {
            TodosServices.delete(props.todo.id)
                .then(() => emit('todoDeleted', props.todo.id))
                .catch(error => console.log(error))
        } 

        return {
            deleteTodo
        }
    }
}
</script>