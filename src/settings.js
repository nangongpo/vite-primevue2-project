export default {
  name: 'vite-primevue2-project',
  title: 'vite5-primevue2-project',
  ripple: true,
  inputStyle: 'outlined',
  layoutMode: 'static',
  profileMode: 'top',
  darkMenu: true,
  layout: 'blue',
  theme: 'blue',
  scale: 14, // 字体
  locale: { // 语言
    startsWith: '开始于', // Starts with
    contains: '包含', // Contains
    notContains: '不包含', // Not contains
    endsWith: '结束于', // Ends with
    equals: '等于', // Equals
    notEquals: '不等于', // Not equals
    noFilter: '无匹配数据', // No Filter
    lt: '小于', // Less than
    lte: '小于等于', // Less than or equal to
    gt: '大于', // Greater than
    gte: '大于等于', // Greater than or equal to
    dateIs: '日期是', // Date is
    dateIsNot: '日期不是', // Date is not
    dateBefore: '日期之前', // Date is before
    dateAfter: '日期之后', // Date is after
    clear: '清空', // Clear
    apply: '应用', // Apply
    matchAll: '全部匹配', // Match All
    matchAny: '任意匹配', // Match Any
    addRule: '添加规则', // Add Rule
    removeRule: '移除规则', // Remove Rule
    accept: '确定',
    reject: '取消',
    choose: '选择',
    upload: '上传',
    cancel: '取消',
    am: '上午', // AM
    pm: '下午', // PM
    datePickerTitle: ['year', 'date'],
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    yearName: '年',
    today: '今天',
    weekHeader: '周数', // Wk
    firstDayOfWeek: 0,
    dateFormat: 'yy/mm/dd',
    weak: '弱',
    medium: '中',
    strong: '强',
    passwordPrompt: '请输入密码',
    emptyFilterMessage: '未找到结果',
    emptyMessage: '无可用选项'
  },
  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,
  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: ['production', 'development']
}
