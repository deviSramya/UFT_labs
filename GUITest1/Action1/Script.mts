
'add employee data

Set employee=createobject("Scripting.Dictionary")
employee.add "1001","narmatha:pune"
employee.add "1002","rajendra:mumbai"
employee.add "1003","vanitha:chennai"
employee.add "1004","sharadha:mumbai"
employee.add "1005","tarun:delhi"
'add employee details and store it and execute
For each  i in employee.items	
print i
Next
'insert employeeD and other details
addID=inputbox("enter employee ID")
addName=inputbox("enter employee name :")
addLoc=inputbox("enter employee location")
msgbox "employee name is " &addname  
msgbox "employee location is " &addLoc

'display successfully added message

msgbox "employee information stored successfully"

'enter employeeID and check is exist or not

employeeID=inputbox("enter employee ID")
If employee.exists(employeeID) Then
msgbox "employeeID already exist",vbcritical,"ok"
else
msgbox "employeeID not exist"
End If






