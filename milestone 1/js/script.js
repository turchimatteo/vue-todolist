/* MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. */
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
    }
) 