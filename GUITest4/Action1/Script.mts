systemutil.Run "https://demo.opencart.com/"
Browser("Your Store").Page("Your Store").Link("My Account").Click @@ script infofile_;_ZIP::ssf63.xml_;_
Browser("Your Store").Page("Your Store").Link("Register").Click @@ script infofile_;_ZIP::ssf64.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("firstname").Set "ramya" @@ script infofile_;_ZIP::ssf65.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("lastname").Set "rv" @@ script infofile_;_ZIP::ssf66.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email").Set "ramyarv@gmail.com" @@ script infofile_;_ZIP::ssf67.xml_;_
Browser("Your Store").Page("Register Account").WebElement("Desktops PC (0) Mac (1)").Click @@ script infofile_;_ZIP::ssf68.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "640adbc61d7cb36b2e6f6b9396658da91be505b6dfc9b721" @@ script infofile_;_ZIP::ssf69.xml_;_
Browser("Your Store").Page("Register Account").WebCheckBox("agree").Set "ON" @@ script infofile_;_ZIP::ssf70.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf71.xml_;_
Browser("Your Store").Page("Register Account").Link("My Account").Click @@ script infofile_;_ZIP::ssf72.xml_;_
Browser("Your Store").Page("Register Account").Link("Login").Click @@ script infofile_;_ZIP::ssf73.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email_2").Set "ramyarv@gmail.com" @@ script infofile_;_ZIP::ssf74.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "640adbdc78f640429aad09dcf4e7e6e324d32998b109c4d3" @@ script infofile_;_ZIP::ssf75.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Login").Click @@ script infofile_;_ZIP::ssf76.xml_;_
Browser("Your Store").Page("Register Account").Sync
Browser("Your Store").Close

