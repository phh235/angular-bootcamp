import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseData } from "../shared/types/responseData";
import { BlogItem, ProductItemType } from "../shared/types/ProductItemType";

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private http: HttpClient) { }

  getBlogs(): Observable<ResponseData<ProductItemType[]>> {
    return this.http.get<any>('https://ninedev-api.vercel.app/blogs');
  }

  getBlogDetail(id: number): Observable<ResponseData<ProductItemType>> {
    return this.http.get<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
  }

  postBlog(blogItem: BlogItem): Observable<ResponseData<BlogItem>> {
    return this.http.post<any>('https://ninedev-api.vercel.app/blogs', blogItem);
  }

  deleteBlog(id: number): Observable<ResponseData<BlogItem>> {
    return this.http.delete<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
  }
}