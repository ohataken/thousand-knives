import * as vscode from 'vscode';

export type StageTreeDataNode = {
    label: string;
    description?: string;
    children?: StageTreeDataNode[];
};

export class StageTreeDataProvider implements vscode.TreeDataProvider<any> {
    constructor(private readonly roots: any[]) {}

    getTreeItem(element: any): vscode.TreeItem {
    }

    getChildren(element?: any): any[] {
        return [];
    }
}
