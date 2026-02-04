import * as vscode from 'vscode';

export type StageTreeDataNode = {
    label: string;
    description?: string;
    children?: StageTreeDataNode[];
};

export class StageTreeDataProvider implements vscode.TreeDataProvider<StageTreeDataNode> {
    constructor(private readonly roots: StageTreeDataNode[]) {}

    getTreeItem(element: StageTreeDataNode): vscode.TreeItem {
    }

    getChildren(element?: StageTreeDataNode): StageTreeDataNode[] {
        return [];
    }
}
