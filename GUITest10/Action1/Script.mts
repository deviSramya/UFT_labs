﻿systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("username", dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("password", dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").close

