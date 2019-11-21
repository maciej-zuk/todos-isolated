export class Add {
    static readonly type = '[Todo] Add';
    constructor(public text: string) { }
}

export class MarkDone {
    static readonly type = '[Todo] Mark Done';
    constructor(public id: string) { }
}

export class MarkUndone {
    static readonly type = '[Todo] Mark Undone';
    constructor(public id: string) { }
}

export class Remove {
    static readonly type = '[Todo] Remove';
    constructor(public id: string) { }
}

export class RenameList {
    static readonly type = '[Todo List] Rename';
    constructor(public name: string) { }
}
