<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> food manage </el-breadcrumb-item>
                <el-breadcrumb-item>基础表格</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <el-button type="primary"  @click="add">手动添加</el-button>
        </div>
        <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="id" label="id" sortable width="180">
            </el-table-column>
            <el-table-column prop="username" label="用户名" sortable width="150">
            </el-table-column>
            <el-table-column prop="password" label="密码" width="150">
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="120" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="updateTime" label="更新时间" width="120" :formatter="formatter">
            </el-table-column>

            <el-table-column label="操作" width="180">
                <template >
                    <el-button size="small"
                               @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button size="small" type="danger"
                               @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                @current-change="handleCurrentChange"
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import ManageApi from 'src/apiclient/ManageApi'

    export default {
        data() {
            return {
                url: './static/vuetable.json',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false
            }
        },
//        components:{
//            ManageApi
//        },
        created() {
            this.getData();
        },
        computed: {
            data() {
                const self = this;
//                debugger
                console.log(self.tableData);
                return self.tableData;
            }
        },
        methods: {
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            getData() {
                let self = this;
//debugger
//                 ManageApi.listAll().then(res => {
//
//                     debugger
//                     self.tableData = res;
//                 });

            },

            add(){
                this.$router.push({path: '/foodInfoEdit'});
            },
            formatter(row, column) {

                return new Date(row.createTime).toDateString();
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第' + (index + 1) + '行');
                this.$router.push({path: '/foodInfoEdit'})
            },
            handleDelete(index, row) {
                this.$message.error('删除第' + (index + 1) + '行');
            },
            delAll() {
                const self = this,
                    length = self.multipleSelection.length;
                let str = '';
                self.del_list = self.del_list.concat(self.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += self.multipleSelection[i].username + ' ';
                }
                self.$message.error('删除了' + str);
                self.multipleSelection = [];
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style >
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
</style>
