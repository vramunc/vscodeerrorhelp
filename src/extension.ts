// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "vscodeerrorhelp" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.vscodeerrorhelp', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// var copyDisposable = vscode.commands.registerCommand('problems.action.copy', () => {
		// 	console.log('test');
		// 	copyDisposable.dispose();
		// 	vscode.commands.executeCommand("problems.action.copy").then(() => {
		// 	  copyDisposable = vscode.commands.registerCommand('deleteRight', deleteOverride)
		// 	  ctxsubscriptions.push(deleteDisposable);
		// 	});
		//   })
	  
		//   var deleteOverride = () => {
		// 	let editor = vscode.window.activeTextEditor;
		// 	if (!editor) {
		// 	  return
		// 	}
		// 	let selection = editor.selection;
		// 	let text = editor.document.getText(selection);
		// 	this.logEdits('delete', text);
		// 	deleteDisposable.dispose();
		// 	vscode.commands.executeCommand("deleteRight").then(() => {
		// 	  deleteDisposable = vscode.commands.registerCommand('deleteRight', deleteOverride)
		// 	  subscriptions.push(deleteDisposable);
		// 	});
		//   }
		console.log('test');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}