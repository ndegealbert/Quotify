import  React,{useState}  from  'react'
import  quote  from  "./../json/quote.json"
import  author  from  "./../json/authors.json"

export default  function  Quotify(){
    const [searchTerm,SetTerm] =  useState("")
    const [quoteLists,SetQuoteList] =  useState([])
    let quoteList= []
    //get QuoteList
    function getQuoteList(){
        for(let i=0;i< quote.length;i++){
             quoteList.push(
                {
                quote:quote[i].quote, 
                author:author[quote[i].authorIndex].name
                })     
            }
        } 

    //setTheArray([...theArray, newElement]);
   // setNames(names => [...names, newName])


//Filter the QuoteList
function Filter(event){
        event.preventDefault()
        SetTerm(event.target.value)
        SetQuoteList([...quoteLists,quoteList])
        //Trim Search  Tearm  
        const name = quoteLists.filter( quote=>{
           
            return quote.name == 'Albert'
            /**for (let i = 0; i <searchTerm.length; i++) {
            
                return quote.author==quote.author.toLowerCase().includes(searchTerm[i].toLowerCase())
              }*/
              
         })
         console.log(name)

   
        
}


const data = [
    {
        name:"Albert",
        city:"Dubai"
    },
    {
        name:"John",
        city:"Dubai"
    },
    {
        name:"James",
        city:"Dubai"
    },
    {
        name:"Albert",
        city:"Nairobi"
    },
    {
        name:"Albert",
        city:"Mombasa"
    },
    {
        name:"Albert",
        city:"Kisumu"
    }
]

console.log(author)
const  test = author .filter(n =>{
    return  n.nationality == "Indian"
})


console.log(test)

console.log(searchTerm)
console.log(quoteLists)
getQuoteList()

return <div>
    <form>
    <input type="text" onChange={Filter} placeholder="filter using author name"/>

    </form>
          
    {
        quoteList.map(q=>(
            <div>
            <p>{q.quote}</p>
            <h1> {q.author} </h1>
            </div>
           
        ))
    }
     
</div>
}