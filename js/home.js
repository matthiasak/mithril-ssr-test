import m from 'mithril'

let tasks = m.prop([
    {title: 'take out the trash'},
    {title: 'feed the dog'},
    {title: 'vacuum living room'}
])

let randomIndex = (arr) => Math.floor(Math.random()*arr.length)

let randomIn = (arr) => arr[randomIndex(arr)]

let addRandom = () => {
    console.log('adding random')
    let t = tasks()
    t.push(randomIn(t))
    tasks(t)
}

export const home = {
    controller: function(){
        return { tasks }
    },
    view: (ctrl) => m('div', [
            m('p', 'hello world'),
            m('ul.grid.grid-2', ctrl.tasks().map((task) =>
                m('li', task.title)
            )),
            m('hr'),
            m('button', {onclick: addRandom}, 'add random')
        ])
}


