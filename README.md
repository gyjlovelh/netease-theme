
## SCSS编码规范


#### 命名规范
- 使用小写字母和破折号命名
```scss
/* Bad example */
.LSP_searchName {
}
.advancedQuery {
}
.statementadd {
}
#highCheck {
}
.net_search {
}

/* Good example */
.kendo-grid-container {
}
.ne-select-content {
}
```

- 使用"$+驼峰"命名scss变量
```scss
/* Bad example */
$Font_Size: 12px;

/* Good example */
$cTabviewBorder: #a1a1a1;
$cTabviewItem: #949494;
$cTabviewItemTitle: #333333;
$cTabviewItemHover: $blue;
$cTabviewItemSelected: $blue;
```

- 使用小写字母和破折号命名mixin
```scss
/* Bad example */
@mixin NormalFont { // 一般文字 13px
    font: normal $sFontNormal $sFontFamily;
    color: #666;
}

/* Good example */
// 默认背景
@mixin background-default {
    background-color: $cBackground;
}
```



#### 语义话的名称
```scss
/* Bad example */
.ml03 {
}

/* Good example */
.button-wrap {
}

.cancel-btn {
}

.port-selector-content {
}

.portal-red-bg {
    background: #e71f19;
}

.portal-orange-bg {
    background: #f0ac18;
}

.portal-yellow-bg {
    background: #f3e008;
}

.portal-green-bg {
    background: #7bb657;
}

.portal-dark-bg {
    background: #d1e1f1;
}
```



#### 避免使用ID
一般情况下ID不应该被应用于样式。
ID的样式不能被复用并且每个页面中你只能使用一次ID。
使用ID唯一有效的是确定网页或整个站点中的位置。
尽管如此，你应该始终考虑使用class，而不是id，除非只使用一次。



#### 避免标签名
当构建选择器时应该使用清晰， 准确和有语义的class(类)名。不要使用标签选择器。 如果你只关心你的class(类)名，而不是你的代码元素，这样会更容易维护。

从分离的角度考虑,在表现层中不应该分配html标记/语义。它可能是一个有序列表需要被改成一个无序列表，或者一个h2将被转换成h3。

如果你只使用具有实际意义的class(类)名，并且不使用元素选择器，那么你只需要改变你的html标记，而不用改动你的CSS。

```scss
/* Bad example */
div.content > header.content-header > h2.title {
  font-size: 2em;
}

/* Good example */
.content > .content-header > .title {
  font-size: 2em;
}
```



#### 避免在Html style中声明样式



#### 尽可能精确
```html
<article class="content news-content">
    <span class="title">News event</span>
    <div class="content-body">
        <div class="title content-title">
            Check this out
        </div>
     
        <p>This is a news article content</p>
     
        <div class="teaser">
            <div class="title">Buy this</div>
            <div class="teaser-content">Yey!</div>
        </div>
    </div>
</article>
```

```scss

/* Bad example */
.content .title {
  font-size: 2rem;
}

#portal_flexible {
    > * {
        position: relative;
        width: 100%;
    }
}


/* Good example */
.content > .title {
  font-size: 2rem;
}
 
.content > .content-body > .title {
  font-size: 1.5rem;
}
 
.content > .content-body > .teaser > .title {
  font-size: 1.2rem;
}
```



#### 缩写属性
```scss
/* Bad example */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;

/* Good example */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```



#### 0和单位
省略“0”值后面的单位。不要在0值后面使用单位，除非有值。
对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）。

```scss
/* Bad example */
.pickupclassify span {
    padding: 0px 10px;
    font-size: 16px;
    cursor: pointer;
}

/* Good example */
.sample-head-container {
    box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
}
```



#### 十六进制表示法
十六进制值应该全部小写，例如，#fff。在扫描文档时，小写字符易于分辨，因为他们的形式更易于区分。
```scss
/* Bad example */
li:last-child.activeDeparate::after {
    content: "";
    background: #F47A28;
}
.total-click {
    color:rgb(255, 255, 255);
    background-color:rgba(132, 170, 242, 1);
}

/* Good example */
.yellow {
    color: #f8991d;
}
@mixin normal-font { // 一般文字
    color: #666;
}
```



#### 声明顺序
相关的属性声明应当归为一组。由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。

- 结构性属性：
    - display
    - position, left, top, right etc.
    - overflow, float, clear etc.
    - margin, padding
