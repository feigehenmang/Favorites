import { Injectable } from '@angular/core';
import { ConnectionBackend, XHRBackend, XHRConnection, Request } from '@angular/http';
import { HttpInterceptor } from "./http-interceptor";

@Injectable()
export class HttpInterceptorBackend implements ConnectionBackend {
  constructor(private _httpIntercepteor: HttpInterceptor, private _xhrBackend: XHRBackend) { }

  createConnection(req: Request): XHRConnection {
    const interceptor = this._httpIntercepteor;

    // 拦截请求调用方法 requst 就是我们加工后的 request
    const requst = interceptor.beforeRequest ? interceptor.beforeRequest(req) : req;

    const result = this._xhrBackend.createConnection(requst);

    // console.log(result.response.subscribe(res=>{
    //   console.log(res)
    // }));
    // 拦截响应对象。
    result.response = interceptor.afterResponse ? interceptor.afterResponse(result.response) : result.response;
    // result.response = interceptor.afterResponse(result.response);
    return result;
  }
}
