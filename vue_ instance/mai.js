// Our data object
var data = { a: 1 }

// The object is added to a Vue instance
var vm = new Vue({
    data: data
})
var attributeName = 'href'

var vmnew2 = new Vue({
    el: '#app',
    data: {
        eventname: 'click',
    },
    methods: {
        doSomething: function (){
            alert();
        }
    }

})

// Getting the property on the instance
// returns the one from the original data
console.log(vm.a === data.a) // => true

// Setting the property on the instance
// also affects the original data
vm.a = 2
console.log(data.a) // => 2

// ... and vice-versa
data.a = 3
console.log(vm.a) // => 3

vm.b = 4
console.log(data.b)

let obj = {
    foo: 'bar'
};

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})

var data2 = { a: 1 }
var vm2 = new Vue({
    el: '#app',
    data: data
})

console.log(vm2.$data === data) // => true
console.log(vm2.$el === document.getElementById('app')) // => true

// $watch is an instance method
vm2.$watch('a', function (newValue, oldValue) {
    // This callback will be called when `vm.a` changes
})

new Vue({
    data: {
        a: 1
    },
    created: function () {
        // `this` points to the vm instance
        console.log('a is: ' + this.a)
    }
})
// => "a is: 1"