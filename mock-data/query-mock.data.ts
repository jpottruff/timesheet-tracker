import {Approver} from '../src/app/interfaces/approver';

export const APPROVER_QUERY_DATA: Approver[] = [
    { approver: {userId: 1, username: 'mockuser1', firstname: 'Terry', lastname: 'Crews', email: 'tcrews@email.com'},
      approvees: [
        {userId: 1, username: 'mockuser1', firstname: 'Terry', lastname: 'Crews', email: 'tcrews@email.com'},
        {userId: 2, username: 'mockuser2', firstname: 'Charles', lastname: 'Boyle', email: 'cboyle@email.com'},
        {userId: 4, username: 'mockuser4', firstname: 'Amy', lastname: 'Santiago', email: 'asantiago@email.com'},
        {userId: 5, username: 'mockuser5', firstname: 'Jake', lastname: 'Peralta', email: 'jperalta@email.com'}
      ]
    },
    { approver: {userId: 3, username: 'mockuser3', firstname: 'Captain', lastname: 'Holt', email: 'cholt@email.com'},
      approvees: [
        {userId: 1, username: 'mockuser1', firstname: 'Terry', lastname: 'Crews', email: 'tcrews@email.com'},
        {userId: 2, username: 'mockuser2', firstname: 'Charles', lastname: 'Boyle', email: 'cboyle@email.com'},
        {userId: 3, username: 'mockuser3', firstname: 'Captain', lastname: 'Holt', email: 'cholt@email.com'},  
      ]
    },
]