<template>
    <div>
        <button @click="getdata">获取数据</button>
        <button @click="delectdata">删除数据</button>
        
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    {{index+1}}:{{item.title}}
                </li>
            </ul>
        
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    methods: {
        ajax(){
            //ajax原理
 //           let musicurl = 'http://qzone-music.qq.com/fcg-bin/cgi_playlist_xml.fcg?uin=1114513467&json=1&g_tk=1916754934';
            let musicurl = 'https://api.apiopen.top/getWangYiNews';
        
            let xmlhttp;
            if(window.XMLHttpRequest){
                xmlhttp = new XMLHttpRequest();

            }else if(window.ActiveXObject){
                xmlhttp = ActiveXObject();

            }
            xmlhttp.open('GET',musicurl,true);
            xmlhttp.send();
            //判断服务器端的响应你   就是监听事件
            // xmlhttp.addEvenListener("readystatechange",()=>{
            //     if(xmlhttp.readystate == 4 && xmlhttp.status == 200){
            //         let obj = json.parse(xmlhttp.responseText);
                    
            //     }
            // })
            xmlhttp.onreadystatechange=()=>{
                if(xmlhttp.readyState===4){
                    if(xmlhttp.status===200){
                        let obj = JSON.parse(xmlhttp.responseText);
                        console.log(obj.result);
                        this.list = obj.result;
                        console.log(this.list);
                        console.log(this);
                        
                    }else{
                        console.log("error");
                    }
                }
            }
        },
        getdata(){
            this.ajax();
        },
        delectdata(){
            this.list = "";
        }
    },
}
</script>