- 表现性属性：
    - background, border etc.
    - font, text

```scss
/* Bad example */
.box {
    font-family: 'Arial', sans-serif;
    border: 3px solid #ddd;
    left: 30%;
    position: absolute;
    text-transform: uppercase;
    background-color: #eee;
    right: 30%;
    isplay: block;
    font-size: 1.5rem;
    overflow: hidden;
    padding: 1em;
    margin: 1em;
}

/* Good example */
.box {
    display: block;
    position: absolute;
    left: 30%;
    right: 30%;
    overflow: hidden;
    margin: 1em;
    padding: 1em;
    background-color: #eee;
    border: 3px solid #ddd;
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
}
```



#### 声明结束
为了保证一致性和可扩展性，每个声明应该用分号结束，每个声明换行。

```scss
/* Bad example */
.test {
    display: block; height: 100px
}

/* Good example */
.test {
    display: block;
    height: 100px;
}
```



#### 属性名结束
属性名的冒号后使用一个空格。出于一致性的原因，属性和值（但属性和冒号之间没有空格）的之间始终使用一个空格。

```scss
/* Bad example */
&.cancel-btn {
    color:#666666;
    border:1px solid #E4E4E4!important;
    background: #FFFFFF;
    &:hover {
        color:#FFFFFF;
        background:#84AAF2;
    }
}

/* Good example */
&.cancel-btn {
    color: #666666;
    border: 1px solid #e4e4e4 !important;
    background: #ffffff;
    &:hover {
        color: #ffffff;
        background: #84aaf2;
    }
}
```



#### 选择器和声明分离
每个选择器和属性声明总是使用新的一行。用于明显区分 祖先->后台选择器。

```scss
/* Bad example */
.k-widget, .k-block, .k-panel {
    background: #FEFBFE;
}

/* Good example */
.k-widget,
.k-block,
.k-panel {
    background: #fefbfe;
}
```



#### 规则分隔
规则之间始终有一个空行（双换行符）分隔。

```scss
/* Bad example */
#portSelector {
    .port-selector-search {
        padding: 0 4px;
        margin-top: 4px;
        .high-search {
            text-align: right;
            margin-top: 3px;
            .high-search-btn {
                color: #719df0;
                cursor: pointer;
                text-decoration: underline;
                &:hover {
                    color: #FF6600;
                }
            }
        }
    }
    .port-selector-content {
        height: 320px;
        overflow-y: auto;
        border: 1px solid #E4E4E4;
        margin: 5px 4px 0;
    }
    .port-selector-foot {
        padding: 0 4px;
        display: flex;
        justify-content: space-between;
    }
}

/* Good example */
#portSelector {
    .port-selector-search {
        padding: 0 4px;
        margin-top: 4px;
        
        .high-search {
            text-align: right;
            margin-top: 3px;
            
            .high-search-btn {
                color: #719df0;
                cursor: pointer;
                text-decoration: underline;
                
                &:hover {
                    color: #FF6600;
                }
            }
        }
    }
    
    .port-selector-content {
        height: 320px;
        overflow-y: auto;
        border: 1px solid #E4E4E4;
        margin: 5px 4px 0;
    }

    .port-selector-foot {
        padding: 0 4px;
        display: flex;
        justify-content: space-between;
    }
}
```



#### 遵循editorconfig
使用项目根目录下配置的.editorconfig, 保存文件时 Ctrl+Alt+L 格式化代码。



#### 使用SCSS
使用scss，而不是css编码。



#### 使用variables.scss
```scss
/* Bad example */
&.confirm-btn {
    color: #ffffff;
    border:1px solid #84AAF2;
    background: #84AAF2;
    &:hover {
        background:#588CED;
    }
}
&.cancel-btn {
    color:#666666;
    border:1px solid #E4E4E4!important;
    background: #FFFFFF;
    &:hover {
        color:#FFFFFF;
        background:#84AAF2;
    }
}
```


```scss
/* Good example */
@import "~@vapp/theme/variables";

.ui-megamenu {
    .ui-megamenu-root-list {
        & > .ui-menuitem {
            position: relative;
            line-height: $header-height;
        }
    }
}
```



