import  React,{useState,useEffect} from  'react'
import  quote  from  "./../json/quote.json"
import  author  from  "./../json/authors.json"
import  {Grid }  from  '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
  


export default  function  Quotify(){

    const classes = useStyles();
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
//console.log(searchTerm) //Used for testing when  developing
//console.log(quoteLists)
return <Grid container >
        <Grid item xs={12} spacing={2}>
            <h1>Quotify</h1>
        <p>Quotify is a small website made by Albert for you to find quotes from well known individuals around the world.</p>
         <form>
            <input type="text"  onChange={Filter} placeholder="filter using author name"/>
        </form>
        </Grid>
        <Grid container >
        <Grid item xs={12} >
        {
        quoteLists.map(q=>(
            <div>
            <p>{q.quote}</p>
            <h1> {q.author} </h1>
            </div>
           
        ))}      
        </Grid>
    </Grid>

    </Grid>
 }