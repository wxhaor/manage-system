<!--https://github.com/halower/vue-tree/blob/master/README_CN.md-->
<template>
    <div>
        <v-tree ref='tree' :data='treeData' :multiple='true'  :halfcheck='true'/>
        <input type="text" v-model="searchword"/>
        <button type="button" @click="search">GO</button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                lang: 'zh',
                searchword: '',
                treeData: [{
                    title: '一级节点',
                    expanded: true,
                    children: [{
                        title: '二级节点1',
                        expanded: true,
                        children: [{
                            title: '三级节点1-1'
                        }, {
                            title: '三级节点1-2'
                        }, {
                            title: '三级节点1-3'
                        }]
                    }, {
                        title: '二级节点2',
                        children: [{
                            title: "<span style='color: red'>三级节点2-1</span>"
                        }, {
                            title: "<span style='color: red'>三级节点2-2</span>"
                        }]
                    }]
                }]
            }
        },
        methods: {
//            tpl (node, ctx) {
//                let titleClass = node.selected ? 'node-title node-selected' : 'node-title'
//                if (node.searched) titleClass += ' node-searched'
//                return <span>
//                <button style='color:blue; background-color:pink' onClick={() => this.$refs.tree.addNode(node, {title: '同步节点'})}>+</button>
//                <span class={titleClass} domPropsInnerHTML={node.title} onClick={() => {
//                    ctx.parent.nodeSelected(ctx.props.node)
//                    console.log(ctx.parent.getSelectedNodes())
//                }}></span>
//                <button style='color:green; background-color:pink' onClick={() => this.asyncLoad(node)}>异步加载</button>
//                <button style='color:red; background-color:pink' onClick={() => this.$refs.tree.delNode(node.parent, node)}>删除</button>
//                </span>
//            },
//            async asyncLoad (node) {
//                // method1:
//                // this.$refs.tree.addNodes(node, await this.$api.demo.getChild()
//                // method2:
//                this.$set(node, 'loading', true)
//                let data = await this.$api.demo.getChild())
//            this.$set(node, 'children', data)
//        this.$set(node, 'loading', false)
//    // method3: use concat
//    },
            search() {
                this.$refs.tree.searchNodes(this.searchword)
            }
        }
    }
</script>
