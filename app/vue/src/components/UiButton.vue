<template>
    <b-button variant="primary" :size="size">
        <icon v-if="iconLeft" name="iconLeft" size="small"></icon>
        <span class="button__content" :class="{'pad--left': iconLeft, 'pad--right': iconRight}" v-if="content"
              v-text="content"></span>
        <icon v-if="iconRight" name="iconRight" size="small"></icon>
    </b-button>
</template>

<script>
    import Icon from './Icon.vue';

    export default {
        components: {
            Icon,
        },
        name:       'UiButton',
        props:      {
            iconLeft:  String,
            iconRight: String,
            content:   String,
            size:      String,
            onClick:   Function,
        },
    }
</script>

<style>

</style>