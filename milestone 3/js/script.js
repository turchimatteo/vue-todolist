/* MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. */
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
            addTodo: function() {
                if (this.newTodo !== '') {
                    this.todoArray.push(
                        {
                            testo: this.newTodo,
                            done: false
                        }
                    )
                }
            }
        }
    }
) 