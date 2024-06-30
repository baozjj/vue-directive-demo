import type { DirectiveBinding } from 'vue';

interface ElType extends HTMLElement {
  overlay: HTMLElement | null;
}

const loadingDirective = {
  mounted(el: ElType, binding: DirectiveBinding) {
    // 创建一个加载的元素
    const overlay = document.createElement('div');
    overlay.className = 'directives-loading-overlay';
    overlay.style.display = 'none';

    const spinner = document.createElement('div');
    spinner.className = 'directives-loading-spinner';

    overlay.appendChild(spinner);
    el.overlay = overlay;
    el.style.position = 'relative';
    el.appendChild(overlay);

    const size = Math.min(Math.min(el.clientWidth, el.clientHeight) / 2, 30);
    spinner.style.width = `${size}px`;
    spinner.style.height = `${size}px`;
    spinner.style.borderWidth = `${size / 10}px`;

    if (binding.value) {
      el.overlay!.style.display = 'flex';
      el.classList.add('directives-loading-active')
    } else {
      el.overlay!.style.display = 'none';
    }
  },
  updated(el: ElType, binding: DirectiveBinding) {
    // 根据绑定值的变化显示或隐藏加载效果
    if (binding.value) {
      el.overlay!.style.display = 'flex';
      el.classList.add('directives-loading-active')
    } else {
      el.overlay!.style.display = 'none';
      el.classList.remove('directives-loading-active')

    }
  },
  unmounted(el: ElType) {
    // 移除加载元素
    el.removeChild(el.overlay!);
    el.overlay = null;
  }
};

export default loadingDirective;
