<template>
    <div  class="add-task">
        <h1>Add Tasks</h1>
        <form @submit.prevent="taskHandler">
            <div class="row">
                <label for="task">Today's Task</label>
                <input type="text" v-model="task">
            </div>
            <div class="row">
                <label for="start-date">Start date and Time</label>
                <input type="datetime-local" v-model="startDateTime">
            </div>
            <div class="row">
                <label for="end-date">End Date and Time</label>
                <input type="datetime-local" v-model="endDateTime">
            </div>
            <div class="row">
                <input type="radio" v-model="taskDeleteOption" id="manual" value="manual">
                <label for="manual">Manually delete task</label>
                <input type="radio" v-model="taskDeleteOption" value="auto">
                <label for="auto">Auto delete task</label>
            </div>
            <button class="btn">Add</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            task : '',
            startDateTime : '',
            endDateTime : '',
            taskDeleteOption : '',
        }
    },
    methods:{
        taskHandler(){
            console.log(this.task,this.startDateTime,this.endDateTime,this.taskCompleted,this.taskDeleteOption);
        }
    }
}
</script>

<style scoped>
.add-task{
    height: 80vh;
    width: 80vw;
    padding: 2rem;
    margin: 0 auto;
    font-size: 1.6rem;
}
input[type=radio]{
    width: 4rem;
}
</style>