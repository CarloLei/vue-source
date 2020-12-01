function proxyData (vm, target, key) {
    Object.defineProperty(vm, key, {
        get () {
            // 在此处做拦截，将vm.title -> vm._data.title
            return vm[target][key];
        },
        set (newValue) {
            // 在此处做拦截，vm.title = xxx -> vm._data.title = xxx
            vm[target][key] = newValue;
        }
    })
}

export default proxyData;