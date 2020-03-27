import {ProjectService, Response} from '../project.service';
import {ProjectModel} from '../../model/project.model';
import {ProjectViewModel} from '../../model/project-view.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ChildClassifierModel} from '../../model/child-classifier.model';

@Injectable({
  providedIn: 'root'
})
export class HttpProjectService extends ProjectService {

  constructor(private http: HttpClient) {
    super();
  }

  addProject(project: ProjectModel): Observable<Response> {
    return this.http.post<Response>(`http://localhost:8080/projects/add`, project);
  }

  deleteProjectById(id: number): Observable<Response> {
    return this.http.put<Response>(`http://localhost:8080/projects/delete/${id}`, id);
  }

  getProjectById(id: number): Observable<ProjectModel> {
    return this.http.get<ProjectModel>(`http://localhost:8080/projects/${id}`);
  }

  getProjects(): Observable<ProjectViewModel[]> {
    return this.http.get<ProjectViewModel[]>(`http://localhost:8080/projects`);
  }

  updateProject(id: number, project: ProjectModel): Observable<Response> {
    return this.http.put<Response>(`http://localhost:8080/projects/update/${id}/${project}`, id);
  }

  getNewProject(): Observable<ProjectModel> {
    return this.http.get<ProjectModel>(`http://localhost:8080/projects/newProject`);
  }





  // getLocations(): Observable<LocationModel[]> {
  //   return undefined;
  // }
  //
  // addLocation(location: LocationModel): Observable<Response> {
  //   return undefined;
  // }

}
