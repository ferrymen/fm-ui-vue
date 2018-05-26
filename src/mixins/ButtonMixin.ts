import { Vue, Component } from 'vue-property-decorator'

declare module 'vue/types/vue' {
  interface Vue {
    handleClick (): void
  }
}

@Component
export default class ButtonMixin extends Vue {
  handleClick (): void {
    alert('Clicked me!!!')
  }
}