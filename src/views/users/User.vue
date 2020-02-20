<template>
    <div class="users">
        <el-row>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户列表</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <hr>
        <el-row :gutter="10">
            <el-col :span="6">
                <el-form :inline="true">
                    <el-form-item >
                        <el-input v-model="query"  placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search"></el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="addUser">添加用户</el-button>
            </el-col>
        </el-row>
         <el-table
            v-loading="loading"
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="#"
            type="index"
            >
            </el-table-column>
            <el-table-column
            label="姓名"
            >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="年龄">
           
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.age }}</span>
            </template>
            </el-table-column>
             <el-table-column
            label="邮箱"
            >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.email }}</span>
            </template>
            </el-table-column>
             <el-table-column
            label="电话"
           >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.phone }}</span>
            </template>
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleEdit(scope.row)" icon="el-icon-edit" circle></el-button>
                <el-button size="mini" type="danger"  @click="handleDelete( scope.row)" icon="el-icon-delete" circle></el-button>
                <el-button size="mini" type="success"  @click="handleCheck( scope.row)" icon="el-icon-check" circle></el-button>
            </template>
            </el-table-column>
        </el-table>
        <!-- 添加用户弹框 -->
        <el-dialog
            :title=titles[dialogTitle]
            :visible.sync="dialogVisible"
            @close="closed"
            >
            <el-form :model="usersForm" :rules="usersRules" ref="usersForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="usersForm.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="usersForm.age"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input  v-model="usersForm.email"></el-input>
                </el-form-item>
                 <el-form-item label="电话" prop="phone">
                    <el-input  v-model="usersForm.phone"></el-input>
                </el-form-item>
                </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" :loading="saveLoading" v-if="dialogTitle=='create'" @click="createSave">保存</el-button>
                <el-button type="primary" :loading="saveLoading" v-if="dialogTitle=='edit'" @click="editSave">保存</el-button>
                <el-button type="danger" @click="dialogVisible = false">关闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name:"users",
        data(){
            return{
                loading:true,
                tableData:[],
                query:'',
                titles:{
                    create:'添加',
                    edit:'编辑'
                },
                dialogTitle:'',
                saveLoading:false,
                dialogVisible:false,
                usersForm:{
                    name:'',
                    age:'',
                    email:'',
                    phone:''
                },
                id:'',
                usersRules:{
                    name:[
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    age:[
                        { required: true, message: '年龄不能为空', trigger: 'blur' }
                    ],
                    email:[
                        { required: true, message: '邮箱不能为空', trigger: 'blur' }
                    ],
                    phone:[
                        { required: true, message: '电话不能为空', trigger: 'blur' }
                    ]

                }
            }
        },
        computed:{
            stableData() {
                this.tableData.filter(item=>{
                    return item == this.query;
                })
            }
        },
        created(){
            this.getTableData();
        },
        methods:{
            // 初始化获取table数据
            async getTableData(){
                const {data,status} = await this.axios.get('users');
                if(status === 200){
                    this.tableData = data;
                    this.loading = false;
                }
            },
            // 添加
            addUser() {
                this.dialogTitle = 'create';
                this.dialogVisible = true;
                this.usersForm = {};
            },
            // 添加保存
            async createSave() {
                this.saveLoading = true;
                await this.axios.post('users',this.usersForm);
                this.dialogVisible = false;
                this.saveLoading = false;
                this.getTableData();
            },
            // 删除
            handleDelete(row) {
               this.axios.delete(`users/${row.id}`).then(res=>{
                   this.getTableData();
               })
            },
            // 编辑
            handleEdit(row) {
                this.id = row.id;
                this.dialogVisible = true;
                this.dialogTitle = 'edit';
                this.usersForm = row;
            },
            async editSave() {
                this.saveLoading = true;
               await this.axios.put(`users/${this.id}`,this.usersForm);
               this.getTableData();
                this.saveLoading = false;
                this.dialogVisible = false;
               this.usersForm = {};
            },
            // 查看
            handleCheck(row) {

            },
            // X 掉弹框
            closed() {
                this.$refs.usersForm.resetFields();
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>