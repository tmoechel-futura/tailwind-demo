import Button from "./components/button/Button";
import IconButton from "./components/button/IconButton";

export default function App() {
  function handleClick() {
    console.log("Button clicked!");
  }

  function handleMouseOver() {
    console.log("Mouse over!");
  }

  return (
    <main className="grid grid-cols-6 gap-2 m-4">
      <div className="flex flex-col gap-2">
        <IconButton buttonType="primary" onClick={handleClick} rounded="md" buttonIcon="save">Save</IconButton>
        <IconButton buttonType="primary" outline buttonIcon="download">Pri Outline</IconButton>
        <Button buttonType="primary" onMouseMove={handleMouseOver}>Primary Basic</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button buttonType="secondary" rounded="lg" >Sec. Rounded</Button>
        <Button buttonType="secondary" outline>Sec. Outline</Button>
        <Button buttonType="secondary">Sec. Basic</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button buttonType="success" rounded="lg">Success</Button>
        <Button buttonType="success" outline>Succ Outline</Button>
        <Button buttonType="success">Success Basic</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button buttonType="warning" rounded="full">Warning</Button>
        <Button buttonType="warning" outline>Warn Outline</Button>
        <Button buttonType="warning">Warning Basic</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button buttonType="danger" rounded="md">Error</Button>
        <Button buttonType="danger" outline>Error Outline</Button>
        <Button buttonType="danger">Error Basic</Button>
      </div>
    </main>
  )
}
