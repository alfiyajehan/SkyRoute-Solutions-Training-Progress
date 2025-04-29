### TASK 1 ### -> HTML FORMS ->

> What is an Html form 
It is a structure whose core purpose is to (collect data) collect user input. 

>Basic tags of form

1. form -> To create html form.

> Form element 
1. input
2. label
3. select
4. option
5. button
6. textarea
7. feildset
8. legend

# input -> 
- defines the type of input 
# label -> 
- create lable for input
# select ->
- create drop down menu
# option ->
- for creating option
# button ->
- for creating button
# textare ->
- for taking multi-line input
# feildset ->
- for grouping elements
# legend ->
- for caption


    <form>
        <label for="email">Enter email id:</label>
        <input type="text" id ="email">

        <br><br>

        <label for="password">Enter password: </label>
        <input type="text" id="password">
        <br><br>

         <!-- <input type="submit" value="submit"> -->
         <button>submit</button>
    </form>


<form> </form>
- **form** ->define the form basic structure

<input type="text" id ="email">  -> 
- **input** ->create a feild for input
- **type** ->defines the types of input
- **id** -> id for each input 

<label for="email">Enter email id:</label> -> 
- **label** ->creates a lable for email i.e. text
- **for** ->it links input tag with label tag

<br><br>
-- **br** -> move the next element to the next line 
- secon br is used to move the element to the next line, that makes a space between the 2 feilds


<input type="text" id="password">  -> 
- **input** ->create a feild for input
- **type** ->defines the types of input, i.e. password
- **id** -> id for each input 

<label for="password">Enter password: </label> -> 
- **label** ->creates a lable for password
- **for** ->it links input tag with label tag

<br><br>
-- **br** -> move the next element to the next line 
- secon br is used to move the element to the next line, that makes a space between the 2 feilds

2 ways to create submit button->
1. <input type="submit" value="submit">
- **input** ->create a feild for input
- **type** ->defines the types of input, i.e. submit
- **value** -> it defines the value which will be available to the user.

2. <button>submit</button>'
- **button** -> creates a button

<form >
        <fieldset>

            <legend>Html Form</legend>

            <!-- Name -->
            <label for="Name">Name:</label>
            <input type="text" id="Name" placeholder="Enter your name">
        
            <br><br>
            <!-- Age -->
            <label for="age">Age: </label>
            <input type="number" id="age" placeholder="0">
        
            <br><br>
            
            <!-- Date of birth-->
            <label for="datePicker">DOB: </label>
            <input type="date" id ="datePicker">
        
            <br><br>
            <!-- Languages -->
            <label for="lang"> Select role:</label>
            <select name="lang" id="lang">
                <option value="Frontend development">Frontend development</option>
                <option value="Backend development">Backend development</option>
                <option value="Fullstack development">Fullstack development</option>
            </select>
            <br><br>
            <!-- 100 words describing the skills -->
            <textarea name="ta" id="ta" rows="10" cols="30" placeholder="Write 100 words describing your skills"></textarea>
    

        </fieldset>
    </form>    




### TASK 2 ###-> ELEMENT OF INPUT TAG->

## type attribute
- specifically type attribute defines the type of input
for eg -> input type be text , checkbox or radio
- by default value of type attribute is text 

## id attribute
- unique id is given to each input

## name attribute
- to define the name of each feild

3. label -> used to create label 

## for attribute
- each label contain for attribute whose value will always be equal to input id, this is how lable tag is linked with input tag

## value attribute
- define the value that will be assigned to that element for which value attribute is created for

## palceholder attribute
- 

> INPUT ELEMENTS->
1. textfeild
2. radio
3. button
4. checkbox
5. radio
6. file-select
7. password
8. date


    <form>
        <label for="email" placeholder="abcd@gamil.com">Email id:</label>
        <input type="text" id ="email">

        <br><br>

        
        <label for="gender">Gender: </label>     
        <br>
        <label for="male">Male: </label>
        <input type="radio" id="male" name="gender" value="male"> 
        
        <label for="male">Female: </label>                                                                                               
        <input type="radio" id="female" name="gender" value="female">   
        
        <label for="male">Other: </label>                                                                                                 
        <input type="radio" id="other" name="gender" value="other">                                                                                                   
        <br><br>
        
        <label for="lang">Select languages:</label>
        <br>
        <label for="eng">English: </label>
        <input type="checkbox" id="eng">
        <label for="hindi">Hindi: </label>
        <input type="checkbox" id="hindi">
        <br><br>
        
        <label for="upload">Resume:</label>
        <input type="file" id="upload">
        
        <br><br>

        <label for="password" placeholder="**********">Enter password: </label>
         <input type="password" id="password">
         <br><br>

        <input type="image" src="https://static.vecteezy.com/system/resources/previews/016/177/935/non_2x/login-buttons-sign-label-speech-login-vector.jpg" alt="login" height="70px" width="100px">
    </form>
