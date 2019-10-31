import apiModel from '../assets/js/APIConnectionWX.min'
let callBackFn={}
let apiconn = new apiModel.APIConnection();
apiconn.wsUri='ws://47.96.88.157:51718/rrd'
apiconn.state_changed_handler = function() {
  console.log("state: " + apiconn.from_state + " => " + apiconn.conn_state);
}
apiconn.response_received_handler = function(jo){
  if (jo.ustr) {
    toast(jo.ustr);
    if(callBackFn[jo.obj + '_' + jo.act]&&callBackFn[jo.obj + '_' + jo.act].length){
      window.callBackFn[jo.obj + '_' + jo.act].shift()(jo,'error');
    }
  } else {
    if (callBackFn[jo.obj + '_' + jo.act] && callBackFn[jo.obj + '_' + jo.act].length) {
      callBackFn[jo.obj + '_' + jo.act].shift()(jo,'success');
    }
  }
};

const Fetch= (params)=>{
  if(params.xtype==='user'){
    return new Promise((resolve,reject)=>{
      if (callBackFn['person_login']) {
        callBackFn['person_login'].push((response,type)=>{
          if(type==='success'){
            resolve(response);
          }else{
            reject(response)
          }
        });
      } else {
        callBackFn['person_login'] = [(response,type)=>{
          if(type==='success'){
            resolve(response);
          }else{
            reject(response)
          }
        }];
      }
      apiconn.loginx({...params,ctype:'user',level:'user'});
    });
  }
  return new Promise((resolve,reject)=>{
    if (callBackFn[params.obj + '_' + params.act]) {
      callBackFn[params.obj + '_' + params.act].push((response,type)=>{
        if(type==='success'){
          resolve(response);
        }else{
          reject(response)
        }
      });
    } else {
      callBackFn[params.obj + '_' + params.act] = [(response,type)=>{
        if(type==='success'){
          resolve(response);
        }else{
          reject(response)
        }
      }];
    }
    if(apiconn.conn_state==='IN_SESSION'){
      window.apiconn.send_obj(params);
    }else{
      setTimeout(()=>{
        apiconn.send_obj(params);
      },1000);
    }
  });
};

export default {
  apiconn,
  Fetch
}
