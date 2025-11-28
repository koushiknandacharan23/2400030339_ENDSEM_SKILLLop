const Arraycom = () => {
    const arr1=[10,20,30,40,50]
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
  return (
    <div>
      <h1>Array elements are</h1>
      {arr1}
    </div>
  )
}

export default Arraycom