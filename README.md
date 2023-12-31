# 阿魂自适应静态网页，适合用于个人主页或者首页

## 源码成品展示（长动图，慢慢看）：

**没别的，纯纯自己改着玩的，用于搭建自己的个人网站，B站UP叫：[阿魂不在线](https://space.bilibili.com/1079805307)（做游戏视频的）**

## 这个网站有什么？

**纯纯自学高中生，[是将此主页内容修改而来的](https://www.bilibili.com/video/BV19Y4y1B7Z5)**

**删减了一些内容，加入了自己想要的东西，包括但不限于：适配暗色模式，更改了资源分享功能（纯前端静态的页面，没做接口只是用于小范围使用），加入了内置[docsify](https://docsify.js.org/#/)的文档页，适配了手机浏览器（虽然很多显示bug，但不重要，本身就不是给手机端做的，但是依然在尽力适配），放上了多链接转跳页面，将原有的源码尽可能的加上了注释，看起来更舒服吧（），其他的就没有了，除了全局的菜单栏和首页的布局几乎是没有了以前的样子。**

### 并且本网站项目免费开源在了[GitHub](https://github.com/night-soul/shouye)欢迎各位大佬前来指点

## 下面内容为更新日志：

> #### 2023年5月20日：

正式决定制作一个属于自己的网站，但是不知道从何做起，直到发现了[这位UP](https://www.bilibili.com/video/BV19Y4y1B7Z5)的作业，有了思路，开始研究起了纯html三件套的项目...

一个下午，修改制作了包括，配色，四个页面的超链接等等，并且用js制作出了检测系统配色模式而开启暗色，而且增加了开关

> #### 2023年6月16日：

我在一天看网页的时候发现一个问题：在网页处于暗色模式的时候PC端的滚动条还是白色，特别难看![难看！](https://yh-1303099773.cos.ap-beijing.myqcloud.com/SY/toufa/README/2023n6y16r.png)

所以说在原本的CSS文件中添加了修改滚动条样式的代码：

```CSS
/* 修改滚动条的颜色 */

::-webkit-scrollbar {

 width: 12px; /* 设置滚动条的宽度 */

 background-color: #333; /* 设置滚动条的背景颜色 */

}

/* 修改滚动条滑块的样式 */

::-webkit-scrollbar-thumb {

 background-color: #666; /* 设置滚动条滑块的颜色 */

 border-radius: 6px; /* 设置滚动条滑块的圆角 */

}

/* 修改滚动条滑块在hover状态下的样式 */

::-webkit-scrollbar-thumb:hover {

 background-color: #999; /* 设置滚动条滑块在hover状态下的颜色 */

}

/* 修改滚动条轨道的样式 */

::-webkit-scrollbar-track {

 background-color: #222; /* 设置滚动条轨道的颜色 */

}

/* 修改滚动条轨道在hover状态下的样式 */

::-webkit-scrollbar-track:hover {

 background-color: #333; /* 设置滚动条轨道在hover状态下的颜色 */

}
```

就可以变成这样的效果：![好看！！！！！](https://yh-1303099773.cos.ap-beijing.myqcloud.com/SY/toufa/README/2023n6y16r2.png)

由于我觉得挺好看，所以淡色背景下也是深色的滚动条（绝对不是我懒的放到JS里）



> #### 2023年6月17日

自学Stable Diffusion然后用PS修改替换了原本的个人介绍的主图：![浅色模式（左）深色模式（右）](https://yh-1303099773.cos.ap-beijing.myqcloud.com/SY/toufa/README/2023n6y17r.png)

页面效果：

<img src="https://yh-1303099773.cos.ap-beijing.myqcloud.com/SY/toufa/README/2023n6y17r2.png" alt="效果图" style="zoom:50%;" />

> #### 2023年6月18日

我在资源页面，做了一个导航栏分类的功能，但是当时只是想临时用一下，就用html随便写了写，现在发现一个问题，手机端完全使用不了，甚至专门写了个媒体监测把这个功能在手机端给屏蔽了，结果！您猜怎么着！在网上发现这个[开源项目](https://github.com/ayangweb/HTML-CSS-case/tree/master/30.%E4%BE%A7%E8%BE%B9%E5%B1%95%E5%BC%80%E6%A0%8F-%E5%85%A8%E9%9A%90%E8%97%8F)正好可以放在资源页上！

后续在ziyuan.html上将原本的分类代码改为:

```html
        <!-- 左侧分类跳转面板 -->
        <div class="navbar">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">
                <i class="fa fa-outdent"></i>
            </label>
            <ul>
                <li>
                    <img src="images/bilibili.png" alt="" />
                    <span>阿魂资源导航页</span>
                    <span>点击左侧按钮隐藏</span>

                </li>
                <li>
                    <a href="#category1">
                        <span>软件下载</span>
                    </a>
                </li>
                <li>
                    <a href="#category2">
                        <span>PR</span>
                    </a>
                </li>
                <li>
                    <a href="#category3">
                        <span>AE</span>
                    </a>
                </li>
                <li>
                    <a href="#category4">
                        <span>PS</span>
                    </a>
                </li>
                <li>
                    <a href="#category5">
                        <span>AU</span>
                    </a>
                </li>
            </ul>
        </div>
```

然后在CSS部分改为：   

```    css
        .navbar {
            /* 相对定位 */
            position: fixed;
            width: 100%;
            height: 50px;
            line-height: 50px;
            z-index: 1;

        }
        .navbar input {
            /* 隐藏元素 */
            display: none;
        }
        .navbar label {
            /* 绝对定位 */
            position: absolute;
            top: 60px;
            left: 150px;
            font-size: 20px;
            color: #5a4848;
            padding-left: 20px;
            cursor: pointer;
            /* 加过渡 */
            transition: all 0.5s;

        }
        .navbar ul {
            position: absolute;
            top: 0;
            left: 0;
            width: 150px;
            /* 高度占浏览器可视区域的高度 */
            height: 100vh;
            background-color: #20222a;
            transition: all 0.5s;
        }
        .navbar ul li {
            width: 100%;
            height: 70px;
            font: 120 25px 'font-R';
        }
        .navbar ul li:first-child {
            /* 弹性布局 让图片和文字垂直+水平居中于盒子内 */
            display: flex;
            justify-content: center;
            align-items: center;
            /* 改变了盒子的主轴方向 让两个元素垂直排列 */
            flex-direction: column;
            width: 100%;
            height: 150px;
            padding: 10px;
        }
        .navbar ul li:first-child img {
            width: 80px;
            border-radius: 50%;
        }
        .navbar ul li:first-child span {
            color: #fff;
            font-size: 14px;
            /* 禁止文字换行 */
            white-space: nowrap;
        }
        .navbar ul li a {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            color: #d2d2d2;
            /* 取消a标签的下划线 */
            text-decoration: none;
            /* 现在盒子内直接定义好左边框 不过颜色为透明色也就看不见 */
            border-left: 6px solid transparent;
            display: flex;
            justify-content: center;
        }
        .navbar ul li a i {
            font-size: 18px;
            margin: 0 15px;
        }
        .navbar ul li a span {
            font: 120 20px 'font-R';
        }
        .navbar ul li a:hover {
            color: #fff;
            /* 这样文字和图标会被带跑不太好看 解决办法很简单 */
            /* 然后鼠标放上去变颜色就可以了 */
            border-left-color: #fb7299;
        }
        .navbar input:checked+label {
            left: 0;
        }
        .navbar input:checked+label i {
            /* 沿着y轴旋转180度 */
            transform: rotateY(180deg);
            color: #b032ef;
        }
        .navbar input:checked~ul {
            left: -200px;
        }
```

加上以上代码后就需要在JS里添加暗色的白名单了

`.navbar input:checked+label i {color: #ffffff;}.navbar label {color: #ffffff;}`

最后效果

![效果展示](https://yh-1303099773.cos.ap-beijing.myqcloud.com/SY/toufa/README/2023n6y18r.gif)



> #### 2023年6月24日

端午休假的最后一天，整整网站吧

首先是解决一直以来在手机端的麻烦事，就是已进入页面就是个视频，然而手机端的一些浏览器有一些功能

就是会自动拾取到或者说嗅探到这个视频：<img src="https://yh-1303099773.cos.ap-beijing.myqcloud.com/SY/toufa/README/2023n6y24r.jpg" alt="效果展示" style="zoom: 25%;" />

可以说是非常影响网站的观感！

所以决定将其换成不会被嗅探出来的内容！GIF！

代码方面改动很小只有HTML的一个改变：`            <img src="./image/logo.gif" class="background-image">`

然后就可以简简单单的变成GIF了！虽然可能会比较糊啥的，但也就是个启动页，不怕啥

然后就是在宝藏页加入了一个新的页面，CSGO服务器页！

因为我是在家里配置的服务器嘛，所以可以多整一些用途，就比如说游戏服务器：

![效果展示](https://yh-1303099773.cos.ap-beijing.myqcloud.com/SY/toufa/README/2023n6y24r2.png)

在这边我用了一位UP的[期末作业](https://www.bilibili.com/video/BV1DM4y1n7kv)（我真的是一个作业收割者）还是非常好用的（哎嘿）

还有就是资源页加入了AE和PR的插件：Misterhorse和EasyEdit Viewer，个人感觉非常好用

> #### 2023年8月16日

也就在今天，正式将其投入使用，使用域名：nitsol.xyz 就可以访问本站，并且将其全部图片内容全部搬云，并且将资源页内容设置为跳转至我的博客：bk.nitsol.xyz

> #### 2023年9月10日

已将我的个人博客加入到主页面的资源页，因为wp的整体耗能更高，原本的便宜的阿里云服务器无法正常支撑，所以选择了另一个服务器，导致有了跨域问题，整体体验仍有问题，但整体的风格，包括菜单等等已经按照主页正常制作，还是比较舒服的。

> #### 2023年9月14日

因为gif这种格式的图片虽然是动图，但是没有比较好的优化格式，还是 太大，手机浏览体验还是没办法太流畅，所以决定使用js分开两个页面的html，做检测，如果是用手机进入页面则跳转到手机html上

```json
<script type="text/javascript">
    // 检测页面是否由手机浏览器打开
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = "free/";
    }
</script>
```

> #### 2023年10月2日

个人感觉原本的好友展示只能展示一些人，可能支持我到现在的兄弟们还有好多，不如换一个布局：
![更换前](https://yh-1303099773.cos.ap-beijing.myqcloud.com/SY/toufa/README/2023n6y24r2.png)

> #### 2023年12月31日

由于整个站用的都是oppo的开源字体，好看是好看，但还是太大了，导致加载页面的速度太慢了，使用了一个字体缩减工具缩了很多，大概原理就是输入一些网站里有的字符，然后比对字体文件里的字库，把这几个输入的字符单独提出来组成一个新的字体文件。
