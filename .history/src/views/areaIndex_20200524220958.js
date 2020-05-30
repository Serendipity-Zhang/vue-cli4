window.onload = function(){
    new Vue({
        el:"#app",
        data:{
            lists:[
                {
                    id:0,
                    name:'张三',
                    sex:0,
                    area:'北京市-北京市-柔坏区',
                    age:16,
                    province:{"ID": 2,"TopID": 0,"AddName": "北京市"},
                    city:{"ID": 48,"TopID": 2,"AddName": "北京市"},
                    nowarea:{"ID": 495,"TopID": 48,"AddName": "怀柔区"},
                },
                {
                    id:1,
                    name:'李四',
                    sex:1,
                    area:'北京市-北京市-柔坏区',
                    age:28,
                    province:{"ID": 2,"TopID": 0,"AddName": "北京市"},
                    city:{"ID": 48,"TopID": 2,"AddName": "北京市"},
                    nowarea:{"ID": 495,"TopID": 48,"AddName": "怀柔区"},
                },
                {
                    id:2,
                    name:'王五',
                    sex:1,
                    area:'北京市-北京市-柔坏区',
                    age:30,
                    province:{"ID": 2,"TopID": 0,"AddName": "北京市"},
                    city:{"ID": 48,"TopID": 2,"AddName": "北京市"},
                    nowarea:{"ID": 495,"TopID": 48,"AddName": "怀柔区"},
                },
            ],
            formOne:{
                name:"",
                sex:'',
                age:'',
                area:'',
                province:'',
                city:'',
                nowarea:'',
            },
            allSelect:false,
            checkboxOne:[0],
            provinceSelect:'',
            citySelect:'',
            areaSelect:'',
            province:[],
            city:[],
            area:[],
            nowFormOne:{},
            isPopout:false
        },
        methods:{
            addLists(){//添加
                this.saveData(this.formOne);
                if(this.formOne.name&&this.formOne.sex&&this.formOne.age&&this.formOne.area){
                    var alllength = this.lists.length;
                    this.formOne.id =  this.lists[alllength-1].id+1;
                    this.lists.push(this.formOne);
                    this.formOne={
                        name:"",
                        sex:'',
                        age:'',
                        area:''
                    }
                }else{
                    return;
                }
            },
            changeAllSelect(){//全选
                this.allSelect?this.lists.forEach(element => {this.checkboxOne.push(element.id)}):this.checkboxOne=[];
            },
            changeOneSelect(){//全选控制
                this.checkboxOne.length==this.lists.length?this.allSelect=true:this.allSelect=false;
            },
            deleteLists(id){//删除某一条
                this.lists = this.lists.filter(item=>item.id!=id);
            },
            edit(val){//点击弹出编辑框
                this.isPopout = true;
                this.nowFormOne = JSON.parse(JSON.stringify(val));
                this.provinceSelect = this.nowFormOne.province;
                this.citySelect = this.nowFormOne.city;
                this.areaSelect = this.nowFormOne.nowarea;
                this.changeProvince();
                this.changeCity();
            },
            getArea(){//获取地区
                this.province = site_address.filter(item=>item.TopID==0);
                this.city = site_address.filter(item=>item.TopID==1);
                this.area = site_address.filter(item=>item.TopID==32);
                this.provinceSelect = this.province[0];
                this.citySelect = this.city[0];
                this.areaSelect = this.area[0];
            },
            changeProvince(){//改变省
                this.city = site_address.filter(item=>item.TopID==this.provinceSelect.ID);
                this.area = site_address.filter(item=>item.TopID==this.city[0].ID);
                this.citySelect = this.city[0];
                this.areaSelect = this.area[0];
            },
            changeCity(){//改变市区
                this.area = site_address.filter(item=>item.TopID==this.citySelect.ID);
                this.areaSelect = this.area[0];
            },
            closePop(){//关闭弹框
                this.saveData(this.nowFormOne);
                this.lists = this.lists.map(item=>this.nowFormOne.id==item.id?this.nowFormOne:item);//更新数据
                this.getArea();//重置页面上的数据
                this.isPopout=false;
            },
            saveData(val){//储存改变地区的函数
                val.area = this.provinceSelect.AddName + "-" + this.citySelect.AddName + "-" + this.areaSelect.AddName;
                val.province = this.provinceSelect;
                val.city = this.citySelect;
                val.nowarea = this.areaSelect;
            }
        },
        mounted(){
            this.getArea();
        },
        filters:{
            sexFilter(val){
                return val==0?'男':'女';
            }
        }
    })
}