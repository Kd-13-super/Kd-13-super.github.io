var posts=["2024/05/03/Mybatis注解查询/","2024/05/07/Vue-Element前端页面快速构建/","2024/04/29/hello-world/","2024/05/02/hexo初步搭建完成/","2024/05/06/控制反转和依赖注入/","2024/05/12/面向切面编程AOP/","2024/05/16/spring后端交互Vue前端/","2024/05/17/Vue-Element通用管理界面/","2024/05/23/初识STM32/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };