import { normalizePath } from 'vite'
import globalComponent from './components/global-component.js'

const getPrimeVuePath = (name) => normalizePath(`primevue2/${name.toLowerCase()}`)

const components = [
  'AutoComplete',
  'Accordion',
  'AccordionTab',
  'Avatar',
  'AvatarGroup',
  'Badge',
  // BadgeDirective, // BadgeDirective is a directive that must be installed globally
  'BlockUI',
  'Breadcrumb',
  // 'Button', // 与HTML元素一致, 单独注册
  'Card',
  'Carousel',
  'CascadeSelect',
  'Chart',
  'Checkbox',
  'Chip',
  'Chips',
  'ColorPicker',
  'Column',
  'ColumnGroup',
  'Calendar',
  'ConfirmDialog',
  'ConfirmPopup',
  // 'ConfirmationService',  // The ConfirmationService must be installed globally
  'ContextMenu',
  'DataTable',
  'DataView',
  'DataViewLayoutOptions',
  'DeferredContent',
  'Dialog',
  'Divider',
  'Dock',
  'Dropdown',
  'Editor',
  'Fieldset',
  'FileUpload',
  'FullCalendar',
  'ImagePreview',
  'InlineMessage',
  'Inplace',
  'InputMask',
  'InputNumber',
  'InputSwitch',
  'InputText',
  'Knob',
  'Listbox',
  'MegaMenu',
  'Menu',
  'Menubar',
  'Message',
  'MultiSelect',
  'OrderList',
  'OrganizationChart',
  'OverlayPanel',
  'Paginator',
  'Panel',
  'PanelMenu',
  'Password',
  'PickList',
  'ProgressBar',
  'ProgressSpinner',
  'Rating',
  //'Ripple', // Ripple is a directive that must be installed globally
  'RadioButton',
  'Row',
  'ScrollPanel',
  'ScrollTop',
  'SelectButton',
  'Skeleton',
  'Slider',
  'Sidebar',
  'SpeedDial',
  'SplitButton',
  'Splitter',
  'SplitterPanel',
  'Steps',
  //'StyleClass', // StyleClass is a directive that must be installed globally
  'TabMenu',
  'TabView',
  'TabPanel',
  'Tag',
  'Terminal',
  'Textarea',
  'TieredMenu',
  'Timeline',
  'Tree',
  'TreeTable',
  'Toast',
  // 'ToastService',  // The ToastService must be installed globally
  'Toolbar',
  // 'Tooltip', // Tooltips are a directive that must be installed globally
  'ToggleButton',
  'TriStateCheckbox',
  'Galleria'
]

export const optimizePrimeVueDeps = globalComponent.paths

export const replaceComponents = globalComponent.names.filter(v => v.toLowerCase())

export const initialComponents = ['Badge', 'Breadcrumb', 'Card', 'Checkbox', 'Column','ColumnGroup', 'DataTable', 'Dialog', 'Divider', 'Dropdown', 'FileUpload', 'ImagePreview', 'Inplace', 'InputMask', 'InputNumber', 'InputSwitch', 'InputText', 'Listbox', 'MultiSelect', 'Paginator', 'Password', 'RadioButton', 'Row', 'Textarea', 'Toolbar'].map(v => v.toLowerCase())

export function PrimeVue2Resolver(options = {}) {
  return {
    type: 'component',
    resolve: (name) => {
      // 全局组件单独处理
      if (globalComponent.names.includes(name)) return

      if (components.includes(name)) {
        return {
          from: getPrimeVuePath(name),
          sideEffects: []
        }
      }
    }
  }
}
