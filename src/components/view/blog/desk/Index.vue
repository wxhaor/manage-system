<template>
    <div class="">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 博客管理</el-breadcrumb-item>
                <el-breadcrumb-item>写作台</el-breadcrumb-item>
            </el-breadcrumb>
        </div>


        <div class="plugins-tips">

            <el-upload
                class="upload-demo"
                drag
                action="http://192.168.253.2:8082/blog/desk/upload"
                multiple
                show-file-list
                :on-preview="preview"
                list-type="picture"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__text">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>


        </div>

        <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>

    </div>
</template>

<script>
    import {markdownEditor} from 'vue-simplemde';

    export default {
        name: '',
        data: function () {
            return {
                content: '',
                configs: {
                    status: true,
                    initialValue: 'Hello World',
                    renderingConfig: {
                        codeSyntaxHighlighting: true,
                        highlightingTheme: 'atom-one-light'
                    }
                }
            }
        },
        components: {
            markdownEditor
        },
        methods: {

            preview(file) {
//                debugger
                console.log(file.response);
            }
        }
    }
</script>

<style scoped>

</style>
