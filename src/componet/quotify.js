import  React,{useState,useEffect} from  'react'
import  quote  from  "./../json/quote.json"
import  author  from  "./../json/authors.json"
import  {Grid }  from  '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from  './quotify.module.css'
const useStyles = makeStyles((theme) => ({
    root: {
         width:"85%",
         marginLeft:'10%',
    
         
    },
    root2:{
        position:'relative',
        marginTop:theme.spacing(0)
        

    },
    paper:{
        border:'2px solid rgb(194, 165, 0)',
        borderRadius:'15px', 
        flex:1,
        position:'relative',    
        top:"0px",
    },    
    quote:{
        padding:"10px",
        lineHeight:1.7,
    },
    author:{
        marginLeft:'5px',
        marginBottom:'30px',

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
return <div className={classes.root}>
<Grid container spacing={3} >
        <Grid item xs={12} spacing={2}>
        <h1 className={styles.header}>Quotify</h1>
        <p>Quotify is a small website made by <span style={{color:'green'}} >  Albert </span>  for you to find quotes from well known individuals around the world.</p>
         <form>
            <input   className={styles.input} type="text"  onChange={Filter} placeholder="Filter using author name"/>
        </form>
        </Grid>
        <Grid container spacing={1} >
            {
              quoteLists.map(q =>(
                <Grid className={classes.root2}  item xs={12} md={3} sm={4}>
                <Paper className={classes.paper}>
                <p className={classes.quote}>{q.quote}</p>
                <h4 className={classes.author}>{q.author}</h4>
                </Paper>
                </Grid>
              ))
            } </Grid>

    </Grid>
    </div>
 }
