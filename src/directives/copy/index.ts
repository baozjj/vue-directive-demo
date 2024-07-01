import type { Directive, DirectiveBinding } from 'vue'
import copy from 'copy-to-clipboard'

interface elType extends HTMLElement {
  _targetContent: string
  _clickHandler: () => void
}

const copyDirective: Directive = {
  mounted(el: elType, binding: DirectiveBinding<string>) {
    el._targetContent = binding.value
    el._clickHandler = () => {
      if (el._targetContent) {
        copy(el._targetContent)
        console.log('复制成功')
      } else {
        console.log('复制失败：内容为空')
      }
    }

    el.addEventListener('click', el._clickHandler)
  },
  updated(el: elType, binding: DirectiveBinding<string>) {
    el._targetContent = binding.value
  },
  unmounted(el: elType) {
    el.removeEventListener('click', el._clickHandler)
  },
}

export default copyDirective
