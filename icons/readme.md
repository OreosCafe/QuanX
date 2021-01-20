
## 说明文档 (引用并修改自@Koolson ，https://github.com/Koolson/Qure )

本项目是一套专为 [Quantumult X](https://github.com/crossutility/Quantumult-X/) 内策略组而精心设计的图标组。<br>

## 使用说明

### 方式一：远程图标<br>
*跨设备同步策略组图标，及时获取图标更新*<br>

1. 在 本仓库 中找到需要的策略组图标并记下**图标名称**；<br>
2. 在 Quantumult X 的“配置文件-编辑”中找到[policy]下的策略组字段，并在该策略组的最后一个节点后方加上：<br>
`img-url=图标地址`<br>
例如：<br>
`static=Hong Kong, 🇭🇰01, img-url=Hong_Kong.png`<br>

```ruby
注意：此处“img”前的英文逗号和空格以及“Hong_Kong.png”图标名称中的下划短横线和字母大小写不能写错哦
```

3. 重启 Quantumult X 即可见到效果。<br>

><font color=red>更新方法：当远程图标更新时，请手动清理本地图标缓存(打开“文件”应用，依次进入“**我的 iPhone 或 iCloud Drive-Quantumult X-Images**”，删除Images文件夹内所有缓存文件)，并重启 Quantumult X，远程图标会重新下载并生效。</font>

[查看大图](https://raw.githubusercontent.com/Koolson/Qure/master/Other/Remote_Icon.png)<br>
![Image text](https://raw.githubusercontent.com/Koolson/Qure/master/Other/Remote_Icon.png)

### 方式二：本地图标<br>
*不支持多设备同步图标；图标更新时，需要手动下载图标并进行本地替换操作*<br>

1. 打开"文件"应用后，依次进入“我的 iPhone 或 iCloud Drive→Quantumult X→Images”；<br>
2. 将**个人设定**的策略组名称 **同名的.png** 图标文件根据个人需求自行下载粘贴到 Images 文件夹内，重启 Quantumult X 即可见到效果。<br>

