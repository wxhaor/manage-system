<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 用户管理 </el-breadcrumb-item>
                <el-breadcrumb-item> 添加用户 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="form.nickName"></el-input>
                </el-form-item>
                <el-form-item label="客户端类型">
                    <el-select v-model="form.clientTypeCode" placeholder="请选择">
                        <el-option key="1" label="H5" value="1"></el-option>
                        <el-option key="2" label="iOS" value="2"></el-option>
                        <el-option key="3" label="Android" value="3"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="头像地址">
                    <el-input v-model="form.headImgUrl"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="form.mobileNo"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                form: {
                    username: null,
                    password: null,
                    nickName: null,
                    clientTypeCode: null,
                    headImgUrl: null,
                    mobileNo: null
                }
            }
        },
        methods: {
            onSubmit() {
                let self = this;

                self.url = 'http://192.168.253.2:8083/userInfo/save';

                self.$axios.post(self.url, self.form ).then((res) => {

//                    debugger
                    self.tableData = res.data;
                });

                this.$message.success('提交成功！');
            }
        }
    }
</script>
