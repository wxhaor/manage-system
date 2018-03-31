import client from 'src/utils/ApiClient';
import axios from 'axios';

let ManageApi = {
    fullPage: function (path) {
        return "/" + path;
    },
    listAll: function (data) {
        return client({
            url: this.fullPage('hao-user/userInfo/listAll'),
            method: 'post',
            data: data
        });
        // var url = 'http://192.168.253.2:8090/'
        // let result = {
        //     status: "200",
        //     type:"result",
        //     data: []
        // }
        // ;
        // axios.post(url + 'hao-user/userInfo/listAll', {}).then((res) => {
        //     // debugger
        //     result.data = res.data;
        //     console.log(res.data)
        //        });
        // console.log(result)
        // return result;
    }
};

export default ManageApi;
