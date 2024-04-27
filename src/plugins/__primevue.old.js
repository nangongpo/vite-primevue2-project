/* eslint-disable no-unused-vars */
import PrimeVue from 'primevue/config/primevue.common'
import AutoComplete from 'primevue/autocomplete/autocomplete.common'
import Accordion from 'primevue/accordion/accordion.common'
import AccordionTab from 'primevue/accordiontab/accordiontab.common'
import Avatar from 'primevue/avatar/avatar.common'
import AvatarGroup from 'primevue/avatargroup/avatargroup.common'
import Badge from 'primevue/badge/badge.common'
import BadgeDirective from 'primevue/badgedirective/badgedirective.common'
import BlockUI from 'primevue/blockui/blockui.common'
import Breadcrumb from 'primevue/breadcrumb/breadcrumb.common'
import Button from 'primevue/button/button.common'
import Card from 'primevue/card/card.common'
import Carousel from 'primevue/carousel/carousel.common'
import CascadeSelect from 'primevue/cascadeselect/cascadeselect.common'
import Chart from 'primevue/chart/chart.common'
import Checkbox from 'primevue/checkbox/checkbox.common'
import Chip from 'primevue/chip/chip.common'
import Chips from 'primevue/chips/chips.common'
import ColorPicker from 'primevue/colorpicker/colorpicker.common'
import Column from 'primevue/column/column.common'
import ColumnGroup from 'primevue/columngroup/columngroup.common'
// import Calendar from 'primevue/calendar/calendar.common'
// import ConfirmDialog from 'primevue/confirmdialog/confirmdialog.common'
// import ConfirmPopup from 'primevue/confirmpopup/confirmpopup.common'
// import ConfirmationService from 'primevue/confirmationservice/confirmationservice.common'
import ContextMenu from 'primevue/contextmenu/contextmenu.common'
import DataTable from 'primevue/datatable/datatable.common'
import DataView from 'primevue/dataview/dataview.common'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions/dataviewlayoutoptions.common'
import DeferredContent from 'primevue/deferredcontent/deferredcontent.common'
import Dialog from 'primevue/dialog/dialog.common'
import Divider from 'primevue/divider/divider.common'
import Dock from 'primevue/dock/dock.common'
import Dropdown from 'primevue/dropdown/dropdown.common'
import Editor from 'primevue/editor/editor.common'
import Fieldset from 'primevue/fieldset/fieldset.common'
import FileUpload from 'primevue/fileupload/fileupload.common'
// import FullCalendar from 'primevue/fullcalendar/fullcalendar.common'
import ImagePreview from 'primevue/imagepreview/imagepreview.common'
import InlineMessage from 'primevue/inlinemessage/inlinemessage.common'
import Inplace from 'primevue/inplace/inplace.common'
import InputMask from 'primevue/inputmask/inputmask.common'
import InputNumber from 'primevue/inputnumber/inputnumber.common'
import InputSwitch from 'primevue/inputswitch/inputswitch.common'
import InputText from 'primevue/inputtext/inputtext.common'
import Knob from 'primevue/knob/knob.common'
import Listbox from 'primevue/listbox/listbox.common'
import MegaMenu from 'primevue/megamenu/megamenu.common'
import Menu from 'primevue/menu/menu.common'
import Menubar from 'primevue/menubar/menubar.common'
import Message from 'primevue/message/message.common'
import MultiSelect from 'primevue/multiselect/multiselect.common'
import OrderList from 'primevue/orderlist/orderlist.common'
import OrganizationChart from 'primevue/organizationchart/organizationchart.common'
import OverlayPanel from 'primevue/overlaypanel/overlaypanel.common'
import Paginator from 'primevue/paginator/paginator.common'
import Panel from 'primevue/panel/panel.common'
import PanelMenu from 'primevue/panelmenu/panelmenu.common'
import Password from 'primevue/password/password.common'
import PickList from 'primevue/picklist/picklist.common'
import ProgressBar from 'primevue/progressbar/progressbar.common'
import Rating from 'primevue/rating/rating.common'
import RadioButton from 'primevue/radiobutton/radiobutton.common'
import Row from 'primevue/row/row.common'
import Ripple from 'primevue/ripple/ripple.common'
import ScrollTop from 'primevue/scrolltop/scrolltop.common'
import SelectButton from 'primevue/selectbutton/selectbutton.common'
import Skeleton from 'primevue/skeleton/skeleton.common'
import Slider from 'primevue/slider/slider.common'
import Sidebar from 'primevue/sidebar/sidebar.common'
import SpeedDial from 'primevue/speeddial/speeddial.common'
import SplitButton from 'primevue/splitbutton/splitbutton.common'
import Splitter from 'primevue/splitter/splitter.common'
import SplitterPanel from 'primevue/splitterpanel/splitterpanel.common'
import Steps from 'primevue/steps/steps.common'
import StyleClass from 'primevue/styleclass/styleclass.common'
import TabMenu from 'primevue/tabmenu/tabmenu.common'
import TabView from 'primevue/tabview/tabview.common'
import TabPanel from 'primevue/tabpanel/tabpanel.common'
import Tag from 'primevue/tag/tag.common'
import Terminal from 'primevue/terminal/terminal.common'
import Textarea from 'primevue/textarea/textarea.common'
import TieredMenu from 'primevue/tieredmenu/tieredmenu.common'
import Timeline from 'primevue/timeline/timeline.common'
import Tree from 'primevue/tree/tree.common'
import TreeTable from 'primevue/treetable/treetable.common'
// import Toast from 'primevue/toast/toast.common'
// import ToastService from 'primevue/toastservice/toastservice.common'
import Toolbar from 'primevue/toolbar/toolbar.common'
import Tooltip from 'primevue/tooltip/tooltip.common'
import ToggleButton from 'primevue/togglebutton/togglebutton.common'
import TriStateCheckbox from 'primevue/tristatecheckbox/tristatecheckbox.common'
import Galleria from 'primevue/galleria/galleria.common'

