import { User } from '../classes/user';

export interface Approver {
    approver: User,
    approvees: User[]
}
