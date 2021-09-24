const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const server = app.listen(3001, ()=>{
    console.log('Start Server : localhost:3001');
});

// : 의 미 패스에 어떤 값이든 자유롭게 들어올수 있다.
// 콜론 패스에 들어오는 값을 파라미터로 받을 수 있다.
// type 를 출력하면 :type 값으로 받는다.
// http://localhost:3001/api/users/type 

// uuid키 생성
const key= {
    apiKey: '0PRPXS4-5EK42KS-G4AK0PY-8Y8R0CR',
    uuid: '05b16ee4-2ba6-414f-8115-305b47918033'
}

//GET방식
app.get('/api/users/:apikey/:type/', async ( req, res) =>{
    let {
        type ,
        apikey
    } = req.params;
    
    console.log("GET_잘 들어오나요???");

    // 입력받은 api키와 uuid키가 같은지 확인
    // 다르면 is not 출력
    // !uuidAPIKey.isAPIKey(apikey) 맞는 지 확인
    // !uuidAPIKey.check(apikey , key.uuid) apikey 와 uuid 를 같은지 비교
    if( !uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey , key.uuid)){
        res.send('apikey is not valid')
    } 
    // 같으면 원하는 정보 출력
    else{
            // http://localhost:3001/api/users/seoul
        if (type == 'seoul') {
            let data = [
                {name:"sim" , city:'dongrim'}
                ,{name:"oh"  , city:"back"} ]
            
            res.send(data)
        }else if (type == 'GJ') {
            let data = [
                {name:"1" , city:'1-1'},
                {name:"2"  , city:"2-2"}]
            res.send(data)
        } else if (type == "test_querys") {
            let data = [
                {name:"다중 쿼리1" , city:'다중 쿼리1-1'},
                {name:"다중 쿼리2"  , city:"다중 쿼리2-2"}]
            let data1 = [
                {name:"다중 쿼리3" , city:'다중 쿼리3-1'},
                {name:"다중 쿼리4"  , city:"다중 쿼리4-2"}]
            var data2 = [data , data1]
            res.send(data2[0])
        } else {
            res.send('OK');
        }
    };
    
    
    
});

// POST 방식
app.post('/api/users/test', async ( req, res) =>{
    // let {
    //     type ,
    //     apikey
    // } = req.params;
    
    //console.log(req);

    //console.log(req.body);

    console.log("req.body.name:::" + req.body.name);
    console.log("req.body.city:::" + req.body.city);
    console.log("req.body.apiKey:::" + req.body.apiKey);

    //var type = city;
    //var apikey = req.body.apiKey;

    console.log("POST_ 잘 들어오나요???");

    // 입력받은 api키와 uuid키가 같은지 확인
    // 다르면 is not 출력
    // !uuidAPIKey.isAPIKey(apikey) 맞는 지 확인
    // !uuidAPIKey.check(apikey , key.uuid) apikey 와 uuid 를 같은지 비교
    if( !uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey , key.uuid)){
        res.send('apikey is not valid')
    } 
    // 같으면 원하는 정보 출력
    else{
            // http://localhost:3001/api/users/seoul
        if (type == 'seoul') {
            let data = [
                {name:"sim" , city:'dongrim'}
                ,{name:"oh"  , city:"back"} ]
            res.send(data)
        }else if (type == 'gwj') {
            let data = [
                {name:"1" , city:'1-1'},
                {name:"2"  , city:"2-2"}]
            res.send(data)
        } else if (type == "test_querys") {
            let data = [
                {name:"다중 쿼리1" , city:'다중 쿼리1-1'},
                {name:"다중 쿼리2"  , city:"다중 쿼리2-2"}]
            let data1 = [
                {name:"다중 쿼리3" , city:'다중 쿼리3-1'},
                {name:"다중 쿼리4"  , city:"다중 쿼리4-2"}]
            var data2 = [data + data1]
            res.send(data2)
        }  else {
            res.send('OK');
        }
    }; 
});

// Delete

app.delete('/api/users/:apikey/:type/', async ( req, res ) =>{
    let {
        type ,
        apikey
    } = req.params;
    console.log("DELETE_ 잘 들어오나요???");

    if( !uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey , key.uuid)){
        res.send('apikey is not valid')
    } 
    // 같으면 원하는 정보 출력
    else{
            // http://localhost:3001/api/users/seoul
        if (type == 'seoul') {
            let data = [
                {name:"sim" , city:'dongrim'}
                ,{name:"oh"  , city:"back"} ]
            res.send(data)
        }else if (type == 'GJ') {
            let data = [
                {name:"1" , city:'1-1'},
                {name:"2"  , city:"2-2"}]
            res.send(data)
        }  else if (type == "test_querys") {
            let data = [
                {name:"다중 쿼리1" , city:'다중 쿼리1-1'},
                {name:"다중 쿼리2"  , city:"다중 쿼리2-2"}]
            let data1 = [
                {name:"다중 쿼리3" , city:'다중 쿼리3-1'},
                {name:"다중 쿼리4"  , city:"다중 쿼리4-2"}]
            var data2 = [data + data1]
            res.send(data2.toString)
        } else {
            res.send('OK');
        }
    }; 
});



