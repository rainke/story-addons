export interface IStory {
    name: string;
    render: Function
}
export interface IStorybookItem {
    fileName: string;
    kind: string;
    stories: IStory[];
}

export type TStroybook = IStorybookItem[];