<template>
  <he-article-detail>
    <template slot="articleTitle">Mac终端快捷键及命令缩写释义</template>
    <template slot="articleContent">
      <h2>常用快捷键：</h2>
      <pre>
Ctrl+a：光标回到命令行首。 （a：ahead）

Ctrl+e：光标回到命令行尾。 （e：end）

Ctrl+b：光标向行首移动一个字符。 （b：backwards）

Ctrl+ f：光标向行尾移动一个字符。 （f：forwards）

Ctrl+w: 删除光标处到行首的字符。

Ctrl+k：删除光标处到行尾的字符。

Ctrl+u：删除整个命令行文本字符。

Ctrl+h：向行首删除一个字符。

Ctrl+d：向行尾删除一个字符。

Ctrl+y:：粘贴Ctrl+u，Ctrl+k，Ctrl+w删除的文本。

Ctrl+p: 上一个使用的历史命令。 （p：previous）

Ctrl+n： 下一个使用的历史命令。（n：next ）

Ctrl+r：快速检索历史命令。（r：retrieve）。

Ctrl+t： 交换光标所在字符和其前的字符。

Ctrl+i：相当于Tab键。

Ctrl+o：相当于Ctrl+m.

Ctrl+m：相当Enter键。

                                </pre>
      <h2>其他控制键：</h2>
      <pre>
Ctrl+s:使终端发呆，静止，可以使快速输出的终端屏幕停下来。

Ctrl+q：退出Ctrl+s引起的发呆。

Ctrl+z：使正在运行在终端的任务，运行于后台。 （可用fg恢复）

Ctrl+c：中断终端中正在执行的任务。

Ctrl+d: 在空命令行的情况下可以退出终端。

Ctrl+[ ：相当于Esc键。

Esc键：连续按3次显示所有的支持的终端命令。

Tab键：命令、文件名等自动补全功能。
                                </pre>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'MacLockScreenShortcut',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
