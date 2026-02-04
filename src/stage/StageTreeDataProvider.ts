import * as vscode from 'vscode';

export class StageTreeDataProvider implements vscode.TreeDataProvider<any> {
    constructor(private readonly roots: any[]) {}
}
