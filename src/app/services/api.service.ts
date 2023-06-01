import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs"
import {Injectable} from "@angular/core"
@Injectable()
export class ApiService{

    private readonly url="http://localhost:5000/api/data/v2"
constructor(private readonly httpClient:HttpClient){

}
    getData():Observable<any>{
        return this.httpClient.get(this.url)
    }
}