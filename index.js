Vue.component('eze-lista', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['items', 'titulo', 'pie'],
    template:
        `
    <div>
        <h3>{{titulo}}</h3>
        <button @click="addItem">Add item</button>
            <ul>
                <li v-for="item in items">
                {{item.id}} - {{ item.titulo }}
                </li>
            </ul>
        <h3>{{pie}}</h3>
    </div>`,
    methods: {
        addItem() {
            //app.items2.push({id:2,titulo:'item agregado'})
            this.$emit('onEze')
        }
    }
})





var app = new Vue({
    el: '#app',
    data: {
        mosMsg: true,
        message: 'Probando Vue.js!',
        message2: 'Input de contador',
        contador: 1,
        items: [
            { id: 1, titulo: 'Primer post' },
            { id: 2, titulo: 'Segundo post' },
            { id: 3, titulo: 'Tercer post' }
        ],
        items2: [
            { id: 10, titulo: 'Primer post de items2' },
            { id: 20, titulo: 'Segundo post de items2' },
            { id: 30, titulo: 'Tercer post de items2' }
        ]
    },
    methods: {
        sumarUno() {
            this.contador++
        },
        handleClick: function () {
            // var valor = Math.max(app.items.id);

            app.items.push({ id: 1, titulo: 'agregado' });
        },
        handleonEze2: function () {
            this.items2.push({ id: 1, titulo: 'Nuevo item' })
        }
    }

});


//app.items.push({id:20,titulo:'agregado'});

