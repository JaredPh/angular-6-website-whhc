// import { Injectable } from '@angular/core';
// import { NgRedux } from 'ng2-redux';
// import {
//   DECREMENT_ERROR,
//   DECREMENT_REQUEST, DECREMENT_SUCCESS, INCREMENT_ERROR, INCREMENT_REQUEST,
//   INCREMENT_SUCCESS,
// } from './events.actions';
// import { ADD_DAY, ADD_MONTH, ADD_WEEK } from './date.actions';
// import { IAppState } from './app.store';
//
// const errorWeight = 1 / 3;
// const delay = 1 * 1000;
//
// @Injectable()
// export class AppService {
//
//   constructor(
//     private redux: NgRedux<IAppState>,
//   ) {}
//
//   public increment() {
//     this.redux.dispatch({ type: INCREMENT_REQUEST });
//
//     setTimeout(() => {
//       const random = Math.random();
//
//         if (random > errorWeight) {
//           this.redux.dispatch({type: INCREMENT_SUCCESS});
//         } else {
//           this.redux.dispatch({type: INCREMENT_ERROR});
//         }
//       },
//       delay,
//     );
//   }
//
//   public decrement() {
//     this.redux.dispatch({ type: DECREMENT_REQUEST });
//
//     setTimeout(() => {
//         const random = Math.random();
//
//         if (random > errorWeight) {
//           this.redux.dispatch({type: DECREMENT_SUCCESS});
//         } else {
//           this.redux.dispatch({type: DECREMENT_ERROR});
//         }
//       },
//       delay,
//     );
//   }
//
//   public addDay() {
//     this.redux.dispatch({type: ADD_DAY});
//   }
//
//   public addWeek() {
//     this.redux.dispatch({type: ADD_WEEK});
//   }
//
//   public addMonth() {
//     this.redux.dispatch({type: ADD_MONTH});
//   }
// }
