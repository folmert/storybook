<template>
    <svg class="icon"
         :class="className">
        <use :xlink:href="name"></use>
    </svg>
</template>

<script>
const svgSpriteInjector = require('svg-sprite-injector');
svgSpriteInjector('icons.svg', {revision: 2});

export default {
    name: 'icon',

    props: {
        name: {
            type:     String,
            required: true,
        },
        size: {
            type:     String,
            required: true,
        },
    },

    computed: {
        className () {
            const prefix = 'icon--';
            return this.size ? prefix + this.size : '';
        },
    },
};
</script>

<style scoped lang="scss">
    .icon {
        display: inline-block;
        fill: currentColor;
        overflow: hidden;
        vertical-align: middle;

        &--small {
            height: 24px;
            width:  24px;
        }

        &--medium {
            height: 32px;
            width:  32px;
        }
    }
</style>