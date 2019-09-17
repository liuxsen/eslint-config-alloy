module.exports = {
    rules: {
        /**
         * 禁止直接使用别的组件的 propTypes
         * @reason 不强制要求写 propTypes
         */
        'react/forbid-foreign-prop-types': 'off'
    }
};