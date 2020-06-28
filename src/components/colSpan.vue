<template>
    <div class="main">
        <audio :src="require('../assets/voice/1.mp3')" id="d1"></audio>
        <!--  controls="controls" -->
        <el-button @click="ceshi">播放</el-button>
        <el-table :data="tabData" 
        :header-cell-style="{'background-color':'#ccc','border-left':'2px solid #fff','border-bottom':'0','font-weight':'500'}">
            <el-table-column label="测试"  prop="id"></el-table-column>
            <el-table-column label="测试1" prop="id1"></el-table-column>
            <el-table-column label="测试2" prop="id2"></el-table-column>
        </el-table>
        <h3>自制表格</h3>
        <table border="1" cellspacing="0">
            <thead>
                <th>第一列</th>
                <th>第二列</th>
                <th>第三列</th>
                <th>第四列</th>
            </thead>
            <tbody>
                <tr style="line-height:40px;">
                    <td style="color:red;" rowspan="2">第一行</td>
                    <td colspan="2">第一行</td>
                    <!-- <td>第一行</td> -->
                    <td>第一行</td>
                </tr>
                <tr style="line-height:40px;">
                    <!-- <td>第二行</td> -->
                    <td>第二行</td>
                    <td>第二行</td>
                    <td>第二行</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tabData:[
                {id:12,id1:324,id2:345},
                {id:12,id1:324,id2:345},
                {id:12,id1:324,id2:345},
                {id:12,id1:324,id2:345},
            ]
        }
    },
    created(){
       
    },
    methods:{
        ceshi(){
            // let audio = new Audio()
            // audio.src = require("../assets/voice/1.mp3")
            // audio.play();
            // console.log(audio.duration)
            var audio=document.getElementById('d1')
            // audio.play()
            console.log(audio.paused)
            if(audio.paused==false){
                audio.pause()
            }else{
                audio.play()
            }
            var sec=document.getElementById('d1').duration
            var state=document.getElementById('d1').defaultPlaybackRate
            console.log(sec)
            console.log(state)
        }
    }
}
</script>>