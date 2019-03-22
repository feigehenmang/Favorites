import { Injectable } from '@angular/core';
import { Request, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import utils from "../config";
declare var GetHash: any;
declare var sm2Encrypt: any;
@Injectable()
export class HttpInterceptor {
    
    // 请求发出前的处理逻辑
    beforeRequest(req: Request) {
        if(!(<any>window).isEncrypt){
            return req;
        }
        let pubkeyHex : string = "0408251b1b11644736da93b0e19466200e513a03d08d1d36a53cbea43d702f8f8d793e108595fabc340251c3ff3501dea20df9e2574dfcd07e60851267657afb17";
        //console.log(sm2Encrypt)
        // do whatever you want
        let header: Headers = req.headers;
        // is POST method and has File 
        let isFile = false;
        //default 1, is not FILE
        let ckt = "1";
        let ck = `${ckt}6F83A997E8D66B02E0533B43A8C06608`;
        let cc = `${ckt}6F83A997E8D66B02E0533B43A8C06608`;

        //处理FormData类型
        if (req["_body"] instanceof FormData) {
            isFile = true;
            // console.log("isFile = ",isFile);

            let a: FormData = req["_body"];
            let aIndex = a["entries"]();
            let abc = aIndex.next();
            let params = [];
            
            //遍历FormData集
            while (!abc.done) {
                var val = abc.value[1];
                var k = abc.value[0];

                //is FILE
                if (val instanceof File) {
                    //break;
                    abc = aIndex.next();
                    continue;
                }
                params.push(val);
                // console.log("params = ",params);
                abc = aIndex.next();
            }//loop end

            let qs = params.join("");
            // console.log("qs = ", qs);
            
            ck = sm2Encrypt(qs, pubkeyHex);
            // console.log("MD5 = ", qs, ck);

        } // is FormData end  

        //非文件时处理
        if(!isFile){
            var param = req.getBody();
            ck = utils.encode(param);
            req["_body"]=""; 
            // console.log('clean request body value;');
        }

        header.append("ck", ck);
        // console.log("ck = ", ck);

        req.headers = header;
        return req;
    }//beforeRequest end

    // 请求响应后的处理逻辑
    afterResponse(res: Observable<Response>): Observable<any> {
        res.subscribe((data) => {
            console.log(data);
        });
        return res;
    }
}

