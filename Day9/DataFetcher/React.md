# USEEFFECT HOOK->
manage side effects(change)->
kisi component pr koi action kiya n us component ko chordh kar kisi ekement mein change ho gaya so usse side effect kehte hain.


# SYNTAX->

useEffect(()=>{

});

when component gets render -> useeffect execution starts

useEffect(()=>{

},[empty array]);-> only one time it will get executed

# 1.USEEFFECT FOR EVERY RENDER->
  useEffect(()=>{
    console.log('UI rendering done')
 })

# 2.USEEFFECT FOR FIRST RENDER->
  useEffect(()=>{
    console.log('UI rendering done')
 },[])

# 3.USEEFFECT FOR FIRST RENDER AND WHEN THE DEPENDENCY CHANGES->
useEffect(()=>{
  console.log('Change observed')
},[text])

# 4.TO HANDLE UNMOUNTING OF COMPONENTS->
useEffect(()=>{

  //add event listener
  console.log('Listener added');

  return()=>{
    console.log('Listener removed')
  }
},[text])

In this first the statement inside return will get executed then the statement outside the return will get executed.

# DIFFERENCE BETWEEN USESTATE AND USEEFFECT->


# USESTATE->
to handle variable's state-> u changed or update the value of the variable ->the updated or changed value should be reflected on th UI 


# USEEFFECT->
agar tum apne component ke render hone ke baad koi bhi task karwaana chahate ho 


# USEEFFECT INPUT->
In this we take 2 parameters as input->
1.callback function(logic)
2.array of dependencies(based on which side effect gets executed)

# MOUNT->
Component dom pe render ho gaya

# UNMOUNT->
Component dom se remove ho gaya hai

# CREATION OF COMPONENTS->
1.Functional based components
2.Class based components 


# LIFECYCLE METHOD IN CLASS BASED COMPONENTS->
1.Componentsdid mount
2.Componentedid update
3.Componentswill unmount