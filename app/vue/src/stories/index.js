/* eslint-disable react/react-in-jsx-scope */

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';

import UiButton from '../components/UiButton.vue';


storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

/* eslint-enable react/react-in-jsx-scope */

storiesOf('UiButton', module)
    .add('with icon', () => ({
        components: {UiButton},
        data:       () => ({
            iconLeft:  '#envelope',
            content:   'Text',
            size:      'lg',
        }),
        template:   `<UiButton :iconLeft="iconLeft" :content="content" :size="size"></UiButton>`,
    }))