#### 使用iconfont
```html
/* Bad example */
<span class="portal-link-btn back-traffic" (click)="backBusiness()"></span>
.back-traffic {
    position: relative;
    top: 3px;
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("/assets/img/dashboard/back.png");
}

/* Good example */
<span class="portal-link-btn" (click)="backBusiness()"><i class="iconfont">&#xe626;</i></span>
```



#### 使用SCSS嵌套
使用SCSS来写Sass，而不是CSS。

```scss
/* Bad example */
// /sample-web-1.0.0./app/vapp-common2/component/grid-column-setting-icon/grid-column-setting-icon.component.scss

/* Good example */
// /sample-web-1.0.0./app/vapp-common2/component/traffic-common-menu/traffic-common-menu.component.scss
```



#### 使用行注释
建议使用行注释代替块注释。建议注释独占一行。避免行末注释。

```scss
/* Bad example */
@mixin H1Title { // 一级标题 15px
    font: bold $sFontBigTitle $sFontFamily;
    color: #000;
}
@mixin H2Title { // 副标题 14px
    font: bold $sFont $sFontFamily;
    color: #333;
}

/* Good example */
// loading加载动画颜色
$cLoading: #ff6757;
```



#### Mixins与函数
多使用Mixins及函数处理通用样式规则，避免代码堆叠。
```scss
/* Bad example */
.edit-container {
    width: 1000px;
    .edit-container-left {
        width: 49%;
        float: left;
        .edit-c-m-select {
            //height: 25%;
        }
        .edit-container-content-main {
            position:relative;
            height: 300px;
            padding: 5px;
            border: 1px solid #ccc;
            margin:20px 0 10px;
            .edit-c-title {
                position: absolute;
                padding: 5px 5px;
                top: -16px;
                left: 10px;
                background: #fff;
            }
        }

    }
    .edit-container-right {
        width: 49%;
        float: right;
        .edit-c-m-select {
            //height: 25%;
        }
        .edit-container-content-main {
            position:relative;
            height: 300px;
            border: 1px solid #ccc;
            padding: 5px;
            margin:20px 0 10px;
            .edit-c-title {
                position: absolute;
                padding: 5px 5px;
                top: -16px;
                left: 10px;
                background: #fff;
            }
        }
    }
}


/* Good example */
@mixin NormalFont { // 一般文字 13px
    font: normal $sFontNormal $sFontFamily;
    color: #666;
}
@mixin linkFont { // 链接文字 12px
    font: normal $smallFont $sFontFamily;
    color: #588ced;
}
```



#### 尽量抽象公共样式
@vapp/theme, shared
```scss
/* Bad example */
// /sample-web-1.0.0./app/vapp-common2/component/pw-option/pw-option.component.scss
// /sample-web-1.0.0./app/vapp-common2/component/lsp-option/lsp-option.component.scss
// /sample-web-1.0.0./app/vapp-common2/component/traffic-common-menu/traffic-common-menu.component.scss
.advancedQuery {
}
.advancedQuery:hover{
}

/* Good example */
// /sample-web-1.0.0./app/otnm-portal/shared/style/style.scss
.portal-red-bg {
    background: #E71F19;
}

.portal-orange-bg {
    background: #F0AC18;
}

.portal-yellow-bg {
    background: #f3e008;
}

.portal-green-bg {
    background: #7BB657;
}

.portal-dark-bg {
    background: #d1e1f1;
}
```



#### 使用class覆盖第三方组件样式
- 使用第三方组件时尽量避免直接重写原标签样式
- 使用不同类名区分不同场景样式需求
- 嵌套使用相同第三方组件时，确保样式达到效果的同时，考虑外层样式权重尽量小于内层样式权重，方便内层样式定位
- override一般放置在theme工程中，若有特殊样式视情况在本组件中重写第三方样式


```scss
/* Bad example */
kendo-dialog {
    .k-widget {
        backgroud: #d1e1f1;
    }
}
/* Good example */
kendo-dialog.override {
    .k-widget {
        backgroud: #d1e1f1;
    }
}
```



#### 慎重修改已有的代码
注释掉别的代码
- 这种情况正确的处理方式是同他人沟通，相互使用不同的类名以区分彼此样式
```
/* 注释掉别人的代码 */
//kendo-panelbar {
//    .k-item {
//       backgroud: #d1e1f1; 
//    }
//}
/* 写自己的代码 */
kendo-panelbar {
    .k-item {
       backgroud: #fffff; 
    }
}
```