/* 组件兼容处理 */
import Toast from './components/toast/Toast.vue'
import ToastService from './components/toastservice/ToastService'
import ConfirmDialog from './components/confirmdialog/ConfirmDialog.vue'
import ConfirmPopup from './components/confirmpopup/ConfirmPopup.vue'
import ConfirmationService from './components/confirmationservice/ConfirmationService'

import Calendar from './components/calendar/Calendar.vue'
// fullcalendar v6 https://www.npmjs.com/package/fullcalendar
import FullCalendar from './components/fullcalendar/FullCalendar.vue'

// import 'primevue/resources/themes/saga-blue/theme.css'
// import 'primevue/resources/primevue.min.css'
// import 'primeflex/primeflex.css'

const componentObj = {
  AutoComplete,
  Accordion,
  AccordionTab,
  Avatar,
  AvatarGroup,
  Badge,
  // BadgeDirective, // directive
  // BlockUI,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  // CascadeSelect,
  Chart,
  Checkbox,
  Chip,
  Chips,
  ColorPicker,
  Column,
  ColumnGroup,
  Calendar,
  ConfirmDialog,
  ConfirmPopup,
  ContextMenu,
  DataTable,
  DataView,
  DataViewLayoutOptions,
  // DeferredContent,
  Dialog,
  Divider,
  // Dock,
  Dropdown,
  // Editor,
  Fieldset,
  FileUpload,
  FullCalendar,
  // ImagePreview,
  InlineMessage,
  // Inplace,
  InputMask,
  InputNumber,
  InputSwitch,
  InputText,
  // Knob,
  Listbox,
  MegaMenu,
  Menu,
  Menubar,
  Message,
  MultiSelect,
  OrderList,
  OrganizationChart,
  OverlayPanel,
  Paginator,
  Panel,
  PanelMenu,
  Password,
  PickList,
  ProgressBar,
  Rating,
  RadioButton,
  Row,
  // ScrollTop,
  SelectButton,
  Skeleton,
  Slider,
  Sidebar,
  // SpeedDial,
  SplitButton,
  // Splitter,
  // SplitterPanel,
  Steps,
  TabMenu,
  TabView,
  TabPanel,
  Tag,
  Textarea,
  TieredMenu,
  Timeline,
  Tree,
  TreeTable,
  Toast,
  Toolbar,
  ToggleButton,
  TriStateCheckbox,
  // Galleria,
}   


export default {
  install(Vue, opts = {}) {
    const { locale, inputStyle = false, ripple = false } = opts
    // this.$primevue
    Vue.use(PrimeVue, { locale, ripple, inputStyle })
    // this.$toast
    Vue.use(ToastService)
    // this.$confirm
    Vue.use(ConfirmationService)

    Vue.directive('badge', BadgeDirective)
    Vue.directive('tooltip', Tooltip)
    Vue.directive('ripple', Ripple)
    Vue.directive('styleclass', StyleClass)

    // unplugin-primevue2-resolver 中按需引用
    // for (const key in componentObj) {
    //   Vue.component(key, componentObj[key])
    // }
  }
}
