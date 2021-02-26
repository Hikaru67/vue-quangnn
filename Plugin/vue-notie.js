export default {
    install (Vue, options) {
        Vue.mixin({
            methods: {
                $_vuenotie_success (message) {
                    alert({
                        type: 1,
                        text: message
                    })
                },
                $_vuenotie_warning (message) {
                    alert({
                        type: 2,
                        text: message
                    })
                },
                $_vuenotie_error (message) {
                    alert({
                        type: 3,
                        text: message
                    })
                },
                $_vuenotie_infor (message) {
                    alert({
                        type: 4,
                        text: message
                    })
                }
            }
        })
    }
}