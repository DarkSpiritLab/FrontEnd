import React, { Component } from 'react';
import restClient from "../restClient";
import { GET_LIST } from "admin-on-rest";
import PropTypes from 'prop-types';

import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map' //引入地图
import 'echarts/lib/chart/effectScatter'
import 'echarts/map/js/world'
import 'echarts/lib/chart/scatter'
import 'echarts/extension/dataTool'
import io from 'socket.io-client';
const geolocation= {
    "AO": "Angola",
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AD": "Andorra",
    "AI": "Anguilla",
    "AG": "Barbuda Antigua",
    "AR": "Argentina",
    "AM": "Armenia",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda Is.",
    "BO": "Bolivia",
    "BW": "Botswana",
    "BR": "Brazil",
    "BN": "Brunei",
    "BG": "Bulgaria",
    "BF": "Burkina-faso",
    "MM": "Burma",
    "BI": "Burundi",
    "CM": "Cameroon",
    "CA": "Canada",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CO": "Colombia",
    "CG": "Congo",
    "CK": "Cook Is.",
    "CR": "Costa Rica",
    "CU": "Cuba",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DO": "Dominica Rep.",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "EI Salvador",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GD": "Grenada",
    "GU": "Guam",
    "GT": "Guatemala",
    "GN": "Guinea",
    "GY": "Guyana",
    "HT": "Haiti",
    "HN": "Honduras",
    "HK": "Hongkong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JO": "Jordan",
    "KH": "Kampuchea (Cambodia )",
    "KZ": "Kazakstan",
    "KE": "Kenya",
    "KR": "Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Laos",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MU": "Mauritius",
    "MX": "Mexico",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "MS": "Montserrat Is.",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "KP": "North Korea",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PA": "Panama",
    "PG": "Papua New Cuinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PL": "Poland",
    "PF": "French Polynesia",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RO": "Romania",
    "RU": "Russia",
    "LC": "Saint Lueia",
    "VC": "Saint Vincent",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Is.",
    "SO": "Somali",
    "ZA": "South Africa",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan",
    "TJ": "Tajikstan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TG": "Togo",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kiongdom",
    "US": "United States of America",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "YE": "Yemen",
    "YU": "Yugoslavia",
    "ZW": "Zimbabwe",
    "ZR": "Zaire",
    "ZM": "Zambia",
};
var country= [
    ["AO", "安哥拉"],
    ["AF", "阿富汗"],
    ["AL", "阿尔巴尼亚"],
    ["DZ", "阿尔及利亚"],
    ["AD", "安道尔共和国"],
    ["AI", "安圭拉岛"],
    ["AG", "安提瓜和巴布达"],
    ["AR", "阿根廷"],
    ["AM", "亚美尼亚"],
    ["AU", "澳大利亚"],
    ["AT", "奥地利"],
    ["AZ", "阿塞拜疆"],
    ["BS", "巴哈马"],
    ["BH", "巴林"],
    ["BD", "孟加拉国"],
    ["BB", "巴巴多斯"],
    ["BY", "白俄罗斯"],
    ["BE", "比利时"],
    ["BZ", "伯利兹"],
    ["BJ", "贝宁"],
    ["BM", "百慕大群岛"],
    ["BO", "玻利维亚"],
    ["BW", "博茨瓦纳"],
    ["BR", "巴西"],
    ["BN", "文莱"],
    ["BG", "保加利亚"],
    ["BF", "布基纳法索"],
    ["MM", "缅甸"],
    ["BI", "布隆迪"],
    ["CM", "喀麦隆"],
    ["CA", "加拿大"],
    ["CF", "中非共和国"],
    ["TD", "乍得"],
    ["CL", "智利"],
    ["CN", "中国"],
    ["CO", "哥伦比亚"],
    ["CG", "刚果"],
    ["CK", "库克群岛"],
    ["CR", "哥斯达黎加"],
    ["CU", "古巴"],
    ["CY", "塞浦路斯"],
    ["CZ", "捷克"],
    ["DK", "丹麦"],
    ["DJ", "吉布提"],
    ["DO", "多米尼加共和国"],
    ["EC", "厄瓜多尔"],
    ["EG", "埃及"],
    ["SV", "萨尔瓦多"],
    ["EE", "爱沙尼亚"],
    ["ET", "埃塞俄比亚"],
    ["FJ", "斐济"],
    ["FI", "芬兰"],
    ["FR", "法国"],
    ["GF", "法属圭亚那"],
    ["GA", "加蓬"],
    ["GM", "冈比亚"],
    ["GE", "格鲁吉亚"],
    ["DE", "德国"],
    ["GH", "加纳"],
    ["GI", "直布罗陀"],
    ["GR", "希腊"],
    ["GD", "格林纳达"],
    ["GU", "关岛"],
    ["GT", "危地马拉"],
    ["GN", "几内亚"],
    ["GY", "圭亚那"],
    ["HT", "海地"],
    ["HN", "洪都拉斯"],
    ["HK", "香港"],
    ["HU", "匈牙利"],
    ["IS", "冰岛"],
    ["IN", "印度"],
    ["ID", "印度尼西亚"],
    ["IR", "伊朗"],
    ["IQ", "伊拉克"],
    ["IE", "爱尔兰"],
    ["IL", "以色列"],
    ["IT", "意大利"],
    ["JM", "牙买加"],
    ["JP", "日本"],
    ["JO", "约旦"],
    ["KH", "柬埔寨"],
    ["KZ", "哈萨克斯坦"],
    ["KE", "肯尼亚"],
    ["KR", "韩国"],
    ["KW", "科威特"],
    ["KG", "吉尔吉斯坦"],
    ["LA", "老挝"],
    ["LV", "拉脱维亚"],
    ["LB", "黎巴嫩"],
    ["LS", "莱索托"],
    ["LR", "利比里亚"],
    ["LY", "利比亚"],
    ["LI", "列支敦士登"],
    ["LT", "立陶宛"],
    ["LU", "卢森堡"],
    ["MO", "澳门"],
    ["MG", "马达加斯加"],
    ["MW", "马拉维"],
    ["MY", "马来西亚"],
    ["MV", "马尔代夫"],
    ["ML", "马里"],
    ["MT", "马耳他"],
    ["MU", "毛里求斯"],
    ["MX", "墨西哥"],
    ["MD", "摩尔多瓦"],
    ["MC", "摩纳哥"],
    ["MN", "蒙古"],
    ["MS", "蒙特塞拉特岛"],
    ["MA", "摩洛哥"],
    ["MZ", "莫桑比克"],
    ["NA", "纳米比亚"],
    ["NR", "瑙鲁"],
    ["NP", "尼泊尔"],
    ["NL", "荷兰"],
    ["NZ", "新西兰"],
    ["NI", "尼加拉瓜"],
    ["NE", "尼日尔"],
    ["NG", "尼日利亚"],
    ["KP", "朝鲜"],
    ["NO", "挪威"],
    ["OM", "阿曼"],
    ["PK", "巴基斯坦"],
    ["PA", "巴拿马"],
    ["PG", "巴布亚新几内亚"],
    ["PY", "巴拉圭"],
    ["PE", "秘鲁"],
    ["PH", "菲律宾"],
    ["PL", "波兰"],
    ["PF", "法属玻利尼西亚"],
    ["PT", "葡萄牙"],
    ["PR", "波多黎各"],
    ["QA", "卡塔尔"],
    ["RO", "罗马尼亚"],
    ["RU", "俄罗斯"],
    ["LC", "圣卢西亚"],
    ["VC", "圣文森特岛"],
    ["SM", "圣马力诺"],
    ["ST", "圣多美和普林西比"],
    ["SA", "沙特阿拉伯"],
    ["SN", "塞内加尔"],
    ["SC", "塞舌尔"],
    ["SL", "塞拉利昂"],
    ["SG", "新加坡"],
    ["SK", "斯洛伐克"],
    ["SI", "斯洛文尼亚"],
    ["SB", "所罗门群岛"],
    ["SO", "索马里"],
    ["ZA", "南非"],
    ["ES", "西班牙"],
    ["LK", "斯里兰卡"],
    ["SD", "苏丹"],
    ["SR", "苏里南"],
    ["SZ", "斯威士兰"],
    ["SE", "瑞典"],
    ["CH", "瑞士"],
    ["SY", "叙利亚"],
    ["TW", "台湾省"],
    ["TJ", "塔吉克斯坦"],
    ["TZ", "坦桑尼亚"],
    ["TH", "泰国"],
    ["TG", "多哥"],
    ["TO", "汤加"],
    ["TT", "特立尼达和多巴哥"],
    ["TN", "突尼斯"],
    ["TR", "土耳其"],
    ["TM", "土库曼斯坦"],
    ["UG", "乌干达"],
    ["UA", "乌克兰"],
    ["AE", "阿拉伯联合酋长国"],
    ["GB", "英国"],
    ["US", "美国"],
    ["UY", "乌拉圭"],
    ["UZ", "乌兹别克斯坦"],
    ["VE", "委内瑞拉"],
    ["VN", "越南"],
    ["YE", "也门"],
    ["YU", "南斯拉夫"],
    ["ZW", "津巴布韦"],
    ["ZR", "扎伊尔"],
    ["ZM", "赞比亚"]
];
const socket = io.connect('http://localhost:5000/relays');

