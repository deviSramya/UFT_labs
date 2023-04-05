
systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

'WpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=agentName").Set "john"
'WpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=password").Set "hp"
'WpfWindow("devname:=HPE MyFlight Sample Application").WpfButton("text:=OK").Click
'
Dim win,uname,password,okbutton
Set win=Description.Create()
Set uname=Description.Create()
Set password=Description.Create()
Set okbutton=Description.Create()

win("devname").value="HPE MyFlight Sample Application"
uname("devname").value="agentName"
password("devname").value="password"
okbutton("text").value="OK"

WpfWindow(win).WpfEdit(uname).Set "john"
WpfWindow(win).WpfEdit(password).Set "hp"
WpfWindow(win).WpfButton(okbutton).Click
WpfWindow(win).close


