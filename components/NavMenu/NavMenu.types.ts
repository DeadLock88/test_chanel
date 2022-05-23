export interface MenuElement {
    title: string;
    subMenu?: MenuContent;
    link?: string;
}

export interface MenuContent {
    [item: `item${number}`]: MenuElement;
}