import ElementPlus from "element-plus";
import "../element-variables.scss";
import { App } from "vue";

export default (app: App<Element>): void => {
  app.use(ElementPlus);
};
