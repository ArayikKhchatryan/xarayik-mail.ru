import {Injectable} from '@angular/core';
import {ClassifiersModel} from '../model/classifiers.model';
import {ChildClassifierModel} from '../model/child-classifier.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassifierServiceService {

  constructor(private http: HttpClient) {
  }


  //---------------------------------------------------

  // implementation_Status: ClassifiersModel[] = [new ClassifiersModel(1, 'Planned'), new ClassifiersModel(2, 'Pipelined'), new ClassifiersModel(3, 'Ongoing')
  //   , new ClassifiersModel(4, 'Stalled'), new ClassifiersModel(5, 'Extended'), new ClassifiersModel(6, 'Terminated')
  //   , new ClassifiersModel(7, 'Suspended'), new ClassifiersModel(8, 'Compladed')];
  //
  //
  // sectors_classifier: ClassifiersModel[] = [new ClassifiersModel(1, 'Health'), new ClassifiersModel(2, 'Agriculture')
  //   , new ClassifiersModel(3, 'Economy'), new ClassifiersModel(4, 'Administrative')];
  //
  // county_classifier: ClassifiersModel[] = [new ClassifiersModel(1, 'Hayastan'), new ClassifiersModel(2, 'Rusastan')
  //   , new ClassifiersModel(3, 'AMN')];
  //
  // district_classifier: ChildClassifierModel[] = [new ChildClassifierModel(1, 1, 'Lori'), new ChildClassifierModel(1, 2, 'Ararat'),
  //   new ChildClassifierModel(1, 3, 'Syuniq'), new ChildClassifierModel(1, 4, 'Armavir'), new ChildClassifierModel(2, 1, 'Krasnodar'),
  //   new ChildClassifierModel(2, 2, 'Tver'), new ChildClassifierModel(2, 3, 'Stavropol'), new ChildClassifierModel(3, 1, 'California')];


  // getDistricts(): Observable<ChildClassifierModel[]>{
  //   return of(this.district_classifier).pipe(delay(3000));
  // }

  // getImpStatusClassifier(): Observable<ClassifiersModel[]>{
  //   return of(this.implementation_Status).pipe(delay(3000));
  // }

  // getSectorsClassifier():  Observable<ClassifiersModel[]>{
  //   return of(this.sectors_classifier).pipe(delay(3000));
  // }

  // getCountyClassifier(): Observable<ClassifiersModel[]>{
  //   return of(this.county_classifier).pipe(delay(3000));
  // }

//--------------------------------


  // getCountyes(): Observable<ClassifiersModel[]>{
  //   return of(this.county_classifier)
  // }

  // getDistrictByParentId(id: number):  Observable<ChildClassifierModel[]>{
  //   let arr: ChildClassifierModel[] = [];
  //   for(let district of this.district_classifier){
  //     if(district.parentId == id){
  //       arr.push(district);
  //     }
  //   }
  //   return of(arr).pipe(delay(3000));
  // }


  // getSectorName(_id): string{
  //   for(let obj of this.sectors_classifier){
  //     if(obj.id == _id){
  //       return obj.name;
  //     }
  //   }
  // }

  // getCountyNameById(_id): string{
  //   for(let obj of this.county_classifier){
  //     if(obj.id == _id){
  //       return obj.name;
  //     }
  //   }
  // }


  getImpStatusClassifier(): Observable<ClassifiersModel[]> {
    return this.http.get<ClassifiersModel[]>(`http://localhost:8080/projects/impStatuses`);
  }


  getDistricts(): Observable<ChildClassifierModel[]> {
    return this.http.get<ChildClassifierModel[]>(`http://localhost:8080/projects/districts`);
  }


  getSectorsClassifier(): Observable<ClassifiersModel[]> {
    return this.http.get<ClassifiersModel[]>(`http://localhost:8080/projects/sectors`);
  }

  getCountyClassifier(): Observable<ClassifiersModel[]> {
    return this.http.get<ClassifiersModel[]>(`http://localhost:8080/projects/countyes`);
  }
}
