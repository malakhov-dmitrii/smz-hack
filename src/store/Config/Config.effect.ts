import { Action } from 'redux-actions';
import { ActionsObservable, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ConfigActions } from './Config.actions';
import { getConfig } from './Config.service';

// export const getConfig$ = (actions$: ActionsObservable<Action<string>>) => {
//   return actions$.pipe(
//     ofType(ConfigActions.GetConfig),
//     switchMap(() => {
//       return getConfig().pipe(
//         map(data => ({
//           type: ConfigActions.GetConfigSuccess,
//           payload: { data },
//         })),
//         catchError(error => {
//           const message = JSON.parse(JSON.stringify(error)).message || 'Неизвестная ошибка';
//           return of({
//             type: ConfigActions.GetConfigError,
//             payload: { error: message },
//           });
//         }),
//       );
//     }),
//   );
// };
