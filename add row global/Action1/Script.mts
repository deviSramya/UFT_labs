﻿systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("p_text", dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set DataTable("p_text1", dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").close

