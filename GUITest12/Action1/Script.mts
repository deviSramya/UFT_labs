rowcount=datatable.GetSheet("Action1").GetRowCount

For i = 1 To rowcount Step 1
	datatable.SetCurrentRow(i)


systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("uname", dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("password", dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").close


Next 
