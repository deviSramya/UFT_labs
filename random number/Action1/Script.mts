msgbox RandomNumber(0, 100)
msgbox RandomNumber(0, 100)

systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set RandomNumber(0, 100)
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set RandomNumber(0, 100)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").close


