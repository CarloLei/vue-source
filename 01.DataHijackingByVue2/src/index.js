import Vue from 'vue';


// 对应的选项都传到options里面
let vm = new Vue({
    el: "#app",
    data () {
        return {
            title: "学生列表",
            classNum: 1,
            total: 2,
            teacher: ['张三', '李四'],
            info: {
                a: {
                    b: {
                        c: 1
                    }
                }
            },
            students: [
                {
                    id: 1,
                    name: '小红'
                },
                {
                    id: 2,
                    name: '小绿'
                }
            ]
        }
    }
})

// console.log(vm.info.a)
console.log(vm)