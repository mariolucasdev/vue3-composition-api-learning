<template>
    <div>
        {{ todo.name }} - {{ todo.description }} <br>
        Tempo de experiência {{ todo.experience_time }} {{ todo.type_time }} 
    </div>
    <hr>
</template>

<script>
export default {
    name: 'Todo',
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>