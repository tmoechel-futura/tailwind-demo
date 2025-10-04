
import Accordion from "./components/accordion/Accordion"
import ButtonPage from "./pages/componentPages/ButtonPage"

export default function App() {

  const items = [
    {
      label: "Accordion Item #1",
      content: "Accordion Item and a lot of text to show how it looks like when there is more text in the accordion content area."
    },
    {
      label: "Accordion Item #2",
      content: "Accordion Item and a lot of text to show how it looks like when there is more text in the accordion content area. This is the second item."
    },
    {
      label: "Accordion Item #3",
      content: "Accordion Item and a lot of text to show how it looks like when there is more text in the accordion content area. This is the third item. It has even more text than the other two items to demonstrate the behavior with larger content. "
    }
  ]
  return (
    <main>
      <ButtonPage />
      <Accordion items={items} />
    </main>
  )
}
