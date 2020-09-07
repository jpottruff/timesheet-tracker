import {User} from '../src/app/classes/user';

export const USERS: User[] = [
    {userId: 1, username: 'mockuser1', firstname: 'Terry', lastname: 'Crews', email: 'tcrews@email.com'},
    {userId: 2, username: 'mockuser2', firstname: 'Charles', lastname: 'Boyle', email: 'cboyle@email.com'},
    {userId: 3, username: 'mockuser3', firstname: 'Captain', lastname: 'Holt', email: 'cholt@email.com'},
    {userId: 4, username: 'mockuser4', firstname: 'Amy', lastname: 'Santiago', email: 'asantiago@email.com'},
    {userId: 5, username: 'mockuser5', firstname: 'Jake', lastname: 'Peralta', email: 'jperalta@email.com'}
];

export const USERGROUPS = [
    {userId: 1, groupId: 1, groupName: 'Group A', isAdmin: false},
    {userId: 2, groupId: 1, groupName: 'Group A', isAdmin: false},
    {userId: 3, groupId: 1, groupName: 'Group A', isAdmin: true},
    {userId: 4, groupId: 1, groupName: 'Group A', isAdmin: false},
    {userId: 5, groupId: 1, groupName: 'Group A', isAdmin: false}
]



    