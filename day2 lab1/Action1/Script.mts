systemutil.Run "https://www.meesho.com/?source=profile&entry=header&screen=HP" @@ script infofile_;_ZIP::ssf36.xml_;_

If Browser("Online Shopping Site for").exist(12) Then
msgbox "working"
else
msgbox "not working"	
End If

'Browser("Online Shopping Site for").sync
Browser("Online Shopping Site for").Page("Online Shopping Site for").WebElement("Women Ethnic").Click @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Online Shopping Site for").Page("Online Shopping Site for").Link("Tops").Click @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Online Shopping Site for").Page("Ladies Tops - Buy Ladies").Image("Classic Elegant Women").Click @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Online Shopping Site for").Page("DHUNKI WOMEN CENTRAL LACE").WebButton("Add to Cart").Click
Browser("Online Shopping Site for").Page("DHUNKI WOMEN CENTRAL LACE").WebElement("S").Click @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Online Shopping Site for").Page("DHUNKI WOMEN CENTRAL LACE").WebButton("Add to Cart").Click @@ script infofile_;_ZIP::ssf42.xml_;_
wait (7)
Browser("Online Shopping Site for").Page("DHUNKI WOMEN CENTRAL LACE").WebButton("Buy Now").Click @@ script infofile_;_ZIP::ssf43.xml_;_
wait (5)

Browser("Online Shopping Site for").close
