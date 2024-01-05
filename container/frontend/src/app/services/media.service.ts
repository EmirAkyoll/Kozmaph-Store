import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MediaService {
  constructor(private http: HttpClient) {}

  upload(media_data: FormData): Observable<any> {
    return this.http.post('https://kozmaph-media-service.onrender.com/api/media/upload', media_data);
  }
}
