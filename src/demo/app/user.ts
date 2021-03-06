import {Fillable, HasMany, Path, PrimaryKey, RestModel} from 'ng-rest-model';
import {Observable} from 'rxjs/Observable';
import {Album} from './album';

export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;

    albums?: Observable<Album>;
}

@Path('users')
@HasMany('albums', Album)
export class User extends RestModel<IUser> {

    @PrimaryKey()
    id: number;

    @Fillable()
    name: string;

    @Fillable()
    email: string;

    @Fillable()
    phone: string;

    // HasMany
    albums: Observable<Album>;

}
