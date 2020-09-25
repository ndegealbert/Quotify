import  React,{useState,useEffect} from  'react'
import  quote  from  "./../json/quote.json"
import  author  from  "./../json/authors.json"

export default  function  Quotify(){
    const [searchTerm,SetTerm] =  useState("")
 
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

getQuoteList()      
    const [quoteLists,SetQuoteList] =  useState([...quoteList])
    useEffect(() => {
        if(quoteLists.length===0) {
            console.log("Run")
            SetQuoteList([...quoteList])
        }
          
        
        return () => {
            
           // cleanup
        }
    }, [searchTerm])
  
    //setTheArray([...theArray, newElement]);
   // setNames(names => [...names, newName])


//Filter the QuoteList
function Filter(event){
        event.preventDefault()
        SetTerm(event.target.value)
        const text =searchTerm.toLowerCase().trim().split(" ")
        console.log(text)
        for(let i=0;i<text.length;i++){
            console.log(text)
        }
           let update = quoteLists.filter(quote =>{
            for (let i = 0; i < text.length; i++) {
            return quote.author.toLowerCase().includes(text[i])

            }
       
            
                        
                 
                
        })
            SetQuoteList([...update])
    
        
        

        
         
}




    // let test = quoteLists.filter(quote =>{
    //     return quote.author.includes('M')
    // })
    // console.log(test)        



console.log(searchTerm)

console.log(quoteLists)
//console.log(quoteList)
return <div>
    <form>
    <input type="text"  onChange={Filter} placeholder="filter using author name"/>

    </form>
          
    {
        quoteLists.map(q=>(
            <div>
            <p>{q.quote}</p>
            <h1> {q.author} </h1>
            </div>
           
        ))
    }
     
</div>
}