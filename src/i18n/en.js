export default {
    pos: {
        search: 'Search',
        configuration: 'Configuration',
        language: 'Language',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            name: 'Dashboard',
            welcome: {
                title: 'Welcome to The Dark Genius',
                subtitle: 'Server Status： Running',
                button1: 'Main page',
                button2: 'Developers',
                status: 'Last Login: %{time} before',
            },
            spiders: {
                title: 'Master Spider State',
                subtitle: 'Running',
            },
            slaveSpiders: {
                title: 'Slave Spiders state',
                subtitle: 'Online: %{smart_count}',
            },
            origin: {
                title: 'Dangerous Origin',
                subtitle: 'Dangerous Origin Infomation',
                tabs: {
                    critical: 'Critical',
                    warning: 'Warning',
                    normal: 'Normal',
                },

            },
            status: {
                title: 'System',
                subtitle: 'Resources monitor',
                label: {
                    cpu: 'CPU Loads',
                    queue: 'Queue Loads',
                    memory: 'Memory Usage',
                    upTime: 'Running: %{time}',
                    record: 'Records: %{smart_count}',
                    task: 'Tasks: %{smart_count}',
                    website: 'Website Monitored: %{smart_count}',
                    unit: 'i/s',
                    masterSpider: 'MSL',
                    masterQueue: 'MQL',
                    eventPerSecond: 'EPS',
                },

            }
        },
        tools: {
            status: {
                spiders: "Spiders： %{spiders}个",
                honeyPots: "Honey Pots： %{honeyPots}个",
            }
        }
    },
    resources: {
        relays: {
            name: "Relays Map",
            title: "Onion Public Relays Map",
            subtitle: "Total %{count} records",
            update: "Updated: UTC %{time}",
        },
        target: {
            name: 'Dangerous Origin Manage',
        },
        spiderConf: {}
    },
};
