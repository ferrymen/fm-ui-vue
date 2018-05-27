import { storiesOf } from '@storybook/vue';

import Welcome from './Welcome.vue';

storiesOf('Get start', module)
  .add('Step1', () => ({
    render: h => h(Welcome),
  }))
  .add('Step2', () => ({
    template: `
      <div class="main">
        yarn or npm install
      </div>
    `
  }))
  .add('Step3', () => ({
    template: `
      <div class="main">
        yarn start or npm start
      </div>
    `
  }))