import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vstodo" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("vstodo.helloWorld", () => {
      vscode.window.showInformationMessage("Hello from vstodo!");
    })
  );
}

export function deactivate() {}
