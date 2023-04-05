msgbox "hello"
 @@ hightlight id_;_65704_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").WaitProperty "visible", true, 10000 @@ hightlight id_;_2023923048_;_script infofile_;_ZIP::ssf4.xml_;_

If WpfWindow("HPE MyFlight Sample Applicatio").exist(12) Then
msgbox "working"
else
msgbox "not working"	
End If
wait(10) 
msgbox "uft"
Browser("democalculator for testing").sync @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("democalculator for testing").Page("Ideal Weight Calculator").WebEdit("cage").Set "22" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("democalculator for testing").Page("Ideal Weight Calculator").WebRadioGroup("csex").Select "f" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("democalculator for testing").Page("Ideal Weight Calculator").WebEdit("cheightinch").Set "00" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("democalculator for testing").Page("Ideal Weight Calculator").Image("Calculate").Click 5,5 @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("democalculator for testing").Page("Ideal Weight Calculator").Link("Metric Units").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("democalculator for testing").Page("Ideal Weight Calculator").WebEdit("cheightmeter").Set "170" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("democalculator for testing").Page("Ideal Weight Calculator").Image("Calculate").Click 5,5 @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("democalculator for testing").Page("Ideal Weight Calculator").Image("Calculate").Click 5,5 @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("democalculator for testing").Page("Ideal Weight Calculator").Link("Other Units").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("democalculator for testing").Page("Ideal Weight Calculator").Frame("Frame").WebList("calFrom").Select "Millimeter" @@ script infofile_;_ZIP::ssf18.xml_;_



