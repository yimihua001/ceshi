const fliterbase = {
	areaArr: [{
			minArea: '',
			maxArea: '',
			showname: '不限',
			isactive:true,
			type:'1'
		},
		{
			minArea: '0',
			maxArea: '60',
			showname: '60㎡以下',
			isactive:false,
			type:'1'
		},
		{
			minArea: '60',
			maxArea: '90',
			showname: '60-90㎡',
			isactive:false,
			type:'1'
		},
		{
			minArea: '90',
			maxArea: '120',
			showname: '90-120㎡',
			isactive:false,
			type:'1'
		},
		{
			minArea: '120',
			maxArea: '150',
			showname: '120-150㎡',
			isactive:false,
			type:'1'
		},
		{
			minArea: '150',
			maxArea: '200',
			showname: '150-200㎡',
			isactive:false,
			type:'1'
		},
		{
			minArea: '200',
			maxArea: '',
			showname: '200㎡以上',
			isactive:false,
			type:'1'
		},
	],
	typeArr: [{
			houseType: '',
			showname: '不限',
			isactive:true,
			type:'2'
		},
		{
			houseType: '1室',
			showname: '一室',
			isactive:false,
			type:'2'
		},
		{
			houseType: '2室',
			showname: '二室',
			isactive:false,
			type:'2'
		},
		{
			houseType: '3室',
			showname: '三室',
			isactive:false,
			type:'2'
		},
		{
			houseType: '4室',
			showname: '四室',
			isactive:false,
			type:'2'
		},
		{
			houseType: '5室',
			showname: '五室以上',
			isactive:false,
			type:'2'
		}
	],
	ascriptionArr: [{
			ascription: '',
			showname: '不限',
			isactive:true,
			type:'3'
		},
		{
			ascription: '100121,100122,100501',
			showname: '个人',
			isactive:false,
			type:'3'
		},
		{
			ascription: '100502',
			showname: '中介',
			isactive:false,
			type:'3'
		}
	],
	decorationArr: [{
			decoration: '',
			showname: '不限',
			isactive:true,
			type:'4'			
		},
		{
			decoration: '104202',
			showname: '毛坯',
			isactive:false,
			type:'4'
		},
		{
			decoration: '104203',
			showname: '简装',
			isactive:false,
			type:'4'
		},
		{
			decoration: '104204',
			showname: '精装',
			isactive:false,
			type:'4'
		}
	],
	floorArr: [{
			floor: '',
			showname: '不限',
			isactive:true,
			type:'5'
		},
		{
			floor: '1',
			showname: '低楼层',
			isactive:false,
			type:'5'
		},
		{
			floor: '2',
			showname: '中楼层',
			isactive:false,
			type:'5'
		},
		{
			floor: '3',
			showname: '高楼层',
			isactive:false,
			type:'5'
		}
	],
	buildingYearsArr: [{
			buildingYears: '',
			showname: '不限',
			isactive:true,
			type:'6'
		},
		{
			buildingYears: '5',
			showname: '5年以内',
			isactive:false,
			type:'6'
		},
		{
			buildingYears: '10',
			showname: '10年以内',
			isactive:false,
			type:'6'
		},
		{
			buildingYears: '15',
			showname: '15年以内',
			isactive:false,
			type:'6'
		},
		{
			buildingYears: '20',
			showname: '20年以内',
			isactive:false,
			type:'6'
		},
		{
			buildingYears: '21',
			showname: '20年以上',
			isactive:false,
			type:'6'
		},
	],
	publishArr:[
		{
			publishType: '',
			showname: '不限',
			isactive:true,
			type:'7'
		},
		{
			publishType: '100801',
			showname: '住宅',
			isactive:false,
			type:'7'
		},
		{
			publishType: '100802',
			showname: '别墅',
			isactive:false,
			type:'7'
		},
		{
			publishType: '100803',
			showname: '商铺',
			isactive:false,
			type:'7'
		},
		{
			publishType: '100804',
			showname: '写字楼',
			isactive:false,
			type:'7'
		},
		{
			publishType: '100807',
			showname: '车库',
			isactive:false,
			type:'7'
		},
	],
	sortArr: [{
			sortCloum: '',
			sort: '',
			showname: '默认排序',
			isactive:true,
			type:'8'
		},
		{
			sortCloum: 'totalPrice',
			sort: 'ASC',
			showname: '价格从低到高',
			isactive:false,
			type:'8'
		},
		{
			sortCloum: 'totalPrice',
			sort: 'DESC',
			showname: '价格从高到低',
			isactive:false,
			type:'8'
		},
		{
			sortCloum: 'area',
			sort: 'ASC',
			showname: '面积从低到高',
			isactive:false,
			type:'8'
		},
		{
			sortCloum: 'area',
			sort: 'DESC',
			showname: '面积从高到低',
			isactive:false,
			type:'8'
		},
	],
}

module.exports = {
	fliterbase: fliterbase
}
