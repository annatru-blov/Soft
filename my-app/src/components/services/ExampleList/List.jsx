import ExampleList from "./ExampleList"

function List(){
const texts = ["Web Dev","Mobile Dev","UI & UX disign","DevOps Eng","Custom web dev"]
const subtexts = ["Web Dev - создание веб-сайта или веб-приложения  ","Mobile Dev - создание мобильных приложений на Android и IOS","UI & UX design - проектирование пользовательских интерфейсов ","DevOps Eng - методология непрерывной разработки программного обеспечения","Custom web dev - создание уникального веб-сайта"]

return  (<div>
    {texts.map((text,i)=>{
return <ExampleList title={text} key={text} subtext={subtexts[i]}/>
    })}
</div>
)
}

export default List