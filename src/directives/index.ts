import type { App, Directive } from 'vue';
import loadingDirective from './loading/index';
// 其他指令

const directives: { [key: string]: Directive } = {
  loading: loadingDirective,
  // 其他指令
};

export default {
  install(app: App) {
    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key]);
    });
  }
};
