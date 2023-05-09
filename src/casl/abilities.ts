import {defineAbility} from '@casl/ability'
import { RoleTypes } from '../types/UserTypes';

export default(role:string) => defineAbility((can,cannot) => {
    can('read','Task');
    switch (role) {
        case 'user':
            can('create','Task')
            cannot('update','Task')
            cannot('delete','Task')
            cannot('finish','Task')
            break;
        case 'admin':
            can('create','Task')
            cannot('update','Task')
            cannot('delete','Task')
            can('finish','Task')
            break;
        case 'super_admin':
            can('create','Task')
            can('update','Task')
            can('delete','Task')
            can('finish','Task')
            break;
        default:
            break;
    }
})