// src/boot/custom-icons.js
import { boot } from 'quasar';

export default boot(({ app }) => {
  app.config.globalProperties.$q.iconSet.custom = {
    'custom-icon': '../assets/images/svg-icons/calendar-add-svgrepo-com.svg', // Path to your SVG file
  };
});
