<template>
  <div class="grid p-fluid">
    <div class="col-12">
      <div class="card card-w-title">
        <h5>菜单栏</h5>
        <Menubar :model="nestedMenuitems">
          <template #end>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                type="text"
                placeholder="检索"
              />
            </span>
          </template>
        </Menubar>
      </div>
    </div>

    <div class="col-12">
      <div class="card card-w-title">
        <h5>面包屑</h5>
        <Breadcrumb
          :home="breadcrumbHome"
          :model="breadcrumbItems"
        />
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card card-w-title">
        <h5>步骤条</h5>
        <p>步骤和TabMenu与相同的子路由集成在一起。</p>
        <Steps
          :model="nestedRouteItems"
          :readonly="false"
        />
        <router-view />
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card card-w-title">
        <h5>标签菜单 TabMenu</h5>
        <p>步骤和TabMenu与相同的子路由集成在一起。.</p>
        <TabMenu :model="nestedRouteItems" />
        <router-view />
      </div>
    </div>

    <div class="col-12 md:col-4">
      <div class="card">
        <h5>分层菜单</h5>
        <TieredMenu :model="tieredMenuItems" />
      </div>
    </div>

    <div class="col-12 md:col-4">
      <div class="card">
        <h5>普通菜单</h5>
        <Menu :model="menuitems" />
      </div>
    </div>

    <div class="col-12 md:col-4">
      <div class="card">
        <h5>叠加菜单</h5>

        <Menu
          ref="menu"
          :model="overlayMenuItems"
          :popup="true"
        />
        <Button
          type="button"
          label="Options"
          icon="pi pi-angle-down"
          style="width: auto"
          @click="toggleMenu"
        />
      </div>

      <div
        class="card"
        @contextmenu="onContextRightClick"
      >
        <h5>上下文菜单 ContextMenu</h5>
        右键单击显示。
        <ContextMenu
          ref="contextMenu"
          :model="contextMenuItems"
        />
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card">
        <h5>MegaMenu - 水平</h5>
        <MegaMenu :model="megamenuItems" />

        <h5 style="margin-top: 1.55em">
          MegaMenu - 垂直
        </h5>
        <MegaMenu
          :model="megamenuItems"
          orientation="vertical"
        />
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card">
        <h5>面板菜单</h5>
        <PanelMenu :model="panelMenuitems" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nestedMenuitems: [
        {
          label: '顾客',
          icon: 'pi pi-fw pi-table',
          items: [
            {
              label: '新建',
              icon: 'pi pi-fw pi-user-plus',
              items: [
                {
                  label: '顾客',
                  icon: 'pi pi-fw pi-plus'
                },
                {
                  label: '重复',
                  icon: 'pi pi-fw pi-copy'
                }

              ]
            },
            {
              label: '编辑',
              icon: 'pi pi-fw pi-user-edit'
            }
          ]
        },
        {
          label: '订单',
          icon: 'pi pi-fw pi-shopping-cart',
          items: [
            {
              label: '查看',
              icon: 'pi pi-fw pi-list'
            },
            {
              label: '检索',
              icon: 'pi pi-fw pi-search'
            }

          ]
        },
        {
          label: '出货量',
          icon: 'pi pi-fw pi-envelope',
          items: [
            {
              label: '追踪器',
              icon: 'pi pi-fw pi-compass'

            },
            {
              label: '地图',
              icon: 'pi pi-fw pi-map-marker'

            },
            {
              label: '管理',
              icon: 'pi pi-fw pi-pencil'
            }
          ]
        },
        {
          label: '个人资料',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: '设置',
              icon: 'pi pi-fw pi-cog'
            },
            {
              label: '开票',
              icon: 'pi pi-fw pi-file'
            }
          ]
        },
        {
          label: '退出',
          icon: 'pi pi-fw pi-sign-out'
        }
      ],
      breadcrumbHome: { icon: 'pi pi-home', to: '/' },
      breadcrumbItems: [
        { label: '电脑' },
        { label: '笔记本' },
        { label: '配饰' },
        { label: '背包' },
        { label: '项目' }
      ],
      nestedRouteItems: [
        {
          label: '个人信息',
          to: '/menu'
        },
        {
          label: '座位',
          to: '/menu/seat'
        },
        {
          label: '付款',
          to: '/menu/payment'
        },
        {
          label: '确认',
          to: '/menu/confirmation'
        }
      ],
      tieredMenuItems: [
        {
          label: '顾客',
          icon: 'pi pi-fw pi-table',
          items: [
            {
              label: '新建',
              icon: 'pi pi-fw pi-user-plus',
              items: [
                {
                  label: '顾客',
                  icon: 'pi pi-fw pi-plus'
                },
                {
                  label: '重复',
                  icon: 'pi pi-fw pi-copy'
                }

              ]
            },
            {
              label: '编辑',
              icon: 'pi pi-fw pi-user-edit'
            }
          ]
        },
        {
          label: '订单',
          icon: 'pi pi-fw pi-shopping-cart',
          items: [
            {
              label: '查看',
              icon: 'pi pi-fw pi-list'
            },
            {
              label: '检索',
              icon: 'pi pi-fw pi-search'
            }

          ]
        },
        {
          label: '出货量',
          icon: 'pi pi-fw pi-envelope',
          items: [
            {
              label: '追踪器',
              icon: 'pi pi-fw pi-compass'

            },
            {
              label: '地图',
              icon: 'pi pi-fw pi-map-marker'

            },
            {
              label: '管理',
              icon: 'pi pi-fw pi-pencil'
            }
          ]
        },
        {
          label: '个人资料',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: '设置',
              icon: 'pi pi-fw pi-cog'
            },
            {
              label: '开票',
              icon: 'pi pi-fw pi-file'
            }
          ]
        },
        {
          separator: true
        },
        {
          label: '退出',
          icon: 'pi pi-fw pi-sign-out'
        }
      ],
      overlayMenuItems: [
        {
          label: '保存',
          icon: 'pi pi-save'
        },
        {
          label: '更新',
          icon: 'pi pi-refresh'
        },
        {
          label: '删除',
          icon: 'pi pi-trash'
        },
        {
          separator: true
        },
        {
          label: '主页',
          icon: 'pi pi-home'
        }
      ],
      menuitems: [
        {
          label: '顾客',
          items: [
            {
              label: '新建',
              icon: 'pi pi-fw pi-plus'
            },
            {
              label: '编辑',
              icon: 'pi pi-fw pi-user-edit'
            }
          ]
        },
        {
          label: '订单',
          items: [
            {
              label: '查看',
              icon: 'pi pi-fw pi-list'
            },
            {
              label: '检索',
              icon: 'pi pi-fw pi-search'
            }

          ]
        }
      ],
      contextMenuItems: [
        {
          label: '保存',
          icon: 'pi pi-save'
        },
        {
          label: '更新',
          icon: 'pi pi-refresh'
        },
        {
          label: '删除',
          icon: 'pi pi-trash'
        },
        {
          separator: true
        },
        {
          label: 'Options',
          icon: 'pi pi-cog'
        }
      ],
      megamenuItems: [
        {
          label: '时尚', icon: 'pi pi-fw pi-tag',
          items: [
            [
              {
                label: '女人',
                items: [{ label: '女人项目' }, { label: '女人项目' }, { label: '女人项目' }]
              },
              {
                label: '男人',
                items: [{ label: '男人项目' }, { label: '男人项目' }, { label: '男人项目' }]
              }
            ],
            [
              {
                label: '儿童',
                items: [{ label: '儿童项目' }, { label: '儿童项目' }]
              },
              {
                label: '行李',
                items: [{ label: '行李项目' }, { label: '行李项目' }, { label: '行李项目' }]
              }
            ]
          ]
        },
        {
          label: '电子产品', icon: 'pi pi-fw pi-desktop',
          items: [
            [
              {
                label: '电脑',
                items: [{ label: '电脑项目' }, { label: '电脑项目' }]
              },
              {
                label: '摄录机',
                items: [{ label: '摄录机项目' }, { label: '摄录机项目' }, { label: '摄录机项目' }]
              }
            ],
            [
              {
                label: '电视',
                items: [{ label: '电视项目' }, { label: '电视项目' }]
              },
              {
                label: '录音机',
                items: [{ label: '录音机项目' }, { label: '录音机项目' }, { label: '录音机项目' }]
              }
            ],
            [
              {
                label: '体育.7',
                items: [{ label: '体育.7.1' }, { label: '体育.7.2' }]
              }
            ]
          ]
        },
        {
          label: '家具', icon: 'pi pi-fw pi-image',
          items: [
            [
              {
                label: '客厅',
                items: [{ label: '客厅项目' }, { label: '客厅项目' }]
              },
              {
                label: '厨房',
                items: [{ label: '厨房项目' }, { label: '厨房项目' }, { label: '厨房项目' }]
              }
            ],
            [
              {
                label: '卧室',
                items: [{ label: '卧室项目' }, { label: '卧室项目' }]
              },
              {
                label: '户外',
                items: [{ label: '户外项目' }, { label: '户外项目' }, { label: '户外项目' }]
              }
            ]
          ]
        },
        {
          label: '体育', icon: 'pi pi-fw pi-star',
          items: [
            [
              {
                label: '篮球',
                items: [{ label: '篮球项目' }, { label: '篮球项目' }]
              },
              {
                label: '足球',
                items: [{ label: '足球项目' }, { label: '足球项目' }, { label: '足球项目' }]
              }
            ],
            [
              {
                label: '台球',
                items: [{ label: '台球项目' }, { label: '台球项目' }]
              }
            ]
          ]
        }
      ],
      panelMenuitems: [
        {
          label: '顾客',
          icon: 'pi pi-fw pi-table',
          items: [
            {
              label: '新建',
              icon: 'pi pi-fw pi-user-plus',
              items: [
                {
                  label: '顾客',
                  icon: 'pi pi-fw pi-plus'
                },
                {
                  label: '重复',
                  icon: 'pi pi-fw pi-copy'
                }

              ]
            },
            {
              label: '编辑',
              icon: 'pi pi-fw pi-user-edit'
            }
          ]
        },
        {
          label: '订单',
          icon: 'pi pi-fw pi-shopping-cart',
          items: [
            {
              label: '查看',
              icon: 'pi pi-fw pi-list'
            },
            {
              label: '检索',
              icon: 'pi pi-fw pi-search'
            }

          ]
        },
        {
          label: '出货量',
          icon: 'pi pi-fw pi-envelope',
          items: [
            {
              label: '追踪器',
              icon: 'pi pi-fw pi-compass'

            },
            {
              label: '地图',
              icon: 'pi pi-fw pi-map-marker'

            },
            {
              label: '管理',
              icon: 'pi pi-fw pi-pencil'
            }
          ]
        },
        {
          label: '个人资料',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: '设置',
              icon: 'pi pi-fw pi-cog'
            },
            {
              label: '开票',
              icon: 'pi pi-fw pi-file'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleMenu(event) {
      this.$refs.menu.toggle(event)
    },
    onContextRightClick(event) {
      this.$refs.contextMenu.show(event)
    }
  }
}
</script>

<style scoped lang="scss">
	::v-deep .stepsdemo-content  {
		padding: 1em 0;

		p {
			font-weight: 400;
			display: inline-block;
			vertical-align: middle;
			font-size: 18px;
			margin: 0;
		}

		i {
			vertical-align: middle;
			font-size: 1.5em;
			margin: 0;
		}
	}

	.contextmenu-image {
		width: 100%;
	}
</style>
