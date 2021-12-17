/* MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista. */
const app = new Vue(
    {
        el :'#root',
        data: {
            todoArray: [
                {
                    testo: 'Pulire la camera',
                    done: true,
                },
                {
                    testo: 'Cucinare la pasta per pranzo',
                    done: false,
                },
                {
                    testo: 'Fare il borsone per padel',
                    done: false,
                },
                {
                    testo: 'Scegliere il film da vedere stasera',
                    done: false,
                }
            ],
        },
        methods:{
            deleteTodo: function(index) {
                this.todoArray.splice(index, 1);
            },
        }
    }
) 