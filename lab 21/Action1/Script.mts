Set obj=createobject("Excel.Application")
obj.visible=true
Set obj1=obj.workbooks.add
obj.Cells(1,1)="hello"
obj.Cells(2,1)="hello"
obj.Cells(3,1)="hello"
obj.Cells(4,1)="hello"
obj.Cells(5,1)="hello"
obj.Cells(1,2)="john"
obj.Cells(2,2)="kani"
obj.Cells(3,2)="anu"
obj.Cells(4,2)="hello"
obj.Cells(5,2)="hello"
obj1.SaveAs"C:\Users\Administrator\Documents\demo1.xlsx"'add file path
obj1.close
obj.Quit

Set obj1=nothing
Set obj=nothing

Set obj=createobject("Excel.Application")
obj.visible=true
Set obj1=obj.workbooks.open("C:\Users\Administrator\Documents\demo1.xlsx")
Set obj2=obj1.sheets.add
obj2.name="Sheet2"
Set obj3=obj1.sheets("Sheet2")
'obj3.delete
msgbox obj.Cells(2,2).Value
obj.rows("4:4").Delete

obj1.close
'obj2.close
obj.Quit
Set obj1=nothing
Set obj2=nothing
Set obj=nothing

'
'obj.rows("4:4").Delete
'
'Set obj2=obj1.sheets.add
'obj2.name="Sheet1"
'Set obj3=onj1.sheets("Sheet1")
'obj3.delete
'
'
'UFT Class 30
'(VBScript File System Operations Part-2, Excel Object Model Part-1)
'‘Read Test Data from a Text file and perform Data Driven Testing for Login Functionality.
'Dim objFso, objTextstream, myLine, myField
'Set objFso = CreateObject(“Scripting.FileSystemObject”)
'Set objTextstream = objFso.OpenTextFile(“C:\Users\G C Reddy\Desktop\UFT.txt”)
'objTextstream.SkipLine
'
'Do Until objTextstream.AtEndOfStream = True
'myLine = objTextstream.ReadLine
'myField = Split(myLine, “, “)
'
'
' 
'SystemUtil.Run “C:\Program Files\HP\Unified Functional Testing\samples\flight\app\flight4a.exe”
'Dialog(“Login”).Activate
'Dialog(“Login”).WinEdit(“Agent Name:”).Set myField(0)
'Dialog(“Login”).WinEdit(“Password:”).Set myField(1)
'wait 2
'Dialog(“Login”).WinButton(“OK”).Click
'Window(“Flight Reservation”).Close
'Loop
'
'objTextstream.Close
'Set objTextstream = Nothing
'Set objFso = Nothing
'
'‘Read Test Data (from 4 to 7 Records) from a Text file and perform Data Driven Testing for Login Functionality.
'Dim objFso, objTextstream, myLine, myField, LineCount
'Set objFso = CreateObject(“Scripting.FileSystemObject”)
'Set objTextstream = objFso.OpenTextFile(“C:\Users\G C Reddy\Desktop\UFT.txt”)
'
'LineCount= 0
'Do Until objTextstream.AtEndOfStream = True
'myLine = objTextstream.ReadLine
'LineCount = LineCount + 1
'
'If LineCount > 4 And LineCount <= 8 Then
'myField = Split(myLine, “, “)
'
'SystemUtil.Run “C:\Program Files\HP\Unified Functional Testing\samples\flight\app\flight4a.exe”
'Dialog(“Login”).Activate
'Dialog(“Login”).WinEdit(“Agent Name:”).Set myField(0)
'Dialog(“Login”).WinEdit(“Password:”).Set myField(1)
'wait 2
'Dialog(“Login”).WinButton(“OK”).Click
'Window(“Flight Reservation”).Close
'End If
'Loop
'
'
' 
'objTextstream.Close
'Set objTextstream = Nothing
'Set objFso = Nothing
'
'‘Write Data to a Text file
'Dim objFso, objTextstream, num1, num2, result
'num1 = 100 : num2= 200 : result = num1 + num2
'Set objFso = CreateObject(“Scripting.FileSystemObject”)
'Set objTextstream = objFso.OpenTextFile(“C:\Users\G C Reddy\Desktop\UFT.txt”, 2)
'objTextstream.Write “Addition of num1, num2 is: “& result
'objTextstream.Write “Subtraction of num1, num2 is: “& num1 – num2
'
'objTextstream.Close
'Set objTextstream = Nothing
'Set objFso = Nothing
'
'‘Write Data (Line by Line) to a Text file
'Dim objFso, objTextstream, num1, num2, result
'num1 = 100 : num2= 200 : result = num1 + num2
'Set objFso = CreateObject(“Scripting.FileSystemObject”)
'Set objTextstream = objFso.OpenTextFile(“C:\Users\G C Reddy\Desktop\UFT.txt”, 2)
'objTextstream.WriteLine “Addition of num1, num2 is: “& result
'objTextstream.WriteLine “Subtraction of num1, num2 is: “& num1 – num2
'
'objTextstream.Close
'Set objTextstream = Nothing
'Set objFso = Nothing
'
'‘Write Data (Append) to a Text file
'Dim objFso, objTextstream, num1, num2, result
'num1 = 500 : num2= 400 : result = num1 + num2
'Set objFso = CreateObject(“Scripting.FileSystemObject”)
'Set objTextstream = objFso.OpenTextFile(“C:\Users\G C Reddy\Desktop\UFT.txt”, 8)
'objTextstream.WriteLine “Addition of num1, num2 is: “& result
'
'objTextstream.Close
'Set objTextstream = Nothing
'Set objFso = Nothing
'
'‘Open 1 to 10 Orders and Read Order Number and Customer name
'‘Export to a Text file
'Dim objFso, objTextstream, num1, num2, result
'Set objFso = CreateObject(“Scripting.FileSystemObject”)
'Set objTextstream = objFso.OpenTextFile(“C:\Users\G C Reddy\Desktop\UFT.txt”, 2)
'‘Login to Application (One time)
'SystemUtil.Run “C:\Program Files\HP\Unified Functional Testing\samples\flight\app\flight4a.exe”
'Dialog(“Login”).Activate
'Dialog(“Login”).WinEdit(“Agent Name:”).Set “asdf”
'Dialog(“Login”).WinEdit(“Password:”).SetSecure “551b4bf7c618d4eede8b4426aa921e65623e0a6d”
'Dialog(“Login”).WinButton(“OK”).Click
'objTextstream.WriteLine “Order_No C_Name”
'objTextstream.WriteLine “———–”
'‘Open Order (10 times)
'For i = 1 To 10 Step 1
'Window(“Flight Reservation”).Activate
'Window(“Flight Reservation”).WinButton(“Button”).Click
'Window(“Flight Reservation”).Dialog(“Open Order”).WinCheckBox(“Order No.”).Set “ON”
'Window(“Flight Reservation”).Dialog(“Open Order”).WinEdit(“Edit”).Set i
'wait 2
'Window(“Flight Reservation”).Dialog(“Open Order”).WinButton(“OK”).Click
'OrderNo = Window(“Flight Reservation”).WinEdit(“Order No:”).GetROProperty(“text”)
'C_Name = Window(“Flight Reservation”).WinEdit(“Name:”).GetROProperty(“text”)
'objTextstream.WriteLine OrderNo & “, “& C_Name
'Next
'‘Close Application (One time)
'Window(“Flight Reservation”).Close
'
'objTextstream.Close
'Set objTextstream = Nothing
'Set objFso = Nothing
'
'‘Compare two text files by Size, by Text and by Binary values
'Dim objFso, objTextstream, File1, File2
'Dim objTextatream1, objTextstream2, Read1, Read2
'File1 = “C:\Users\G C Reddy\Desktop\UFT.txt”
'File2 = “C:\Users\G C Reddy\Desktop\abc.txt”
'
'Set objFso = CreateObject(“Scripting.FileSystemObject”)
'Msgbox “File 1 Size is: “& objFso.GetFile(File1).Size &” Bytes”
'Msgbox “File 2 Size is: “& objFso.GetFile(File2).Size &” Bytes”
'‘1) Compare two text files by Size
'If objFso.GetFile(File1).Size = objFso.GetFile(File2).Size Then
'Msgbox “Files are same by Size”
'Else
'Msgbox “Files are Not same by Size”
'End If
'
'‘2) Compare two text files by Text
'Set objTextatream1 = objFso.OpenTextFile(File1)
'Set objTextatream2 = objFso.OpenTextFile(File2)
'Read1 = objTextatream1.ReadAll
'Read2 = objTextatream2.ReadAll
'
'If StrComp(Read1, Read2, 1) = 0 Then
'Msgbox “Files are Same by Text”
'Else
'Msgbox “Files are Not Same by Text”
'End If
'‘3) Compare two text files by Binary Values
'If StrComp(Read1, Read2, 0) = 0 Then
'Msgbox “Files are Same”
'Else
'Msgbox “Files are Not Same”
'End If
'objTextatream1.Close
'objTextatream2.Close
'
'Set objTextatream1= Nothing
'Set objTextatream2 = Nothing
'Set objFso = Nothing
'
'
'VBScript Excel Object Model in UFT
'Excel Object Model
'Excel Application Object
'
'It is used to perform Operations on Excel Application / Excel files
'—————-
'Excel Application
'
'Excel File / Workbook
'
'Excel Sheet / Worksheet
'——————-
'Create Excel Application Object
'——————————
'
'Set Variable = CreateObject(“Excel.Application”)
'———-
'Examples:
'
'1) Create an Excel file/Workbook
'Dim objExcel
'Set objExcel = CreateObject(“Excel.Application”)
'objExcel.Visible = True ‘To view the operation during execution
'objExcel.Workbooks.Add ‘ To create new file
'objExcel.ActiveWorkbook.SaveAs “C:\Users\G C Reddy\Desktop\UFTExample.xlsx”
'
'objExcel.Quit ‘To close Excel Application
'Set objExcel = Nothing
'
'‘2) Check existence of Excel file, if not exists then create the file
'Dim objFso, objExcel
'Set objFso = CreateObject(“Scripting.FileSystemObject”)
'Set objExcel = CreateObject(“Excel.Application”)
'
'If Not objFso.FileExists(“C:\Users\G C Reddy\Desktop\UFTExample.xlsx”) Then
'objExcel.Workbooks.Add ‘ To create new file
'objExcel.ActiveWorkbook.SaveAs “C:\Users\G C Reddy\Desktop\UFTExample.xlsx”
'End If
'
'objExcel.Quit ‘To close Excel Application
'Set objExcel = Nothing
'Set objFso = Nothing
'
'‘3) Check existence of Excel file, if exists, open the file and enter some data. If not exist, create the file and enter some data.
'Dim objFso, objExcel
'Set objFso = CreateObject(“Scripting.FileSystemObject”)
'Set objExcel = CreateObject(“Excel.Application”)
'
'If objFso.FileExists(“C:\Users\G C Reddy\Desktop\UFTExample.xlsx”) Then
'objExcel.Workbooks.Open (“C:\Users\G C Reddy\Desktop\UFTExample.xlsx”)
'objExcel.Worksheets(1).Cells(1, 1) = “VBScript”
'objExcel.ActiveWorkbook.Save
'Else
'objExcel.Workbooks.Add
'objExcel.Worksheets(1).Cells(1, 1) = “VBScript”
'objExcel.ActiveWorkbook.SaveAs “C:\Users\G C Reddy\Desktop\UFTExample.xlsx”
'End If
'
'objExcel.Quit ‘To close Excel Application
'Set objExcel = Nothing
'Set objFso = Nothing
'———————————————–
'Excel Application Object (Main Object)
'
'Excel Workbook Object (Sub-Object)
'
'Excel Worksheet Object (Sub-sub Object)
'——————————
'
'
