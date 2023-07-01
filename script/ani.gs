function example1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EXAMPLE1');
  var valueA1 = sheet.getRange('A1').getValue();
  sheet.getRange('C1').setValue(valueA1);
  sheet.getRange('D1').setValue('DOG');
  sheet.getRange(1, 5).setValue('CAT'); // E1
  debugger;
}

function example2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EXAMPLE2');
  var valueRange = sheet.getRange('A1:C4').getValues();
  sheet.getRange('E1:G4').setValues(valueRange);
  sheet.getRange('I1:K3').setValues([
    ['A', 'B', 'C'],
    ['E', 'F', 'G'],
    ['H', 'I', 'J']
  ]);
  debugger;
}

function example3() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EXAMPLE2');
  var valueRange = sheet.getRange('A1:C4').getValues();
  sheet.appendRow(valueRange[0]);
  debugger;
}


function example4() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EXAMPLE2');
  var valueRange = sheet.getRange('A1:C4').getValues();
  for (i = 0; i < valueRange.length; i++) {
    sheet.appendRow(valueRange[i]);
  }
  debugger;
}

function example5() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EXAMPLE2');
  var allData = sheet.getDataRange().getValues();
  debugger;
  valueRange = sheet.getRange('A1:C4').getValues();
  for (i = 0; i < valueRange.length; i++) {
  sheet.appendRow(valueRange[i]);
}
debugger;
}
