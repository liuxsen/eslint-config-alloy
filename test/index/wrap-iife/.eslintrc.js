module.exports = {
    rules: {
        /**
         * @memberof best-practices
         * @description @fixable 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
         */
        'wrap-iife': [
            'error',
            'inside',
            {
                functionPrototypeMethods: true
            }
        ]
    }
};