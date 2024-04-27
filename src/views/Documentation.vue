<template>
  <div class="grid">
    <div class="col-12">
      <div class="card docs">
        <h4>当前版本</h4>
        <p>Node18 + Vite5 + Vue2.7 + PrimeVue2</p>

        <h4>入门</h4>
        <p>
          {{ settings.title }} 是基于<a href="https://cn.vitejs.dev/">Vite5
          </a>的Vue应用程序模板，为Vue项目提供了现成的标准工具
        </p>

        <p>在源码文件夹下使用npm安装依赖库。</p>

        <CodeHighlight> npm install </CodeHighlight>

        <p>
          最后一步是使用服务脚本运行应用程序，并导航至<b>http://localhost:5173</b>以查看应用程序。就是这样，您现在可以开始使用{{
            settings.title
          }}模板开发应用程序。
        </p>

        <CodeHighlight> npm run dev </CodeHighlight>

        <h4>Vite脚本</h4>
        <CodeHighlight>
          "npm run dev": Starts the development server "npm run build": Builds
          the application for deployment.
        </CodeHighlight>

        <h4>结构</h4>
        <p>
          {{ settings.title }}包含2个主要部分；应用程序布局和资源。src文件夹中的<i>App.vue</i>是包含基本布局模板的主要组件，而所需的资源（如布局的SASS结构）则位于<b>public/resource/layout</b>文件夹中。
        </p>

        <h4>模板</h4>
        <p>
          主要布局是<i>App.vue</i>的模板，它分为几个子组件，例如顶部栏，内容，菜单和页脚。这是<i>App.vue</i>组件的模板，该模板
          实现了诸如菜单状态，布局模式和其他可配置选项之类的逻辑。
        </p>
        <CodeHighlight>
          <template v-pre>
            &lt;div :class="containerClass" @click="onDocumentClick"&gt;
            &lt;div&gt; &lt;AppTopBar :topbarMenuActive="topbarMenuActive"
            :profileMode="profileMode" :horizontal="layoutMode === 'horizontal'"
            :activeTopbarItem="activeTopbarItem"
            @menubutton-click="onMenuButtonClick"
            @topbar-menubutton-click="onTopbarMenuButtonClick"
            @topbar-item-click="onTopbarItemClick"&gt;&lt;/AppTopBar&gt;
            &lt;transition name="layout-menu-container"&gt; &lt;div
            :class="menuClass" @click="onMenuClick" v-show="isMenuVisible()"&gt;
            &lt;div class="menu-scroll-content"&gt; &lt;AppInlineProfile
            v-if="profileMode === 'inline' &amp;&amp; layoutMode !==
            'horizontal'" @profile-click="onProfileClick"
            :expanded="profileExpanded"&gt;&lt;/AppInlineProfile&gt; &lt;AppMenu
            :model="menu" :layoutMode="layoutMode" :active="menuActive"
            @menuitem-click="onMenuItemClick"
            @root-menuitem-click="onRootMenuItemClick"&gt;&lt;/AppMenu&gt;
            &lt;/div&gt; &lt;/div&gt; &lt;/transition&gt; &lt;div
            class="layout-main"&gt; &lt;router-view /&gt; &lt;/div&gt;
            &lt;AppConfig :layoutMode="layoutMode"
            @layout-change="onLayoutChange" :darkMenu="darkMenu"
            @menu-color-change="onMenuColorChange" :profileMode="profileMode"
            @profile-mode-change="onProfileModeChange" :layout="layout"
            :layouts="layoutColors" :layoutSpecialColors="layoutSpecialColors"
            @layout-color-change="onLayoutColorChange" :theme="theme"
            :themes="themeColors"
            @theme-change="onThemeChange"&gt;&lt;/AppConfig&gt; &lt;div
            class="layout-mask"&gt;&lt;/div&gt; &lt;AppFooter /&gt; &lt;/div&gt;
            &lt;/div&gt;
          </template>
        </CodeHighlight>

        <h4>菜单</h4>
        <p>
          Menu是基于PrimeNG MenuModel
          API在<i>AppMenu.vue</i>文件中定义的单独组件。为了定义菜单项，请导航至<i>App.vue</i>文件的数据部分，并使用menu属性将您自己的模型定义为嵌套结构。这是演示应用程序中的菜单组件。请注意，菜单对象已绑定到AppMenu组件的model属性，如下所示。
        </p>

        <div style="overflow: auto; height: 400px">
          <CodeHighlight lang="js">
            data() &#123; return &#123; menu : [ {label: 'Dashboard', icon: 'pi
            pi-fw pi-home', to:'/'}, { label: 'UI Kit', icon: 'pi pi-fw
            pi-sitemap', items: [ {label: 'Form Layout', icon: 'pi pi-fw
            pi-id-card', to: '/formlayout'}, {label: 'Input', icon: 'pi pi-fw
            pi-check-square', to: '/input'}, {label: 'Button', icon: 'pi pi-fw
            pi-mobile', to: '/button'}, {label: 'Table', icon: 'pi pi-fw
            pi-table', to: '/table'}, {label: 'List', icon: 'pi pi-fw pi-list',
            to: '/list'}, {label: 'Tree', icon: 'pi pi-fw pi-share-alt', to:
            '/tree'}, {label: 'Panel', icon: 'pi pi-fw pi-tablet', to:
            '/panel'}, {label: 'Overlay', icon: 'pi pi-fw pi-clone', to:
            '/overlay'}, {label: 'Menu', icon: 'pi pi-fw pi-bars', to:
            '/menus'}, {label: 'Message', icon: 'pi pi-fw pi-comment', to:
            '/messages'}, {label: 'File', icon: 'pi pi-fw pi-file', to:
            '/file'}, {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to:
            '/chart'}, {label: 'Misc', icon: 'pi pi-fw pi-circle-off', to:
            '/misc'}, ] }, { label: "Utilities", icon:'pi pi-fw pi-globe',
            items: [ {label: 'Display', icon:'pi pi-fw pi-desktop',
            to:'/display'}, {label: 'Elevation', icon:'pi pi-fw
            pi-external-link', to:'/elevation'}, {label: 'Flexbox', icon:'pi
            pi-fw pi-directions', to:'/flexbox'}, {label: 'Icons', icon:'pi
            pi-fw pi-search', to:'/icons'}, {label: 'Widgets', icon:'pi pi-fw
            pi-star', to:'/widgets'}, {label: 'Grid System', icon:'pi pi-fw
            pi-th-large', to:'/grid'}, {label: 'Spacing', icon:'pi pi-fw
            pi-arrow-right', to:'/spacing'}, {label: 'Typography', icon:'pi
            pi-fw pi-align-center', to:'/typography'}, {label: 'Text', icon:'pi
            pi-fw pi-pencil', to:'/text'}, ] }, { label: 'Pages', icon: 'pi
            pi-fw pi-clone', items: [ {label: 'Crud', icon: 'pi pi-fw
            pi-pencil', to: '/crud'}, {label: 'Calendar', icon: 'pi pi-fw
            pi-calendar-plus', to: '/calendar'}, {label: 'Landing', icon: 'pi
            pi-fw pi-user-plus', url: 'resource/pages/landing.html', target:
            '_blank'}, {label: 'Login', icon: 'pi pi-fw pi-sign-in', to:
            '/login'}, {label: 'Invoice', icon: 'pi pi-fw pi-dollar', to:
            '/invoice'}, {label: 'Help', icon: 'pi pi-fw pi-question-circle',
            to: '/help'}, {label: 'Error', icon: 'pi pi-fw pi-times-circle', to:
            '/error'}, {label: 'Not Found', icon: 'pi pi-fw
            pi-exclamation-circle', to: '/notfound'}, {label: 'Access Denied',
            icon: 'pi pi-fw pi-lock', to: '/access'}, {label: 'Empty Page',
            icon: 'pi pi-fw pi-circle-off', to: '/empty'} ] }, { label: 'Menu
            Hierarchy', icon: 'pi pi-fw pi-sort-amount-down-alt', items: [ {
            label: 'Submenu 1', icon: 'pi pi-fw pi-circle-off', items: [ {
            label: 'Submenu 1.1', icon: 'pi pi-fw pi-circle-off', items: [
            {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-circle-off'}, {label:
            'Submenu 1.1.2', icon: 'pi pi-fw pi-circle-off'}, {label: 'Submenu
            1.1.3', icon: 'pi pi-fw pi-circle-off'}, ] }, { label: 'Submenu
            1.2', icon: 'pi pi-fw pi-circle-off', items: [ {label: 'Submenu
            1.2.1', icon: 'pi pi-fw pi-circle-off'}, {label: 'Submenu 1.2.2',
            icon: 'pi pi-fw pi-circle-off'} ] }, ] }, { label: 'Submenu 2',
            icon: 'pi pi-fw pi-circle-off', items: [ { label: 'Submenu 2.1',
            icon: 'pi pi-fw pi-circle-off', items: [ {label: 'Submenu 2.1.1',
            icon: 'pi pi-fw pi-circle-off'}, {label: 'Submenu 2.1.2', icon: 'pi
            pi-fw pi-circle-off'}, {label: 'Submenu 2.1.3', icon: 'pi pi-fw
            pi-circle-off'}, ] }, { label: 'Submenu 2.2', icon: 'pi pi-fw
            pi-circle-off', items: [ {label: 'Submenu 2.2.1', icon: 'pi pi-fw
            pi-circle-off'}, {label: 'Submenu 2.2.2', icon: 'pi pi-fw
            pi-circle-off'} ] }, ] } ] }, {label: 'Docs', icon: 'pi pi-fw
            pi-question', command: () => { window.location =
            "#/documentation"}}, {label: 'Buy Now', icon: 'pi pi-fw
            pi-money-bill', command: () => { window.location =
            "https://www.primefaces.org/store"}}, ], &#125; &#125;
          </CodeHighlight>
        </div>

        <p>
          下面列出了PrimeVue Pro的依赖项，需要将其添加到package.json中。PrimeVue
          Pro没有直接依赖关系，即使PrimeVue组件也是可选的依赖关系。
        </p>

        <CodeHighlight>
          { "primevue": "^2.0.0", //optional: PrimeVue components "primeicons":
          "6.0.0", //optional: Icons "primeflex": "3.0.0", //optional: Grid
          system }
        </CodeHighlight>

        <h4>组件主题</h4>
        <p>
          PrimeVue
          Pro提供了开箱即用的15个PrimeVue主题，主题的设置简单，包括位于public/resource/sass/theme文件夹内的页面的主题CSS。
        </p>
        <p>
          在演示应用程序中，主题css文件已添加到index页面以启用themeswitcher功能，但是由于VueCLI支持通过webpack进行SASS编译，因此您也可以将主题的sass导入到App.vue中。
        </p>
        <ul>
          <li>theme-amber</li>
          <li>theme-blue</li>
          <li>theme-brown</li>
          <li>theme-cyan</li>
          <li>theme-darkgrey</li>
          <li>theme-deeppurple</li>
          <li>theme-green</li>
          <li>theme-indigo</li>
          <li>theme-lightblue</li>
          <li>theme-lightgreen</li>
          <li>theme-lime</li>
          <li>theme-orange</li>
          <li>theme-pink</li>
          <li>theme-purple</li>
          <li>theme-teal</li>
        </ul>

        <p>可以通过以下步骤开发自定义主题。</p>
        <ul>
          <li>选择一个自定义主题名称，例如theme-myown。</li>
          <li>
            在<i>public/resource/sass/theme folder</i>文件夹下创建一个名为theme-myown.scss的文件。
          </li>
          <li>
            定义下面列出的变量，然后导入<i>../sass/theme/_theme.scss</i>
          </li>
          <li>构建scss以生成CSS。</li>
          <li>将主题文件包括到您的应用程序中。</li>
        </ul>

        <p>这是创建主题所需的变量。</p>

        <CodeHighlight lang="css">
          $primaryLightColor: rgba(38,143,255,.5); $primaryColor: #007bff;
          $primaryDarkColor: #0069d9; $primaryDarkerColor: #0062cc;
          $primaryTextColor: #ffffff; $highlightBg: $primaryColor;
          $highlightTextColor: $primaryTextColor; @import
          '../sass/theme/_theme';
        </CodeHighlight>

        <p>如果您喜欢手动编译，可以使用一个示例sass命令来编译css。</p>

        <CodeHighlight>
          sass public/resource/theme/theme-myown.scss:public/resource/theme/theme-myown.css
        </CodeHighlight>

        <p>
          监视模式很方便，可以避免每次进行更改时都进行编译，而请使用以下命令，以便在进行自定义时sass可以生成文件。每当对任何scss文件进行更改时，都会生成所有css文件。
        </p>
        <CodeHighlight>
          sass --watch public/resource:public/resource
        </CodeHighlight>

        <h4>布局主题</h4>
        <p>
          PrimeVue
          Pro提供了25个开箱即用的布局主题，可轻松设置布局主题，包括位于public/resource/layout/css文件夹中的页面主题CSS。
        </p>
        <p>
          在演示应用程序中，布局css文件已添加到index页面以启用themeswitcher功能，但是由于VueCLI支持通过webpack进行SASS编译，因此您也可以将主题的sass导入到App.vue中。
        </p>

        <strong>Flat Colors</strong>
        <ul>
          <li>layout-amber</li>
          <li>layout-blue</li>
          <li>layout-brown</li>
          <li>layout-cyan</li>
          <li>layout-darkgrey</li>
          <li>layout-deeppurple</li>
          <li>layout-green</li>
          <li>layout-indigo</li>
          <li>layout-lightblue</li>
          <li>layout-lightgreen</li>
          <li>layout-lime</li>
          <li>layout-orange</li>
          <li>layout-pink</li>
          <li>layout-purple</li>
          <li>layout-teal</li>
        </ul>

        <strong>Special Themes</strong>
        <ul>
          <li>Influenza</li>
          <li>Calm</li>
          <li>Crimson</li>
          <li>Night</li>
          <li>Skyline</li>
          <li>Sunkist</li>
          <li>Little Leaf</li>
          <li>Joomla</li>
          <li>Firewatch</li>
          <li>Suzy</li>
        </ul>

        <p>可以通过以下步骤开发自定义布局主题。</p>
        <ul>
          <li>选择一个布局名称，例如layout-myown。</li>
          <li>
            在public/resource/layout/css文件夹中创建一个名为<i>layout-myown.scss</i>
            的空文件。
          </li>
          <li>
            定义下面列出的变量，然后导入
            <i>../../sass/layout/_layout.scss</i>文件。
          </li>
          <li>编译scss以生成CSS</li>
          <li>将主题文件包括到您的应用程序中。</li>
        </ul>

        <p>这是创建布局所需的变量；</p>

        <CodeHighlight lang="css">
          $topbarLeftGradientStartBgColor:#ff8f00;
          $topbarLeftGradientEndBgColor:#ffb300;
          $topbarRightGradientStartBgColor:#ff8f00;
          $topbarRightGradientEndBgColor:#ffb300; $topbarTextColor:#ffffff;
          $menuGradientStartBgColor:#ffffff; $menuGradientEndBgColor:#ffffff;
          $menuitemHoverBgColor:#e8e8e8; $menuitemActiveColor: #ff8f00;
          $menuitemActiveBgColor:#e8e8e8; $menuButtonBgColor:#ffffff;
          $menuButtonColor:#ff6f00; $badgeBgColor:#3eb839; $badgeColor:#ffffff;
          $darkMenuGradientStartBgColor:#363a41;
          $darkMenuGradientEndBgColor:#363a41; $darkMenuHoverBgColor:#4a4d54;
          $darkMenuMenuitemColor:#ffffff; $darkMenuMenuitemActiveColor:#ffe57f;
          $darkMenuMenuitemActiveBgColor:#282b30; @import
          '../../sass/layout/_layout';
        </CodeHighlight>

        <h4>常见的SASS变量</h4>
        <p>
          如果您想自定义公共变量，可以在sass/layout或sass/theme文件夹下的_variables.scss定义布局的核心变量（例如，字体大小，内边距）。
        </p>

        <h5>sass/layout/_variables.scss</h5>
        <CodeHighlight lang="css">
          $fontFamily:-apple-system,BlinkMacSystemFont,"Segoe
          UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color
          Emoji","Segoe UI Emoji","Segoe UI Symbol"; $fontSize:14px;
          $textColor:#212529; $textSecondaryColor:#6c757d; $borderRadius:4px;
          $dividerColor:#dee2e6; $transitionDuration:.3s;
          $disabledBgColor:#eeeeee; $primeIconFontSize:1.286em; /* Predefined
          Colors */ $lightestGray:#f5f5f5; $lightGray:#cccccc; $gray:#999999;
          $darkGray:#777777; $white:#ffffff; $blue:#007bff; $purple:#9189fd;
          $orange:#ffbf79; $lightBlue:#8dc8ff; $pink:#f790c8; $indigo:#6610f2;
          $green:#3e9018; $red:#da2f31; $orange:#ffb200; $teal:#599597;
          $black:#000000; $yellow:#ffd644; $inputInvalidBorderColor:#b94a48;
          $inputInvalidBgColor:#ffffff; $menuHoverBgColor: #f4f4f4;
          $bodyBgColor: #EEF2F6;
        </CodeHighlight>

        <h5>sass/theme/_variables.scss</h5>
        <div style="overflow: auto; height: 400px">
          <CodeHighlight lang="css">
            //reused color variables $shade000:#ffffff; //surface
            $shade100:rgba(0,0,0,.03); //header background $shade200:#e9ecef;
            //hover background $shade300:#dee2e6; //border, divider
            $shade400:#ced4da; //input border $shade500:#adb5bd; //unused
            $shade600:#6c757d; //text secondary color $shade700:#495057; //input
            text color $shade800:#343a40; //unused $shade900:#212529; //text
            color //global $fontFamily:-apple-system, BlinkMacSystemFont, "Segoe
            UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol"; $fontSize:1rem;
            $fontWeight:normal; $textColor:$shade900;
            $textSecondaryColor:$shade600; $borderRadius:4px;
            $transitionDuration:.15s; $formElementTransition:background-color
            $transitionDuration, border-color $transitionDuration, box-shadow
            $transitionDuration; $actionIconTransition:box-shadow
            $transitionDuration; $listItemTransition:box-shadow
            $transitionDuration; $primeIconFontSize:1rem; $divider:1px solid
            $shade300; $inlineSpacing:.5rem; $disabledOpacity:.65;
            $maskBg:rgba(0, 0, 0, 0.4); $loadingIconFontSize:2rem;
            $errorColor:#dc3545; //scale $scaleSM:0.875; $scaleLG:1.25; //focus
            $focusOutlineColor:$primaryLightColor; $focusOutline:0 none;
            $focusOutlineOffset:0; $focusShadow:0 0 0 0.2rem $focusOutlineColor;
            //action icons $actionIconWidth:2rem; $actionIconHeight:2rem;
            $actionIconBg:transparent; $actionIconBorder:0 none;
            $actionIconColor:$shade600; $actionIconHoverBg:transparent;
            $actionIconHoverBorderColor:transparent;
            $actionIconHoverColor:$shade700; $actionIconBorderRadius:50%;
            //input field (e.g. inputtext, spinner, inputmask)
            $inputPadding:.5rem .75rem; $inputTextFontSize:1rem;
            $inputBg:$shade000; $inputTextColor:$shade700;
            $inputIconColor:$shade700; $inputBorder:1px solid $shade400;
            $inputHoverBorderColor:$shade400;
            $inputFocusBorderColor:$primaryColor;
            $inputErrorBorderColor:$errorColor;
            $inputPlaceholderTextColor:$shade600; $inputFilledBg:$shade100;
            $inputFilledHoverBg:$shade100; $inputFilledFocusBg:$shade100;
            //input groups $inputGroupBg:$shade200;
            $inputGroupTextColor:$shade700; $inputGroupAddOnMinWidth:2.357rem;
            //input lists (e.g. dropdown, autocomplete, multiselect, orderlist)
            $inputListBg:$shade000; $inputListTextColor:$shade900;
            $inputListBorder:$inputBorder; $inputListPadding:.5rem 0;
            $inputListItemPadding:.5rem 1.5rem; $inputListItemBg:transparent;
            $inputListItemTextColor:$shade900; $inputListItemHoverBg:$shade200;
            $inputListItemTextHoverColor:$shade900; $inputListItemBorder:0 none;
            $inputListItemBorderRadius:0; $inputListItemMargin:0;
            $inputListItemFocusShadow:inset 0 0 0 0.15rem $focusOutlineColor;
            $inputListHeaderPadding:.75rem 1.5rem; $inputListHeaderMargin:0;
            $inputListHeaderBg:$shade100; $inputListHeaderTextColor:$shade900;
            $inputListHeaderBorder:1px solid $shade300; //inputs with overlays
            (e.g. autocomplete, dropdown, multiselect)
            $inputOverlayBg:$inputListBg;
            $inputOverlayHeaderBg:$inputListHeaderBg; $inputOverlayBorder:1px
            solid rgba(0,0,0,.15); $inputOverlayShadow:none; //button
            $buttonPadding:.5rem .75rem; $buttonIconOnlyWidth:2.357rem;
            $buttonIconOnlyPadding:.5rem 0; $buttonBg:$primaryColor;
            $buttonTextColor:$primaryTextColor; $buttonBorder:1px solid
            $primaryColor; $buttonHoverBg:$primaryDarkColor;
            $buttonTextHoverColor:$primaryTextColor;
            $buttonHoverBorderColor:$primaryDarkColor;
            $buttonActiveBg:$primaryDarkerColor;
            $buttonTextActiveColor:$primaryTextColor;
            $buttonActiveBorderColor:$primaryDarkerColor; $raisedButtonShadow:0
            3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px
            0 rgba(0,0,0,.12); $roundedButtonBorderRadius:2rem;
            $textButtonHoverBgOpacity:.04; $textButtonActiveBgOpacity:.16;
            $outlinedButtonBorder:1px solid;
            $plainButtonTextColor:$textSecondaryColor;
            $plainButtonHoverBgColor:$shade200;
            $plainButtonActiveBgColor:$shade300; $secondaryButtonBg:#6c757d;
            $secondaryButtonTextColor:#ffffff; $secondaryButtonBorder:1px solid
            #6c757d; $secondaryButtonHoverBg:#5a6268;
            $secondaryButtonTextHoverColor:#ffffff;
            $secondaryButtonHoverBorderColor:#5a6268;
            $secondaryButtonActiveBg:#545b62;
            $secondaryButtonTextActiveColor:#ffffff;
            $secondaryButtonActiveBorderColor:#4e555b;
            $secondaryButtonFocusShadow:0 0 0 0.2rem rgba(130,138,145,.5);
            $infoButtonBg:#17a2b8; $infoButtonTextColor:#ffffff;
            $infoButtonBorder:1px solid #17a2b8; $infoButtonHoverBg:#138496;
            $infoButtonTextHoverColor:#ffffff;
            $infoButtonHoverBorderColor:#117a8b; $infoButtonActiveBg:#138496;
            $infoButtonTextActiveColor:#ffffff;
            $infoButtonActiveBorderColor:#117a8b; $infoButtonFocusShadow:0 0 0
            0.2rem rgba(58,176,195,.5); $successButtonBg:#28a745;
            $successButtonTextColor:#ffffff; $successButtonBorder:1px solid
            #28a745; $successButtonHoverBg:#218838;
            $successButtonTextHoverColor:#ffffff;
            $successButtonHoverBorderColor:#1e7e34;
            $successButtonActiveBg:#1e7e34;
            $successButtonTextActiveColor:#ffffff;
            $successButtonActiveBorderColor:#1c7430; $successButtonFocusShadow:0
            0 0 0.2rem rgba(72,180,97,.5); $warningButtonBg:#ffc107;
            $warningButtonTextColor:#212529; $warningButtonBorder:1px solid
            #ffc107; $warningButtonHoverBg:#e0a800;
            $warningButtonTextHoverColor:#212529;
            $warningButtonHoverBorderColor:#d39e00;
            $warningButtonActiveBg:#d39e00;
            $warningButtonTextActiveColor:#212529;
            $warningButtonActiveBorderColor:#c69500; $warningButtonFocusShadow:0
            0 0 0.2rem rgba(222,170,12,.5); $helpButtonBg:#6f42c1;
            $helpButtonTextColor:#ffffff; $helpButtonBorder:1px solid #6f42c1;
            $helpButtonHoverBg:#633bad; $helpButtonTextHoverColor:#ffffff;
            $helpButtonHoverBorderColor:#58349a; $helpButtonActiveBg:#58349a;
            $helpButtonTextActiveColor:#ffffff;
            $helpButtonActiveBorderColor:#4d2e87; $helpButtonFocusShadow:0 0 0
            0.2rem #d3c6ec; $dangerButtonBg:#dc3545;
            $dangerButtonTextColor:#ffffff; $dangerButtonBorder:1px solid
            #dc3545; $dangerButtonHoverBg:#c82333;
            $dangerButtonTextHoverColor:#ffffff;
            $dangerButtonHoverBorderColor:#bd2130;
            $dangerButtonActiveBg:#bd2130; $dangerButtonTextActiveColor:#ffffff;
            $dangerButtonActiveBorderColor:#b21f2d; $dangerButtonFocusShadow:0 0
            0 0.2rem rgba(225,83,97,.5); $linkButtonColor:$primaryColor;
            $linkButtonHoverColor:$primaryDarkColor;
            $linkButtonTextHoverDecoration:underline; $linkButtonFocusShadow:0 0
            0 0.2rem $focusOutlineColor; //checkbox $checkboxWidth:20px;
            $checkboxHeight:20px; $checkboxBorder:2px solid $shade400;
            $checkboxIconFontSize:14px;
            $checkboxActiveBorderColor:$primaryColor;
            $checkboxActiveBg:$primaryColor;
            $checkboxIconActiveColor:$primaryTextColor;
            $checkboxActiveHoverBg:$primaryDarkerColor;
            $checkboxIconActiveHoverColor:$primaryTextColor;
            $checkboxActiveHoverBorderColor:$primaryDarkerColor; //radiobutton
            $radiobuttonWidth:20px; $radiobuttonHeight:20px;
            $radiobuttonBorder:2px solid $shade400; $radiobuttonIconSize:12px;
            $radiobuttonActiveBorderColor:$primaryColor;
            $radiobuttonActiveBg:$primaryColor;
            $radiobuttonIconActiveColor:$primaryTextColor;
            $radiobuttonActiveHoverBg:$primaryDarkerColor;
            $radiobuttonIconActiveHoverColor:$primaryTextColor;
            $radiobuttonActiveHoverBorderColor:$primaryDarkerColor;
            //colorpicker $colorPickerPreviewWidth:2rem;
            $colorPickerPreviewHeight:2rem; $colorPickerBg:#212529;
            $colorPickerBorderColor:#212529; $colorPickerHandleColor:$shade000;
            //togglebutton $toggleButtonBg:#6c757d; $toggleButtonBorder:1px
            solid #6c757d; $toggleButtonTextColor:#ffffff;
            $toggleButtonIconColor:#ffffff; $toggleButtonHoverBg:#5a6268;
            $toggleButtonHoverBorderColor:#545b62;
            $toggleButtonTextHoverColor:#ffffff;
            $toggleButtonIconHoverColor:#ffffff; $toggleButtonActiveBg:#545b62;
            $toggleButtonActiveBorderColor:#4e555b;
            $toggleButtonTextActiveColor:#ffffff;
            $toggleButtonIconActiveColor:#ffffff;
            $toggleButtonActiveHoverBg:#545b62;
            $toggleButtonActiveHoverBorderColor:#4e555b;
            $toggleButtonTextActiveHoverColor:#ffffff;
            $toggleButtonIconActiveHoverColor:#ffffff; //inplace
            $inplacePadding:$inputPadding; $inplaceHoverBg:$shade200;
            $inplaceTextHoverColor:$shade900; //rating
            $ratingIconFontSize:1.143rem; $ratingCancelIconColor:#dc3545;
            $ratingCancelIconHoverColor:#dc3545;
            $ratingStarIconOffColor:$shade700;
            $ratingStarIconOnColor:$primaryColor;
            $ratingStarIconHoverColor:$primaryColor; //slider
            $sliderBg:$shade200; $sliderBorder:0 none;
            $sliderHorizontalHeight:.286rem; $sliderVerticalWidth:0.286rem;
            $sliderHandleWidth:1.143rem; $sliderHandleHeight:1.143rem;
            $sliderHandleBg:$primaryColor; $sliderHandleBorder:2px solid
            $primaryColor; $sliderHandleBorderRadius:$borderRadius;
            $sliderHandleHoverBorderColor:$primaryDarkColor;
            $sliderHandleHoverBg:$primaryDarkColor;
            $sliderRangeBg:$primaryColor; //calendar $calendarTableMargin:.5rem
            0; $calendarPadding:0; $calendarBg:$shade000;
            $calendarInlineBg:$calendarBg; $calendarTextColor:$shade900;
            $calendarBorder:$inputListBorder;
            $calendarOverlayBorder:$inputOverlayBorder;
            $calendarHeaderPadding:.5rem; $calendarHeaderBg:$shade100;
            $calendarInlineHeaderBg:$calendarBg; $calendarHeaderBorder:1px solid
            $shade300; $calendarHeaderTextColor:$shade900;
            $calendarHeaderFontWeight:600; $calendarHeaderCellPadding:.5rem;
            $calendarCellDatePadding:.5rem; $calendarCellDateWidth:2.5rem;
            $calendarCellDateHeight:2.5rem;
            $calendarCellDateBorderRadius:$borderRadius;
            $calendarCellDateBorder:1px solid transparent;
            $calendarCellDateHoverBg:$shade200;
            $calendarCellDateTodayBg:$shade400;
            $calendarCellDateTodayBorderColor:transparent;
            $calendarCellDateTodayTextColor:$shade900;
            $calendarButtonBarPadding:1rem 0; $calendarTimePickerPadding:.5rem;
            $calendarTimePickerElementPadding:0 .5rem;
            $calendarTimePickerTimeFontSize:1.25rem; $calendarBreakpoint:769px;
            $calendarCellDatePaddingSM:0; //input switch $inputSwitchWidth:3rem;
            $inputSwitchHeight:1.75rem; $inputSwitchBorderRadius:$borderRadius;
            $inputSwitchHandleWidth:1.250rem; $inputSwitchHandleHeight:1.250rem;
            $inputSwitchHandleBorderRadius:$borderRadius;
            $inputSwitchSliderPadding:.25rem; $inputSwitchSliderOffBg:$shade400;
            $inputSwitchHandleOffBg:$shade000;
            $inputSwitchSliderOffHoverBg:$shade400;
            $inputSwitchSliderOnBg:$primaryColor;
            $inputSwitchSliderOnHoverBg:$primaryColor;
            $inputSwitchHandleOnBg:$shade000; //panel $panelHeaderBorder:1px
            solid $shade300; $panelHeaderBg:$shade100;
            $panelHeaderTextColor:$shade900; $panelHeaderFontWeight:600;
            $panelHeaderPadding:1rem 1.25rem;
            $panelToggleableHeaderPadding:.5rem 1.25rem;
            $panelHeaderHoverBg:$shade200;
            $panelHeaderHoverBorderColor:$shade300;
            $panelHeaderTextHoverColor:$shade900; $panelContentBorder:1px solid
            $shade300; $panelContentBg:$shade000;
            $panelContentTextColor:$shade900; $panelContentPadding:1.25rem;
            $panelFooterBorder:1px solid $shade300; $panelFooterBg:$shade000;
            $panelFooterTextColor:$shade900; $panelFooterPadding:.5rem 1.25rem;
            //accordion $accordionSpacing:0;
            $accordionHeaderBorder:$panelHeaderBorder;
            $accordionHeaderBg:$panelHeaderBg;
            $accordionHeaderTextColor:$panelHeaderTextColor;
            $accordionHeaderFontWeight:$panelHeaderFontWeight;
            $accordionHeaderPadding:$panelHeaderPadding;
            $accordionHeaderHoverBg:$shade200;
            $accordionHeaderHoverBorderColor:$shade300;
            $accordionHeaderTextHoverColor:$shade900;
            $accordionHeaderActiveBg:$panelHeaderBg;
            $accordionHeaderActiveBorderColor:$shade300;
            $accordionHeaderTextActiveColor:$shade900;
            $accordionHeaderActiveHoverBg:$shade200;
            $accordionHeaderActiveHoverBorderColor:$shade300;
            $accordionHeaderTextActiveHoverColor:$shade900;
            $accordionContentBorder:$panelContentBorder;
            $accordionContentBg:$panelContentBg;
            $accordionContentTextColor:$panelContentTextColor;
            $accordionContentPadding:$panelContentPadding; //tabview
            $tabviewNavBorder:1px solid #dee2e6; $tabviewNavBorderWidth:0 0 1px
            0; $tabviewNavBg:transparent; $tabviewHeaderSpacing:0;
            $tabviewHeaderBorder:solid; $tabviewHeaderBorderWidth:1px;
            $tabviewHeaderBorderColor:$shade000 $shade000 #dee2e6 $shade000;
            $tabviewHeaderBg:$shade000; $tabviewHeaderTextColor:$shade600;
            $tabviewHeaderFontWeight:$panelHeaderFontWeight;
            $tabviewHeaderPadding:.75rem 1rem; $tabviewHeaderMargin:0 0 -1px 0;
            $tabviewHeaderHoverBg:$shade000;
            $tabviewHeaderHoverBorderColor:#dee2e6;
            $tabviewHeaderTextHoverColor:$shade600;
            $tabviewHeaderActiveBg:$shade000;
            $tabviewHeaderActiveBorderColor:#dee2e6 #dee2e6 $shade000 #dee2e6;
            $tabviewHeaderTextActiveColor:$shade700; $tabviewContentBorder:0
            none; $tabviewContentBg:$panelContentBg;
            $tabviewContentTextColor:$panelContentTextColor;
            $tabviewContentPadding:$panelContentPadding; //upload
            $fileUploadProgressBarHeight:.25rem; $fileUploadContentPadding:2rem
            1rem; //scrollpanel $scrollPanelTrackBorder:0 none;
            $scrollPanelTrackBg:$shade100; //card $cardBodyPadding:1.5rem;
            $cardTitleFontSize:1.5rem; $cardTitleFontWeight:700;
            $cardSubTitleFontWeight:400; $cardSubTitleColor:$shade600;
            $cardContentPadding:1rem 0; $cardFooterPadding:1rem 0 0 0;
            $cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0
            rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12); //editor
            $editorToolbarBg:$panelHeaderBg;
            $editorToolbarBorder:$panelHeaderBorder;
            $editorToolbarPadding:$panelHeaderPadding;
            $editorToolbarIconColor:$textSecondaryColor;
            $editorToolbarIconHoverColor:$textColor;
            $editorIconActiveColor:$primaryColor;
            $editorContentBorder:$panelContentBorder;
            $editorContentBg:$panelContentBg; //paginator
            $paginatorBg:$shade000; $paginatorTextColor:$primaryColor;
            $paginatorBorder:solid $shade300; $paginatorBorderWidth:0;
            $paginatorPadding:.75rem;
            $paginatorElementWidth:$buttonIconOnlyWidth;
            $paginatorElementHeight:$buttonIconOnlyWidth;
            $paginatorElementBg:$shade000; $paginatorElementBorder:1px solid
            #dee2e6; $paginatorElementIconColor:$primaryColor;
            $paginatorElementHoverBg:$shade200;
            $paginatorElementHoverBorderColor:#dee2e6;
            $paginatorElementIconHoverColor:$primaryColor;
            $paginatorElementBorderRadius:0; $paginatorElementMargin:0 0 0 -1px;
            $paginatorElementPadding:0; //table $tableHeaderBorder:solid
            #dee2e6; $tableHeaderBorderWidth:1px 0 0 0;
            $tableHeaderBg:$shade100; $tableHeaderTextColor:$shade900;
            $tableHeaderFontWeight:600; $tableHeaderPadding:1rem 1rem;
            $tableHeaderCellPadding:1rem 1rem; $tableHeaderCellBg:$shade000;
            $tableHeaderCellTextColor:$shade900; $tableHeaderCellFontWeight:600;
            $tableHeaderCellBorder:1px solid #dee2e6;
            $tableHeaderCellBorderWidth:1px 0 2px 0;
            $tableHeaderCellHoverBg:$shade200;
            $tableHeaderCellTextHoverColor:$shade900;
            $tableHeaderCellIconColor:$shade600;
            $tableHeaderCellIconHoverColor:$shade600;
            $tableHeaderCellHighlightBg:$shade000;
            $tableHeaderCellHighlightTextColor:$primaryColor;
            $tableHeaderCellHighlightHoverBg:$shade200;
            $tableHeaderCellHighlightTextHoverColor:$primaryColor;
            $tableSortableColumnBadgeSize:1.143rem; $tableBodyRowBg:$shade000;
            $tableBodyRowTextColor:$shade900;
            $tableBodyRowEvenBg:rgba(0,0,0,.05); $tableBodyRowHoverBg:$shade200;
            $tableBodyRowTextHoverColor:$shade900; $tableBodyCellBorder:1px
            solid #dee2e6; $tableBodyCellBorderWidth:1px 0 0 0;
            $tableBodyCellPadding:1rem 1rem; $tableFooterCellPadding:1rem 1rem;
            $tableFooterCellBg:$shade000; $tableFooterCellTextColor:$shade900;
            $tableFooterCellFontWeight:600; $tableFooterCellBorder:1px solid
            #dee2e6; $tableFooterCellBorderWidth:1px 0 1px 0;
            $tableResizerHelperBg:$primaryColor; $tableFooterBorder:1px solid
            #dee2e6; $tableFooterBorderWidth:1px 0 1px 0;
            $tableFooterBg:$shade100; $tableFooterTextColor:$shade900;
            $tableFooterFontWeight:600; $tableFooterPadding:1rem 1rem;
            $tableCellContentAlignment:left; $tableTopPaginatorBorderWidth:1px 0
            0 0; $tableBottomPaginatorBorderWidth:1px 0 0 0; $tableScaleSM:0.5;
            $tableScaleLG:1.25; //dataview $dataViewContentPadding:0;
            $dataViewContentBorder:0 none; $dataViewListItemBorder:1px solid
            $shade300; $dataViewListItemBorderWidth:1px 0 0 0; //orderlist,
            picklist $orderListBreakpoint:769px; $pickListBreakpoint:769px;
            //schedule $fullCalendarEventBg:$primaryDarkColor;
            $fullCalendarEventBorder:1px solid $primaryDarkColor;
            $fullCalendarEventTextColor:$primaryTextColor; //tree
            $treeContainerPadding:0.286rem; $treeNodePadding:0.143rem;
            $treeNodeContentPadding:.5rem; $treeNodeChildrenPadding:0 0 0 1rem;
            $treeNodeIconColor:$shade600; //org chart
            $organizationChartConnectorColor:$shade300; //message
            $messageMargin:1rem 0; $messagePadding:1rem 1.25rem;
            $messageBorderWidth:1px; $messageIconFontSize:1.5rem;
            $messageTextFontSize:1rem; $messageTextFontWeight:500; //inline
            message $inlineMessagePadding:$inputPadding; $inlineMessageMargin:0;
            $inlineMessageIconFontSize:1rem; $inlineMessageTextFontSize:1rem;
            $inlineMessageBorderWidth:0px; //toast $toastIconFontSize:2rem;
            $toastMessageTextMargin:0 0 0 1rem; $toastMargin:0 0 1rem 0;
            $toastPadding:1rem; $toastBorderWidth:0; $toastShadow:0 0.25rem
            0.75rem rgba(0,0,0,.1); $toastOpacity:1; $toastTitleFontWeight:700;
            $toastDetailMargin:$inlineSpacing 0 0 0; //severities
            $infoMessageBg:#cce5ff; $infoMessageBorder:solid #b8daff;
            $infoMessageTextColor:#004085; $infoMessageIconColor:#004085;
            $successMessageBg:#d4edda; $successMessageBorder:solid #c3e6cb;
            $successMessageTextColor:#155724; $successMessageIconColor:#155724;
            $warningMessageBg:#fff3cd; $warningMessageBorder:solid #ffeeba;
            $warningMessageTextColor:#856404; $warningMessageIconColor:#856404;
            $errorMessageBg:#f8d7da; $errorMessageBorder:solid #f5c6cb;
            $errorMessageTextColor:#721c24; $errorMessageIconColor:#721c24;
            //overlays $overlayContentBorder:1px solid rgba(0,0,0,.2);
            $overlayContentBg:$panelContentBg; $overlayContainerShadow:none;
            //dialog $dialogHeaderBg:$shade000; $dialogHeaderBorder:1px solid
            $shade200; $dialogHeaderTextColor:$shade900;
            $dialogHeaderFontWeight:600; $dialogHeaderFontSize:1.25rem;
            $dialogHeaderPadding:1rem; $dialogContentPadding:1rem;
            $dialogFooterBorder:1px solid $shade200; $dialogFooterPadding:1rem;
            //tooltip $tooltipBg:$shade900; $tooltipTextColor:$shade000;
            $tooltipPadding:$inputPadding; //steps $stepsItemBg:transparent;
            $stepsItemBorder:1px solid $shade300; $stepsItemTextColor:$shade600;
            $stepsItemNumberWidth:2rem; $stepsItemNumberHeight:2rem;
            $stepsItemNumberFontSize:1.143rem; $stepsItemNumberColor:$shade900;
            $stepsItemNumberBorderRadius:$borderRadius;
            $stepsItemActiveFontWeight:600; //progressbar
            $progressBarHeight:1.5rem; $progressBarBorder:0 none;
            $progressBarBg:$shade200; $progressBarValueBg:$primaryColor; //menu
            (e.g. menu, menubar, tieredmenu) $menuWidth:12.5rem;
            $menuBg:$shade000; $menuBorder:1px solid $shade300;
            $menuTextColor:$shade900; $menuitemPadding:.75rem 1rem;
            $menuitemBorderRadius:0; $menuitemTextColor:$shade900;
            $menuitemIconColor:$shade900; $menuitemTextHoverColor:$shade900;
            $menuitemIconHoverColor:$shade900; $menuitemHoverBg:$shade200;
            $menuitemTextActiveColor:$shade900;
            $menuitemIconActiveColor:$shade900; $menuitemActiveBg:$shade200;
            $menuitemSubmenuIconFontSize:.875rem; $submenuHeaderMargin:0;
            $submenuHeaderPadding:.75rem 1rem; $submenuHeaderBg:$shade000;
            $submenuHeaderTextColor:$shade900; $submenuHeaderBorderRadius:0;
            $submenuHeaderFontWeight:600; $overlayMenuBg:$menuBg;
            $overlayMenuBorder:1px solid rgba(0,0,0,.15);
            $overlayMenuShadow:none; $verticalMenuPadding:.5rem 0;
            $menuSeparatorMargin:.5rem 0; $breadcrumbPadding:1rem;
            $breadcrumbBg:$shade100; $breadcrumbBorder:0 none;
            $breadcrumbItemTextColor:$primaryColor;
            $breadcrumbItemIconColor:$primaryColor;
            $breadcrumbLastItemTextColor:$shade600;
            $breadcrumbLastItemIconColor:$shade600;
            $breadcrumbSeparatorColor:$shade600; $horizontalMenuPadding:.5rem
            1rem; $horizontalMenuBg:$shade100; $horizontalMenuBorder:0 none;
            $horizontalMenuTextColor:rgba(0,0,0,.9);
            $horizontalMenuRootMenuitemPadding:1rem;
            $horizontalMenuRootMenuitemBorderRadius:$borderRadius;
            $horizontalMenuRootMenuitemTextColor:rgba(0,0,0,.5);
            $horizontalMenuRootMenuitemIconColor:rgba(0,0,0,.5);
            $horizontalMenuRootMenuitemTextHoverColor:rgba(0,0,0,.7);
            $horizontalMenuRootMenuitemIconHoverColor:rgba(0,0,0,.7);
            $horizontalMenuRootMenuitemHoverBg:transparent;
            $horizontalMenuRootMenuitemTextActiveColor:rgba(0,0,0,.9);
            $horizontalMenuRootMenuitemIconActiveColor:rgba(0,0,0,.9);
            $horizontalMenuRootMenuitemActiveBg:transparent; //badge and tag
            $badgeBg:$primaryColor; $badgeTextColor:$primaryTextColor;
            $badgeMinWidth:1.5rem; $badgeHeight:1.5rem; $badgeFontWeight:700;
            $badgeFontSize:.75rem; $tagPadding:.25rem .4rem; //carousel
            $carouselIndicatorsPadding:1rem; $carouselIndicatorBg:$shade200;
            $carouselIndicatorHoverBg:$shade300;
            $carouselIndicatorBorderRadius:0; $carouselIndicatorWidth:2rem;
            $carouselIndicatorHeight:.5rem; //galleria
            $galleriaMaskBg:rgba(0,0,0,0.9); $galleriaCloseIconMargin:.5rem;
            $galleriaCloseIconFontSize:2rem; $galleriaCloseIconBg:transparent;
            $galleriaCloseIconColor:$shade100;
            $galleriaCloseIconHoverBg:rgba(255,255,255,0.1);
            $galleriaCloseIconHoverColor:$shade100;
            $galleriaCloseIconWidth:4rem; $galleriaCloseIconHeight:4rem;
            $galleriaCloseIconBorderRadius:$borderRadius;
            $galleriaItemNavigatorBg:transparent;
            $galleriaItemNavigatorColor:$shade100;
            $galleriaItemNavigatorMargin:0 .5rem;
            $galleriaItemNavigatorFontSize:2rem;
            $galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1);
            $galleriaItemNavigatorHoverColor:$shade100;
            $galleriaItemNavigatorWidth:4rem; $galleriaItemNavigatorHeight:4rem;
            $galleriaItemNavigatorBorderRadius:$borderRadius;
            $galleriaCaptionBg:rgba(0,0,0,.5);
            $galleriaCaptionTextColor:$shade100; $galleriaCaptionPadding:1rem;
            $galleriaIndicatorsPadding:1rem; $galleriaIndicatorBg:$shade200;
            $galleriaIndicatorHoverBg:$shade300;
            $galleriaIndicatorBorderRadius:$borderRadius;
            $galleriaIndicatorWidth:1rem; $galleriaIndicatorHeight:1rem;
            $galleriaIndicatorsBgOnItem:rgba(0,0,0,.5);
            $galleriaIndicatorBgOnItem:rgba(255,255,255,.4);
            $galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6);
            $galleriaThumbnailContainerBg:rgba(0,0,0,.9);
            $galleriaThumbnailContainerPadding:1rem .25rem;
            $galleriaThumbnailNavigatorBg:transparent;
            $galleriaThumbnailNavigatorColor:$shade100;
            $galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1);
            $galleriaThumbnailNavigatorHoverColor:$shade100;
            $galleriaThumbnailNavigatorBorderRadius:$borderRadius;
            $galleriaThumbnailNavigatorWidth:2rem;
            $galleriaThumbnailNavigatorHeight:2rem; :root {
            --surface-a:#{$shade000}; --surface-b:#{$shade100};
            --surface-c:#{$shade200}; --surface-d:#{$shade300};
            --surface-e:#{$shade000}; --surface-f:#{$shade000};
            --text-color:#{$shade900}; --text-color-secondary:#{$shade600};
            --primary-color:#{$primaryColor};
            --primary-color-text:#{$primaryTextColor};
            --font-family:#{$fontFamily}; }
          </CodeHighlight>
        </div>

        <h4>菜单模式</h4>
        <p>
          菜单有4种模式, 静态 static, 覆盖 overlay, 超薄 slim ，水平 horizontal.
          App.vue中的布局容器元素用于通过添加特定类来定义要使用的模式。下面的列表指示每种模式的样式类。
        </p>

        <ul>
          <li>Static: "layout-wrapper menu-layout-static"</li>
          <li>Overlay: "layout-wrapper menu-layout-overlay"</li>
          <li>Slim: "layout-wrapper menu-layout-static menu-layout-slim"</li>
          <li>
            Horizontal: "layout-wrapper menu-layout-static
            menu-layout-horizontal"
          </li>
        </ul>

        <p>例如，要创建水平菜单，div元素应采用以下形式；</p>
        <CodeHighlight>
          &lt;div class="layout-wrapper menu-layout-static
          menu-layout-horizontal"&gt;
        </CodeHighlight>

        <p>
          通过将首选项保留在组件上并使用表达式将其绑定，以便用户可以在模式之间进行切换，也可以将选择留给用户。示例应用程序具有此类用例的示例实现。有关示例，请参阅App.vue。
        </p>

        <h4>黑暗菜单</h4>
        <p>
          菜单的默认配色方案是浅色，可以通过在菜单容器中添加layout-menu-dark样式类来激活替代深色模式。
        </p>
        <CodeHighlight>
          &lt;div class="layout-menu-container layout-menu-dark"&gt;
        </CodeHighlight>

        <h4>Profile Modes</h4>
        <p>
          用户内容有两个可能的位置，第一个版本是位于主菜单内，第二个选项是顶部菜单。对于inline模式，用户头像应放在菜单上方，对于Overlay模式，内容应放在顶部栏项目列表中。该示例演示应用程序提供了这两种情况的示例。
        </p>

        <h4>自定义样式</h4>
        <p>
          建议将自定义内容写入sass/overrides文件夹下的scss文件中，以进行无缝更新，因为这些文件默认情况下为空且从不更新。
        </p>

        <ul>
          <li>_layout_styles: Customizations for the layout</li>
          <li>_layout_variables: Overrides of layout variables</li>
          <li>_theme_styles: Customizations for the theme</li>
          <li>_theme_variables: Overrides of theme variables</li>
        </ul>

        <h4>迁移指南</h4>
        <p>
          每次更改都包含在发行版根目录下的CHANGELOG.md文件中，以及更新说明。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight.vue'
import settings from '@/settings'

export default {
  components: {
    CodeHighlight: CodeHighlight
  },
  created() {
    this.settings = settings
  }
}
</script>

<style lang="scss" scoped>
::v-deep pre[class*='language-'] {
  &:before,
  &:after {
    display: none !important;
  }

  code {
    border-left: 10px solid var(--surface-d) !important;
    box-shadow: none !important;
    background: var(--surface-b) !important;
    margin: 1em 0;
    color: var(--text-color);
    font-size: 14px;

    .token {
      &.tag,
      &.keyword {
        color: #2196f3 !important;
      }

      &.attr-name,
      &.attr-string {
        color: #2196f3 !important;
      }

      &.attr-value {
        color: #4caf50 !important;
      }

      &.punctuation {
        color: var(--text-color);
      }

      &.operator,
      &.string {
        background: transparent;
      }
    }
  }
}

i {
  background-color: #fcf2a7;
  font-family: monaco, Consolas, Lucida Console, monospace;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  padding: 2px;
}

li {
  line-height: 1.5;
}
</style>
