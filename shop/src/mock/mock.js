import Mock from 'mockjs'
import data from './data.json'

Mock.mock('http://www.lzy.com/getlist',{data:data.list});
let random = Mock.Random;
let  datalist = (req)=>{
    let mechinelist = [];
    for(let i=0;i<100;i++){
        let mechine = {
            name:random.ctitle(5,7),
            img:random.dataImage('125x125',"农机"+random.integer(1,100)),
            price:random.integer(1000,10000),
            company:random.csentence(5,6),
            city:random.city()


        }
        mechinelist.push(mechine);
    }
    return mechinelist;

}
Mock.mock('http://www.lzy.com/varityItem',datalist);