import m from 'mithril'

export const home = {
    controller: function(){
        var tasks = m.prop([
            {title: 'take out the trash'},
            {title: 'feed the dog'},
            {title: 'vacuum living room'}
        ])

        return { tasks }
    },
    view: (ctrl) => m('div', [
            m('p', 'hello world'),
            m('ul.grid.grid-2', ctrl.tasks().map((task) =>
                m('li', task.title)
            ))
        ])
}


