rowcount=datatable.GetSheet("Action1").GetRowCount

For i = 1 To rowcount Step 1
	datatable.SetCurrentRow(i)



systemutil.Run "https://practicetestautomation.com/practice-test-login/"
Browser("Test Login | Practice").Page("Test Login | Practice").WebEdit("username").Set DataTable("username", dtlocalSheet)

Browser("Test Login | Practice").Page("Test Login | Practice").WebEdit("password").Set DataTable("password", dtlocalSheet)
Browser("Test Login | Practice").Page("Test Login | Practice").WebButton("WebButton").Click
Browser("Test Login | Practice").Page("Test Login | Practice").WebButton("Submit").Click

Next 
