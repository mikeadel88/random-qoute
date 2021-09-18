var btn=document.getElementById("btn");
var quotes=document.getElementById("quotes");
var authors=document.getElementById("author");
var randomQuotes=[{quote:"Be yourself; everyone else is already taken.",author:"― Oscar Wilde"},
{quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",author:"― Albert Einstein"},
{quote:"So many books, so little time.",author:"― Frank Zappa"},
{quote:"A room without books is like a body without a soul.",author:"― Marcus Tullius Cicero"},
{quote:"Be the change that you wish to see in the world.",author:"― Marcus Tullius Cicero"},
{quote:"If you tell the truth, you don't have to remember anything",author:"― Mark Twain"},
{quote:"It is better to be hated for what you are than to be loved for what you are not.",author:"― Andre Gide, Autumn Leaves"}
];

btn.addEventListener("click",function(){
    var index=Math.floor(Math.random() * randomQuotes.length);
   // console.log(index);
    quotes.innerHTML=`"`+randomQuotes[index].quote+`"`;
    authors.innerHTML=randomQuotes[index].author;
})