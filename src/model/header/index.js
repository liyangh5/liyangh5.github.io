import React,{Fragment} from "react";
import styles from "./index.less"
export default  function Header (){
    const data=[
        {title:"首页",
           url:"http://localhost:3000/aliGW"},
           {title:"社会招聘",
              url:"https://job.alibaba.com/zhaopin/positionList.htm?spm=a2obv.11410899.0.0.66666c616FSBy7"},
             {title:"校园招聘",
                url:"https://campus.alibaba.com/index.htm"},
                {title:"了解阿里",
                url:"https://job.alibaba.com/zhaopin/about.htm?spm=a2obv.11410899.0.0.2e816c614gdbax"},
                {title:"个人中心",
                 url:"https://passport.alibaba.com/login.htm?&appName=hrjob&params=https%3A%2F%2Fjob.alibaba.com%2Fzhaopin%2Fapply.htm%3Fspm%3Da2obv.11410899.0.0.2e816c61tDZnS7"}
            ]
    return (
         <div className={styles.wrapheader}>
           <header className={styles.header}>
               <span className={styles.logo}></span>
               <span className={styles.title}>社招官网</span>
           <ul className={styles.wraplist}>
          {data.map((item,index)=>
              <a key={index} href={item.url} >{item.title}</a>
          )}
          </ul>
          <p className={styles.wraplogin}>
              <span>欢迎来到阿里巴巴集团招聘！ <a href="https://passport.alibaba.com/login.htm?spm=a2obv.11410899.0.0.55ef6c6121cUMP&appName=hrjob&params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm"> 登录 </a>|<a href="https://reg.taobao.com/member/reg/fill_mobile.htm"> 注册 </a></span>
          </p>
           </header>
         </div>       
    )
}