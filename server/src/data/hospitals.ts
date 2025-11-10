export type HospitalStatus = "normal" | "suspended" | "planning";

export interface HospitalInfo {
  id: string;
  code: string;
  name: string;
  medicalLevel: "SSS" | "AAA" | "BBB" | "AA" | "BB" | "O";
  status: HospitalStatus;
  province: string;
  city: string;
  address: string;
}

export const hospitals: HospitalInfo[] = [
  {
    id: "1",
    code: "HOS10001",
    name: "北京市第一人民医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "北京",
    city: "北京",
    address: "北京市东城区东华门街道1号"
  },
  {
    id: "2",
    code: "HOS10002",
    name: "北京市中医医院",
    medicalLevel: "AA",
    status: "normal",
    province: "北京",
    city: "北京",
    address: "北京市西城区展览路33号"
  },
  {
    id: "3",
    code: "HOS10003",
    name: "天津市中心医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "天津",
    city: "天津",
    address: "天津市河西区马场道154号"
  },
  {
    id: "4",
    code: "HOS10004",
    name: "天津市第三人民医院",
    medicalLevel: "BBB",
    status: "suspended",
    province: "天津",
    city: "天津",
    address: "天津市南开区黄河道83号"
  },
  {
    id: "5",
    code: "HOS10005",
    name: "上海市第一人民医院",
    medicalLevel: "SSS",
    status: "normal",
    province: "上海",
    city: "上海",
    address: "上海市虹口区海宁路100号"
  },
  {
    id: "6",
    code: "HOS10006",
    name: "上海市静安中心医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "上海",
    city: "上海",
    address: "上海市静安区西藏北路259号"
  },
  {
    id: "7",
    code: "HOS10007",
    name: "广州市人民医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "广东",
    city: "广州",
    address: "广州市越秀区中山三路1号"
  },
  {
    id: "8",
    code: "HOS10008",
    name: "广州中医药大学附属医院",
    medicalLevel: "AA",
    status: "normal",
    province: "广东",
    city: "广州",
    address: "广州市荔湾区新街口西堤二马路"
  },
  {
    id: "9",
    code: "HOS10009",
    name: "深圳市第二人民医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "广东",
    city: "深圳",
    address: "深圳市福田区笋岗西路3002号"
  },
  {
    id: "10",
    code: "HOS10010",
    name: "深圳市儿童医院",
    medicalLevel: "AA",
    status: "normal",
    province: "广东",
    city: "深圳",
    address: "深圳市福田区益田路7019号"
  },
  {
    id: "11",
    code: "HOS10011",
    name: "杭州市第一医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "浙江",
    city: "杭州",
    address: "杭州市上城区浣纱路261号"
  },
  {
    id: "12",
    code: "HOS10012",
    name: "杭州市中医院",
    medicalLevel: "AA",
    status: "suspended",
    province: "浙江",
    city: "杭州",
    address: "杭州市上城区邮电路453号"
  },
  {
    id: "13",
    code: "HOS10013",
    name: "宁波市鄞州人民医院",
    medicalLevel: "BBB",
    status: "normal",
    province: "浙江",
    city: "宁波",
    address: "宁波市鄞州区泰安西路251号"
  },
  {
    id: "14",
    code: "HOS10014",
    name: "宁波市妇女儿童医院",
    medicalLevel: "AA",
    status: "normal",
    province: "浙江",
    city: "宁波",
    address: "宁波市海曙区大沙泥街339号"
  },
  {
    id: "15",
    code: "HOS10015",
    name: "成都市第一人民医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "四川",
    city: "成都",
    address: "成都市青羊区文翁路18号"
  },
  {
    id: "16",
    code: "HOS10016",
    name: "成都市中西医结合医院",
    medicalLevel: "BB",
    status: "normal",
    province: "四川",
    city: "成都",
    address: "成都市锦江区庆云西街6号"
  },
  {
    id: "17",
    code: "HOS10017",
    name: "重庆市人民医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "重庆",
    city: "重庆",
    address: "重庆市渝中区两路口志诚大厦"
  },
  {
    id: "18",
    code: "HOS10018",
    name: "重庆市三峡中心医院",
    medicalLevel: "AA",
    status: "suspended",
    province: "重庆",
    city: "重庆",
    address: "重庆市万州区太白街道"
  },
  {
    id: "19",
    code: "HOS10019",
    name: "南京市第一医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "江苏",
    city: "南京",
    address: "南京市南京鼓楼区龙蟠路68号"
  },
  {
    id: "20",
    code: "HOS10020",
    name: "南京市中医院",
    medicalLevel: "AA",
    status: "normal",
    province: "江苏",
    city: "南京",
    address: "南京市秦淮区建邺路157号"
  },
  {
    id: "21",
    code: "HOS10021",
    name: "无锡市人民医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "江苏",
    city: "无锡",
    address: "无锡市梁溪区清扬路299号"
  },
  {
    id: "22",
    code: "HOS10022",
    name: "苏州市立医院东区",
    medicalLevel: "AAA",
    status: "normal",
    province: "江苏",
    city: "苏州",
    address: "苏州市姑苏区十梓街215号"
  },
  {
    id: "23",
    code: "HOS10023",
    name: "合肥市第一人民医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "安徽",
    city: "合肥",
    address: "合肥市庐阳区淮河路390号"
  },
  {
    id: "24",
    code: "HOS10024",
    name: "合肥市口腔医院",
    medicalLevel: "AA",
    status: "planning",
    province: "安徽",
    city: "合肥",
    address: "合肥市庐阳区亳州路156号"
  },
  {
    id: "25",
    code: "HOS10025",
    name: "武汉市中心医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "湖北",
    city: "武汉",
    address: "武汉市江岸区胜利街26号"
  },
  {
    id: "26",
    code: "HOS10026",
    name: "武汉市东湖医院",
    medicalLevel: "BB",
    status: "normal",
    province: "湖北",
    city: "武汉",
    address: "武汉市武昌区张之洞路87号"
  },
  {
    id: "27",
    code: "HOS10027",
    name: "长沙市中心医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "湖南",
    city: "长沙",
    address: "长沙市芙蓉区解放路161号"
  },
  {
    id: "28",
    code: "HOS10028",
    name: "长沙市中医院",
    medicalLevel: "AA",
    status: "normal",
    province: "湖南",
    city: "长沙",
    address: "长沙市天心区黄兴南路46号"
  },
  {
    id: "29",
    code: "HOS10029",
    name: "西安市第一医院",
    medicalLevel: "AAA",
    status: "normal",
    province: "陕西",
    city: "西安",
    address: "西安市碑林区粉巷161号"
  },
  {
    id: "30",
    code: "HOS10030",
    name: "西安市中医医院",
    medicalLevel: "AA",
    status: "normal",
    province: "陕西",
    city: "西安",
    address: "西安市雁塔区长安南路69号"
  }
];