const checkSize = (lastLeft, element) => {
    // console.log(element.Left);
    if(element.offsetLeft !== lastLeft){
        element.onresize();
    }
    setTimeout(checkSize, 100, element.offsetLeft, element);
};
class RelayMap extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.initalECharts();
        document.getElementById('hot-map').onresize = () =>{this.state.map.resize();};
        setTimeout(checkSize, 1000, 0, document.getElementById('hot-map'));
        socket.on('update', data=>{this.addNode(data)});
        socket.emit('get');
    }
    componentWillMount(){
        this.setState({
            relays: [],
            colors : ["#4CAF50", "#536DFE", "#FF8F00", "#4E342E", "#FF6D00", "#ff1744", "#455A64"],
        });
    }
    componentWillUnmount(){
    }
    addNode(data){
        if (this.state.map){
            let previousOption = this.state.map.getOption();
            previousOption.series[0].data = data.relays;
            this.state.map.setOption(previousOption, true, false);
            this.setState({
                relays: data.relays,
                time: data.time,
            });
        }
    }
    initalECharts() {
        const myChart = echarts.init(document.getElementsByName('map')[0]);
        this.setState({ map: myChart });
        myChart.setOption({
            backgroundColor: '#000000',
            title : {
                // text: 'Onion Relays Maps',
                // subtext: `${this.state.relays.length} Records` ,
                //sublink: 'http://www.thinkgis.cn/public/sina',
                left: 'center',
                top: 'top',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: params => {return `Country : ${geolocation[params.value[3].toUpperCase()] || 'Unkonwn'}<br />Address : ${params.value[2]}<br />Status: ${params.value[3] ? "Run" : "Stop"}`;}
                },
            legend: {
                left: 'left',
                data: ['Public Relays'],
                textStyle: {
                    color: '#ccc'
                }
            },
            geo: {
                map: 'world',
                roam: true,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#7f7c7c8c',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#5a6c7f'
                    }
                },
                silent: true,
            },
             series: [{
            //     name: '弱',
            //     type: 'scatter',
            //     coordinateSystem: 'geo',
            //     symbolSize: 1,
            //     large: true,
            //     itemStyle: {
            //         normal: {
            //             shadowBlur: 2,
            //             shadowColor: 'rgba(37, 140, 249, 0.8)',
            //             color: 'rgba(37, 140, 249, 0.8)'
            //         }
            //     },
            //     data: this.state.relays,
            // }, {
            //     name: '中',
            //     type: 'scatter',
            //     coordinateSystem: 'geo',
            //     symbolSize: 1,
            //     large: true,
            //     itemStyle: {
            //         normal: {
            //             shadowBlur: 2,
            //             shadowColor: 'rgba(14, 241, 242, 0.8)',
            //             color: 'rgba(14, 241, 242, 0.8)'
            //         }
            //     },
            //     data: []
            // },{
                name: 'Public Relay',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 2,
                large: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 3,
                        shadowColor: 'rgba(27, 130, 40, 0.8)',
                        color: '#24f814D0'
                    }
                },
                data: this.state.relays,
            }]
        });
    }
        render() {
        const { translate } = this.context;
        return(
                <div id="hot-map" style={{ display: 'flex' , flexDirection: 'column', minHeight: '85vh' }}>
                    <div> <div style={{ color: "#fff", fontSize: '25px', textAlign: "center" }}> {translate('resources.relays.title')} </div>
                        <div style={{ color: "#ffffff8c", fontSize: '15px', textAlign: "center" }}>
                            {translate('resources.relays.subtitle', {count: this.state.relays.length})}
                            <br/>
                            <div style={{fontSize: '10px'}}>
                                {translate('resources.relays.update', {time: this.state.time})}
                            </div>
                        </div>
                    </div>
                    <div name="map" style={{ flex: "1 1 100%", padding: '0' }}/>
                </div>
        );
    }
}

export default RelayMap;
RelayMap.contextTypes = {
    translate: PropTypes.func,
};
