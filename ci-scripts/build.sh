#!/usr/bin/env bash
cd ~/Documents/angular6/netease-theme
# yarn安装

npm version patch
if [ $? == 0 ]
then echo "升级theme工程版本成功!"
else
git commit -a -m "auto commit"
npm version patch
if [ $? == 0 ]
then echo "升级theme工程版本成功!"
else
echo "升级theme工程版本失败!"
fi
echo "auto commit"
fi

npm run package
if [ $? == 0 ]
then echo "打包theme成功!"
else
echo "打包theme失败"
exit
fi

npm publish dist
if [ $? == 0 ]
then echo "发布theme成功!"
else
echo "发布theme失败!"
exit
fi
