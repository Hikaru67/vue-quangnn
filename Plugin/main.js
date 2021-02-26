
    Vue.component('vue-select2', {
        template: '#template-select2',
        props: ['options', 'selected'],
        model: {
            prop: 'selected',
            event: 'change'
        },
        mounted: function() {
            var vm = this;

            $(this.$el).select2();
            $(this.$el).on('change', function(e) {

                vm.$emit('change', vm.$el.value);
            });
        },
        updated: function() {
            $(this.$el).val(this.selected);
            $(this.$el).trigger('change');
        },
        beforeDestroy: function() {
            $(this.$el).select2('destroy');
        }
    });

    new Vue({
        el: '#app',
        data: function() {
            return {
                title: 'Select2 - Vuejs',
                selected: 'microsoft',
                select2: [
                    {key: 'apple', value: 'Apple'},
                    {key: 'google', value: 'Google'},
                    {key: 'microsoft', value: 'Microsoft'}
                ]
            };
        },
        methods: {
            addOption: function() {
                var now = new Date();
                this.select2.push({key: now.getTime(), value: now.getTime()});
            },
            randSelect: function() {
                var length = this.select2.length;
                var rand = Math.floor(Math.random() * length);
                this.selected = this.select2[rand].key;
            }
        }
    });
