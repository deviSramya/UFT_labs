Set objexcel=CreateObject ("Excel.Application")
Set objworkbook=objexcel.workbooks.open("C:\Users\Administrator\Documents\Book1.xlsx")
Set objworksheet=objworkbook.worksheets(1)
rowcount=objworksheet.usedrange.rows.count
msgbox rowcount
For i = 2 To rowcount Step 1
	
systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set cstr(Objworksheet.cells(i,1))
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set cstr(Objworksheet.cells(i,2))
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").close
 
next
set objworkbook=nothing
set objworksheeet=nothing
