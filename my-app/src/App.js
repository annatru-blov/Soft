import Description from "./components/description/description"
import Using from "./components/using/using"
import Services from "./components/services/services"
import Form from "./components/form/form"
import Footer from "./components/footer/footer"
import Stack from "./components/stack/stack"
import Example from "./components/example/example";
import ChatButton from "./components/chat/chatbutton"


function App() {
  return (
    <div className="App">
      <Example />
        <Description />
        <Using />
        <Services />
        <Stack />
        <Form />
        <ChatButton />
        <Footer />
    </div>
  );
}

export default App;
