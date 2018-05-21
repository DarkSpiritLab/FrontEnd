export default {
    aor: {
        action: {
            delete: '删除',
            show: '展示',
            list: '列表',
            save: '保存',
            create: '创建',
            edit: '编辑',
            cancel: '取消',
            refresh: '刷新',
            add_filter: '筛选',
            remove_filter: '取消删选',
            back: '后退',
        },
        boolean: {
            true: '是',
            false: '否',
        },
        page: {
            list: '%{name}列表',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '创建 %{name}',
            delete: '删除 %{name} #%{id}',
            dashboard: '总览',
            not_found: '未找到资源',
        },
        input: {
            file: {
                upload_several:
                    'Drop some files to upload, or click to select one.',
                upload_single: 'Drop a file to upload, or click to select it.',
            },
            image: {
                upload_several:
                    'Drop some pictures to upload, or click to select one.',
                upload_single:
                    'Drop a picture to upload, or click to select it.',
            },
        },
        message: {
            yes: '是',
            no: '否',
            are_you_sure: '请确认操作',
            about: '关于',
            not_found:
                '链接错误/网络错误',
        },
        navigation: {
            no_results: '未找到结果',
            page_out_of_boundaries: 'Page number %{page} out of boundaries',
            page_out_from_end: 'Cannot go after last page',
            page_out_from_begin: 'Cannot go before page 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
            next: '下一页',
            prev: '前一页',
        },
        auth: {
            username: '帐户',
            password: '密码',
            sign_in: '登录',
            sign_in_error: '认证错误',
            logout: '退出登录',
        },
        notification: {
            updated: '更新成功',
            created: '创建成功',
            deleted: '删除成功',
            item_doesnt_exist: '目标不存在',
            http_error: '服务器错误',
        },
        validation: {
            required: '必填',
            minLength: '最少%{min}个字符',
            maxLength: '最多%{max}个字符',
            minValue: '不应小于%{min}',
            maxValue: '不应大于%{max}',
            number: '必须为数值',
            email: '邮件格式不合法',
        },
    },
    pos: {
        search: '搜索',
        configuration: '界面设置',

        language: '语言',
        theme: {
            name: '主题',
        },
        dashboard: {
            name: '总览',
            welcome: {
                title: '欢迎使用暗网精灵',
                subtitle: '当前服务器状态： 运行中',
                button1: '主页',
                button2: '开发者',
                status: '上次登录 %{time} 前',
            },
            spiders: {
                title: '主爬虫状态',
                subtitle: '运行中',
            },
            slaveSpiders: {
                title: '从爬虫状态',
                subtitle: '在线: %{smart_count}',
            },
            origin: {
                title: '威胁源',
                subtitle: '威胁源信息',
                tabs: {
                    critical: '高危',
                    warning: '警告',
                    normal: '一般',
                },

            },
            status: {
                title: '系统',
                subtitle: '资源监控',
                label: {
                    cpu: 'CPU负载',
                    queue: '队列负载',
                    memory: '内存使用',
                    upTime: '已运行: %{time}',
                    record: '记录数: %{smart_count}',
                    task: '任务数: %{smart_count}',
                    website: '布控站点: %{smart_count}',
                    unit: '件/秒',
                    masterSpider: '主爬虫负载',
                    masterQueue: '主管道负载',
                    eventPerSecond: '事件数',
                },

            }
        },
        tools:{
                status: {
                        spiders: "爬虫： %{spiders}个",
                        honeyPots: "蜜罐： %{honeyPots}个",
                }
        },
        tips:{
            confirm: '该操作将会立即执行，可能会导致您数据的损失，确认执行嘛？',
            running: '运行中',
            stop: '已停止',
        }
    },
    resources: {
        status: {
            name: "系统状态",
        },
        relays: {
            name: "节点地图",
            title: "暗网公开节点热地图",
            subtitle: "共 %{count} 条记录",
            update: "上次刷新 UTC %{time}",
        },
        report: {
            name: '威胁报告',
        },
        analyse: {
            name: '跟踪溯源',
            menu: {
                resolve: '蜜罐溯源',
                bitcoin: '比特币监控',
                user: '融合分析',
                scan: '暗网服务发现',
            },
            scope: {
                name: 'HS探测',
            },
            scan: {
                name: 'Coherence分析',
            }
        },
        monitor: {
            name: '布控设置',
            title: '布控管理面板',
            state: '布控状态: ',
            menu: {
                node: '节点设置',
                flagTag: '布控关键词',
                website: '布控站点',
                template: '报告模板',
                sig: '通知设置',
                ai: 'AI引擎',
                dbSetting: '存储设置'
            },
            states: {
                control: '运行状态',
                master: {
                    name: '主爬虫',
                    ip: 'IP地址',
                    proxy: '代理设置（选填）',
                    queue: '队列任务服务器',
                    logLevel: '日志等级',
                    alert: '报警服务器',
                },
                slave: {
                    name: '从爬虫',
                    ip: '爬虫池IP（填入从爬虫启动参数）',
                    proxy: '代理设置（选填）',
                    queue: '队列任务服务器',
                    logLevel: '日志等级',
                    listTitle: '爬虫状态',
                },
                spiders: {
                    master: '主爬虫状态',
                    slave: '从爬虫状态',
                    lastSeen: '上次提交',
                }
            },
            store: {
                url: '数据库链接',
                account: '帐户',
                username: '用户名',
                password: '密码',
            }
        }
    },
};
