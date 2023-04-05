'Browser("https://www.meesho.com/")
'Browser("Online Shopping Site for").Page("Online Shopping Site for").Sync
'Browser("Online Shopping Site for").Refresh
'

'Browser("Online Shopping site in").Page("Online Shopping site in").Sync
'Browser("Online Shopping site in").Navigate "https://www.amazon.in/"
'Browser("Online Shopping site in").Page("Online Shopping site in").WebButton("Open Menu").Click @@ script infofile_;_ZIP::ssf13.xml_;_
'Browser("Online Shopping site in").Page("Online Shopping site in").WebButton("Open Menu").Click @@ script infofile_;_ZIP::ssf12.xml_;_


 @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Online Shopping site in").Page("Online Shopping site in").Sync
Browser("Online Shopping site in").Navigate "https://www.amazon.in/"
Browser("Online Shopping site in").Page("Online Shopping site in").WebButton("Open Menu").Click

Browser("Online Shopping site in").Page("Online Shopping site in").WebButton("Open Menu").Click @@ script infofile_;_ZIP::ssf15.xml_;_


Dim obj
Set obj=description.Create()
obj("micclass").value="link"
Set ch1=Browser("Online Shopping site in").Page("Online Shopping site in").ChildObjects(obj)
msgbox ch1.count
For i = 1 To ch1.count-1 Step 1
	print ch1(i).GetRoProperty("innerhtml")
Next
