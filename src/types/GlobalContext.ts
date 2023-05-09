

export type GlobalContextComponentProps = {
    children: React.ReactNode
}

export type Task = {
    id: string;
    task: string;
}

export type TaskActionType = 
    | {type: 'add',payload:Task}
    | {type: 'delete',payload:Task}
    | {type: 'edit',payload:Task}
    | {type: 'finish',payload:Task}

export type GlobalContextType = {
    tasks: Task[];
    dispatchTasks: React.Dispatch<TaskActionType>;
    inputRef: React.MutableRefObject<HTMLInputElement> ;
    editId: string;
    setEditId: React.Dispatch<React.SetStateAction<string>>;    
    currentUserType: string;
    setCurrentUserType: React.Dispatch<React.SetStateAction<string>>;
}