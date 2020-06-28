<template>
  <div class="hello" id="hello1">
    <el-table :data="tableData" id="outTable">
      <el-table-column width="100" label="编号" prop="id"></el-table-column>
      <el-table-column width="100" label="姓名" prop="name"></el-table-column>
      <el-table-column width="100" label="年龄" prop="age"></el-table-column>
      <el-table-column width="100" label="性别" prop="sex"></el-table-column>
    </el-table>
    <el-button type="success" @click="exportExcel">导出表格</el-button>
    <div id="printMe">
        <p>葫芦娃，葫芦娃</p>
        <p>一根藤上七朵花 </p>
        <p>小小树藤是我家 啦啦啦啦 </p>
        <p>叮当当咚咚当当　浇不大</p>
        <p> 叮当当咚咚当当 是我家</p>
        <p> 啦啦啦啦</p>
        <p>...</p>
        <!-- <div class="describle">
          <el-form :model="form" :rules="rules" ref="from" class="demo-ruleForm">
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="描述:" prop="describle">
              <el-input
                :disabled="detail"
                type="textarea"
                :rows="4"
                :maxlength="2000"
                placeholder=""
                v-model="form.describle">
              </el-input>
            </el-form-item>
          </el-form>
        </div> -->
    </div>
 
    <button v-print="'#printMe'">打印</button>
    <el-button @click="clickPrinting">打印测试</el-button>
    <el-button @click="clickPrinting1">打印测试1</el-button>
  </div>
</template>

<script>

import FileSaver from 'file-saver';
 
import XLSX from 'xlsx';
export default {
  name: 'HelloWorld',
  data () {
    return {
     tableData:[
       {id:1,name:'张三',age:22,sex:'男'},
       {id:2,name:'李四',age:22,sex:'男'},
       {id:3,name:'王二',age:22,sex:'男'},
     ]
    }
  },
  methods:{
    // 导出表格
    // npm install file-saver xlsx --save-dev
    // import FileSaver from 'file-saver';
 //import XLSX from 'xlsx';
    exportExcel() {
　　　　　　　　let vb = XLSX.utils.table_to_book(document.getElementById('outTable'));
　　　　　　　　let vbout = XLSX.write(vb, {bookType: 'xlsx', bookSST: true, type: 'array'});
　　　　　　　　try {
    　　　　　　　　FileSaver.saveAs(new Blob([vbout], {type: 'application/octet-stream'}), '信息.xlsx');
　　　　　　　　} catch (e) {
    　　　　　　　　if (typeof console !== 'undefined') console.log(e, vbout);
　　　　　　　　}
　　　　　　　　return vbout;
　　　　},
//  点击打印按钮
// 安装 npm install vue-print-nb --save

// 在main.js文件中注册
// import Print from 'vue-print-nb'

// Vue.use(Print);

// 打印整个页面
      clickPrinting() {
        let bdhtml=window.document.body.innerHTML;//获取当前页html代码
        let s="<！--start-->"//设置打印开始区域
        let e="<!--end-->"//设置打印结束区域
        let ps=bdhtml.substring(bdhtml.indexOf(s)+18)
        let pe=ps.substring(0,ps.indexOf(e))
        window.document.body.innerHTML=pe
        window.document.body.innerHTML=bdhtml
        window.print()
        window.document.body.innerHTML=bdhtml
        window.location.reload()
      },
      // 指定打印区域
      clickPrinting1(){
        let a=document.getElementById('hello1')
        // console.log(a.innerHTML)
        let newContent=a.innerHTML
        let oldContent=document.body.innerHTML
        document.body.innerHTML=newContent
        window.print()
        window.location.reload()
        document.body.innerHTML=oldContent
        return false
      }
    }
}
</script>
<style scoped>

</style>
