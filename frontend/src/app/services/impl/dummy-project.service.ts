// import {ProjectModel} from '../../model/project.model';
// import {SectorModel} from '../../model/sector.model';
import {Injectable} from '@angular/core';
// import {ProjectViewModel} from '../../model/project-view.model';
// import {Observable, of, Subject} from 'rxjs';
// import {LocationModel} from '../../model/location.model';
// import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DummyProjectService {

// export class DummyProjectService extends ProjectService {
//   projectList: ProjectModel[] = [new ProjectModel('00project code', '00project title', 'description', 1, new Date(1010), new Date(),
//     [new SectorModel(1, 15)], [new LocationModel(1, 2, 5), new LocationModel(2, 1, 15)]),
//     new ProjectModel('111', '111project title 2000', 'description 22', 2, new Date(2015, 0, 1), new Date(2016, 0, 1),
//       [new SectorModel(2, 51), new SectorModel(1, 10)], [new LocationModel(1, 2, 5), new LocationModel(2, 1, 15)]),
//     new ProjectModel('2222project code 22', '222project title 22', 'description 22', 2, new Date(2018, 1, 15), new Date(2018, 3, 1),
//       [new SectorModel(3, 7), new SectorModel(2, 51)], [new LocationModel(1, 2, 5), new LocationModel(2, 1, 15)]),
//     new ProjectModel('333333project code 22', '333project title 22', 'description 22', 2, new Date(2018, 3, 2), new Date(2019, 1, 1),
//       [new SectorModel(3, 51), new SectorModel(2, 3)], [new LocationModel(1, 2, 5), new LocationModel(2, 1, 15)]),
//     new ProjectModel('44444project code 22', '444project title 22', 'description 22', 2, new Date(2020, 0, 4), new Date(2020, 6, 2),
//       [new SectorModel(2, 51)], [new LocationModel(1, 2, 5), new LocationModel(2, 1, 15)]),
//     new ProjectModel('5555project code 22', '555project title 22', 'description 22', 2, new Date(2020, 0, 1), new Date(2020, 8, 1),
//       [new SectorModel(1, 31), new SectorModel(2, 28), new SectorModel(3, 30),
//         new SectorModel(4, 11)], [new LocationModel(1, 2, 5), new LocationModel(2, 1, 15)]
//     )];
//
//   projectViewList: ProjectViewModel[] = [];
//
//   // getProjectViewList()
//
//   private getProjectViewList() {
//     this.projectViewList = this.projectList.map(project => new ProjectViewModel(project.id, project.projectTitle));
//   }
//
//
//   getProjectById(id: number): Observable<ProjectModel> {
//     for (let project of this.projectList) {
//       if (id == project.id) {
//         return of(project).pipe(delay(2000));
//       }
//     }
//     return of(null);
//   }
//
//   getProjects(): Observable<ProjectViewModel[]> {
//     this.getProjectViewList();
//     return of(this.projectViewList).pipe(delay(2000));
//   }
//
//   getNewProject(): Observable<ProjectModel> {
//     return of(new ProjectModel()).pipe(delay(2000));
//   }
//
//
// //---
//   uniqueName(name: string) {
//     return !this.projectList.find((project) => project.projectTitle == name);
//     // if (!name) {
//     //   return true;
//     // }
//     // return false;
//   }
//
//   addProject(project: ProjectModel): Observable<Response> {
//     return of(null).pipe(map(() => {
//       if (this.uniqueName(project.projectTitle)) {
//         // // this.projectList.push(project);
//         // alert(project.projectTitle);
//         // alert(this.uniqueName(project.projectTitle));
//         this.projectList.push(project);
//         return new Response(true, null, project.id);
//       }
//       // alert(project.projectTitle);
//       // alert(this.uniqueName(project.projectTitle));
//       return new Response(false);
//     }), delay(2000));
//   }
//
//   deleteProjectById(id: number): Observable<Response> {
//     const filtered = this.projectList.filter(project => project.id !== id);
//     if (filtered.length < this.projectList.length) {
//       this.projectList = filtered;
//       return of(new Response(true)).pipe(delay(2000));
//     }
//     return of(new Response(false)).pipe(delay(2000));
//   }
//
//   updateProject(id: number, project: ProjectModel, newProjectTitle?: boolean): Observable<Response> {
//     return of(null).pipe(map(() => {
//       if (this.uniqueName(project.projectTitle) || !newProjectTitle) {
//         project.id = id;
//         //poxel
//         for (let x = 0; x < this.projectList.length; x++) {
//           if (this.projectList[x].id === id) {
//             this.projectList[x] = project;
//           }
//         }
//
//         return new Response(true);
//       } else {
//         return new Response(false);
//       }
//     }), delay(2000));
//   }
//
//
//   // addLocation(location: LocationModel): Observable<Response> {
//   //   this.projectLocations.push(location);
//   //   return of(new Response(true));
//   // }
//   //
//   // getLocations(): Observable<LocationModel[]> {
//   //   return of(this.projectLocations);
//   // }
//
}
