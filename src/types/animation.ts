export type AnimationTypes = {
    component: () => React.JSX.Element | undefined;
    name: string;
    id: number;
    title: string;
    category: string;
    video: string;
    color: string;
    image: string;
    sourcePath: string;
    description: string;
    sectionBefore: boolean;
    sectionAfter: boolean;
}