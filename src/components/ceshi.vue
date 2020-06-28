<template>
    <div class="main">
        <div id="d1">
            <div style="color:red;" @click="ceshi" class="c1" id="d2">测试</div>
        </div>
        <el-table :data="tableData" id="ta">
            <el-table-column label="1" prop="first"></el-table-column>
            <el-table-column label="2" prop="first1"></el-table-column>
            <el-table-column label="2" prop="first1"></el-table-column>
            <el-table-column label="2" prop="first1"></el-table-column>
            <el-table-column label="2" prop="first1"></el-table-column>
            <el-table-column label="2" prop="first1" fixed="right"></el-table-column>
        </el-table>
        <el-button type="primary" @click="ceshi1">测试二</el-button>
        <el-button type="success" @click="exportExcel">导出表格</el-button>
    </div>
</template>
<script>
import FileSaver from 'file-saver';
 
import XLSX from 'xlsx';
export default {
    data(){
        return{
            tableData:[
                {first:1,first1:2},
                {first:1,first1:2},
                {first:1,first1:2},
                {first:1,first1:2},
            ]
        }
    },
    created(){
        var geolocation=new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus()==BMAP_STATUS_SUCCESS){
                    var lat=r.latitude//当前经度
                    var lng=r.longitude//当前纬度
                    var province=r.address.province //返回当前省份
                    var city=r.address.city//返回当前城市
                    console.log(r)
                    console.log(lat)
                    console.log(lng)
                    console.log(province)
                    console.log(city)
                    // $('.cityName').text(city)
                }
            })
    },
    methods:{
        exportExcel() {
　　　　　　　　let vb = XLSX.utils.table_to_book(document.getElementById('ta'));
　　　　　　　　let vbout = XLSX.write(vb, {bookType: 'xlsx', bookSST: true, type: 'array'});
　　　　　　　　try {
    　　　　　　　　FileSaver.saveAs(new Blob([vbout], {type: 'application/octet-stream'}), '信息.xlsx');
　　　　　　　　} catch (e) {
    　　　　　　　　if (typeof console !== 'undefined') console.log(e, vbout);
　　　　　　　　}
　　　　　　　　return vbout;
　　　　},
        // 解决表格中含有fixed导出数据有两份的问题
        // 先找到el-table__fixed-right，再删除该节点，最后再导出数据        测试二按钮=>导出数据
        ceshi1(){
            let a=document.getElementById('ta')
            console.log(a)
            let b=document.getElementsByClassName('el-table__fixed-right')
            console.log(b[0])
            a.removeChild(b[0])
            this.exportExcel()
        },
        ceshi(){
            var dd=document.getElementById('d1')
            var d1=document.getElementById('d2')
            console.log(dd)
            console.log(d1)
            // dd.removeChild(d1)
            var d3=document.createElement('li')
            d3.innerHTML='你好'
            var d4=document.createElement('a')
            d4.innerHTML="超链接"
            d4.href="www.baidu.com"
            dd.appendChild(d3)
            dd.appendChild(d4)
        }
    }
}
</script>