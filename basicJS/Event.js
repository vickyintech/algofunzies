/*
Emitter objects emit named events that cause previously registered listeners to be called. So, an emitter object basically has two main features:

Emitting name events.
Registering and unregistering listener functions.

we are building:

EventEmitter class
on / addEventListener method
off / removeEventListener method
once method
emit method
rawListeners method
listenerCount method

reference: https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/
*/

class EventEmitter { 
    listeners = {} 

    addListener(event, fn) {
        this.listeners[event] = this.listeners[event] || [] 
        this.listeners[event].push(fn)
        return this
    }

    on(eventName, fn) {
        return this.addListener(eventName, fn)
     }

    emit(eventName, ...args) {
        this.listeners[eventName].forEach(fn => {
            fn(args)
        })
     }

    off(eventName, callback){}

    removeListener(eventName, callback) { }
}