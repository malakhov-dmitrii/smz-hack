import { Axios } from 'axios-observable';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

// export const getConfig = () => {
//     return Axios.request({
//         method: 'GET',
//         url: `PASTE_URL_HERE`
//     }).pipe(
//         map(({ data }) => data)
//     );
// };

export const getConfig = () => {
    return of<any>({message: "Hello world!"});
};