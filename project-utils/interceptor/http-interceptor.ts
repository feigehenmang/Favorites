import { Injectable } from '@angular/core';
import { Request, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { filter, map, catchError  } from 'rxjs/operators';
import { Router } from "@angular/router";
import 'rxjs/add/operator/catch';
import utils from "../config";
declare const ECPENCODEFN: any;
@Injectable()
export class HttpInterceptor {
    constructor(public router: Router){

    }
    // 请求发出前的处理逻辑
    beforeRequest(req: Request) {
        if(!utils.ipMap.isEncrypt){
            return req;
        }
        utils.ipMap.debugger && console.log(`加密前request: `, req);
        let header: Headers = req.headers;
        // is POST method and has File 
        let isFileRequest = false;
        let ck = '';

        //处理FormData类型
        if (req.getBody() instanceof FormData) {
            utils.ipMap.debugger && console.log(`该请求体是FORMDATA对象 = `, req.getBody());
            isFileRequest = true;
                        // console.log("isFileRequest = ",isFileRequest);
                        // let a: FormData = req["_body"];
                        // let aIndex = a["entries"]();
                        // let abc = aIndex.next();
                        // let params = []; 
                        // //遍历FormData集
                        // while (!abc.done) {
                        //     var val = abc.value[1];
                        //     var k = abc.value[0];

                        //     //is FILE
                        //     if (val instanceof File) {
                        //         utils.ipMap.debugger && console.log(`该FORMDATA对象中含有FILE文件 =`, val);
                        //         //break;
                        //         abc = aIndex.next();
                        //         continue;
                        //     }
                        //     params.push(val);
                        //     // console.log("params = ",params);
                        //     abc = aIndex.next();
                        // }//loop end
                        // let qs = params.join("");
        } // is FormData end  
        if(!isFileRequest){
            ck = utils.encode3(utils.getToken() + req.getBody());
            req["_body"] = `${ck}`;
        }
        header.set("token", utils.getToken());
        req.headers = header;
        return req;
    }//beforeRequest end

    // 请求响应后的处理逻辑
    afterResponse(res: Observable<Response>): Observable<any> {
        
        return res
        .pipe(
            catchError(e=>{
                console.log(e);
                // this.router.navigate(["main/example/demo"])
                return e;
            }),
            map((x:Response)=>{
                const encodeUrl = x["_body"];
                utils.ipMap.debugger && console.log(x);
                let isentry = x.headers.get('isentry');
                utils.ipMap.debugger && console.log('isentry = ',isentry);
                const isBlob = Object.prototype.toString.call(encodeUrl) === "[object Blob]";
                console.log("isBlob = ", isBlob);
                if(utils.ipMap.isEncrypt && isentry == 'true' && !isBlob){
                    // console.log(encodeUrl);
                    const decodeObj = ECPENCODEFN.ecpdecpde(encodeUrl.replace(/"/g,''));
                    //utils.ipMap.debugger && console.log(decodeObj);
                    if(decodeObj.successful == false){
                        console.error(decodeObj.error);
                        throw new Error(decodeObj.error);
                    }
                    
                    let _selfTk = utils.getToken();
                    if(_selfTk !== decodeObj.tk){
                        // message("tk 校验失败, 请检查", "error");
                        //console.error("tk 校验失败, 请检查");
                        throw new Error("tk 校验失败, 请检查");
                    }

                    let newAbs = "";
                    try {
                    newAbs = ECPENCODEFN.sm3Encrypt(_selfTk + decodeObj.res);
                    } catch (e) {
                        throw new Error("摘要失败");
                    }

                    utils.ipMap.debugger && console.log("当前tk", _selfTk);
                    utils.ipMap.debugger && console.log(x.url , "当前decodeObject = ", decodeObj);

                    if(newAbs !== decodeObj.abs){
                        throw new Error("倆次摘要值不相等, 请检查token");
                    };
                    x["_body"] = decodeObj.res;
                    return x;
                    // let res: Body = new Body(res)
                    // console.log(res)
                    // return res;
                    // return decodeObj.res;
                    // return {
                    //     body:JSON.parse(decodeObj.res),
                    //     json:function(){
                    //         return this.body;
                    //     }
                    // };
                }else{
                    return x;
                }//isEncrypt == false end
            })
        )
        // map end
    }
}

