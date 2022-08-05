<template>
<div class="tasks">
    <h1>Tasks</h1>
    <div class="task-list">
        <div class="task" v-for="el in tasks" :key="el.id">
            <p>{{el.task}} <span :class="{completed: el.status === 'completed' , incompleted : el.status === 'incompleted'}">{{el.status}}</span></p>
            <input type="text" v-model="updatedTask" v-if="el.editMode" placeholder="Update task">
            <p>{{el.start}}</p>
            <input type="datetime-local" v-model="updatedStartDateTime" v-if="el.editMode">
            <p>{{el.end}}</p>
            <input type="datetime-local" v-model="updatedEndDateTime" v-if="el.editMode">
            <br>
            <button @click="updateTaskHandler(el.id)" class="nBtn">Edit</button>
            <button @click="deleteTaskHandler(el.id)" class="nBtn">Delete</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            tasks : [
                { id: 1 , task : 'make vue todo app',start : '02/03/2022',end : '05/03/2022' , 'status':'completed',editMode:false},
                { id: 2 , task : 'make vue todo app',start : '02/03/2022',end : '05/03/2022','status':'incompleted',editMode:false},
                { id: 3, task : 'make vue todo app',start : '02/03/2022',end : '05/03/2022','status':'completed',editMode:false},
                { id: 4, task : 'make vue todo app',start : '02/03/2022',end : '05/03/2022','status':'incompleted',editMode:false},
                { id: 5, task : 'make vue todo app',start : '02/03/2022',end : '05/03/2022','status':'completed',editMode:false},
                { id: 6, task : 'make vue todo app',start : '02/03/2022',end : '05/03/2022','status':'completed',editMode:false}
            ],
            updatedTask : '',
            updatedStartDateTime : '',
            updatedEndDateTime : ''
        }
    },
    methods:{
        updateTaskHandler(id){
            this.tasks.forEach(el=>{
                if(el.id === id){
                    return el.editMode = !el.editMode;
                }
            })
            console.log('task updated!!!');
        },
        deleteTaskHandler(id){
            this.tasks = this.tasks.filter(el=>el.id !== id);
            console.log('task deleted',id);
        }
    }
}
</script>

<style scoped>
.tasks{
    width: 80vw;
    height: auto;
    margin: 0 auto;
    padding: 2rem;
    font-size: 1.6rem;
}

.task-list{
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 2rem;
    justify-content: center;
}

.task{
    border: .2rem solid #666;
    padding:2rem;
    border-radius: 2rem;
    text-align: center;
}
.task input{
    width: 90%;
}
.completed{
    font-size: .9rem;
    color: #42b983;
}
.incompleted{
    font-size: .9rem;
    color: blue;
    }
.nBtn{
    /* width: 40%; */
    margin: 0 1rem;
    padding: 1rem 2rem;
}
</style>