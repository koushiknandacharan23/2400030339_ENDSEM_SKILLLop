const Arraycom = () => {
    const arr1=[10,20,30,40,50]
    const student={name:"koushik",age:19,id:"2400030339"}
    console.log("Printing the array normally")
    console.log(arr1)
    console.log("Printing array using for of :")
    for (let x of arr1)
    {
        console.log(x)
    }
    console.log("Printing array using for in ")
    for (let i in arr1)
    {
        console.log(arr1[i])
    }
    console.log("Student Detailes: ")
    console.log(student);
  return (
    <div>
      <h1>Array elements are</h1>
      {arr1}
      <h2>Array elements using Map</h2>
      <ul>
        {
           arr1.map((x,index)=>(
           <li key={index} style={{listStyleType:"none"}}>{x}</li>
          ))
        }
      </ul>
      <h3>Student Details : </h3>
      {
        
          <pre>
            StudentId:{student.id}{"\n"}
            StudentName:{student.name}{"\n"}
            StudentAge:{student.age}
          </pre>
        
      }
    </div>
  )
}

export default Arraycom