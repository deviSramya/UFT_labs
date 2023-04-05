Dim objfso
Set objfso=Createobject ("scripting.filesystemobject")
objfso.CreateFolder "C:\uft\demofso2"
objfso.CreateTextFile "C:\uft\demofso\file2.txt"
objfso.CreateTextFile "C:\uft\demofso\file2.pdf"
objfso.CreateTextFile "C:\uft\demofso\file2.xlsx"
objfso.CreateTextFile "C:\uft\demofso\file2.doc"
objfso.DeleteFile "C:\uft\demofso\file2.xlsx"
Set objfso=nothing
