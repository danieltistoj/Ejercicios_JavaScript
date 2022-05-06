const posts = [{
    id:1,
    title:"Mi primer post",
    imagen:"http://img.com/1",
    tags:['JavaScript','webdevelopment']
},
{
    id:2,
    title:"Mi experiencia con  React",
    imagen:"http://img.com/2",
    tags:['JavaScript','webdevelopment','React']
},
{
    id:3,
    title:"Por que deje Angular",
    imagen:"http://img.com/3",
    tags:['JavaScript','webdevelopment','angular']
},
]

//find 

const objeto1 = posts.find(post => post.title == 'Por que deje Angular')
console.log(objeto1)
 //some  - retorna verdadero o falso si encuentra lo que se busca

const some  = posts.some(post => post.id === 1) 

console.log(some)

//se va al post luego se consulta los tags para ver si alguno tiene el parametro React
const some2 = posts.some(post => post.tags.includes('React'))
console.log(some2)

//Every - comprueba si se cumple en todas

const every = posts.every(post => post.tags.includes('React')) //no esta en todos
console.log(every)

const every2 = posts.every(post => post.tags.includes('JavaScript')) //esta en todos
console.log(every2)

//Map

const map = posts.map(post => post.title) // devuelve todos los titulos
console.log(map)

//Map - filtrar

const filtro = posts.filter(post => post.tags.includes('angular'))
console.log(filtro) //retorna una lista con el parametro que tenemos 

//reduce 

const reduce = posts.reduce((allTags,post)=>{
    return [...allTags,...post.tags]
},[]).filter((post,index,self) => index === self.indexOf(post))
console.log(reduce)
