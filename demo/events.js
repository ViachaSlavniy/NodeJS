const EventEmmiter = require('events');

// const emmiter = new EventEmmiter();

// emmiter.on('anything', (data) => {
//     console.log('ON anything', data);
// })

// emmiter.emit('anything', {a: 1})
// emmiter.emit('anything', {b: 2})

// setTimeout(() => {
//     emmiter.emit('anything', {c: 3})
// }, 3000);

class Dispatcher extends EventEmmiter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]')
        this.on(eventName, cb);
    }
    dispatch(eventName, cb) {
        console.log('[Dispatching...]')
        this.emit(eventName, cb)
    }
}

const dispatch = new Dispatcher;

dispatch.subscribe('aa', data => {
    console.log('ON: aa', data);
});

dispatch.dispatch('aa', {'aa': 22});